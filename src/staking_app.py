from pyteal import *

# Constants / keys
GLOBAL_TOTAL_STAKED = Bytes("TS")  # uint64 total microalgos staked
GLOBAL_REWARD_PER_SHARE = Bytes("RPS")  # uint64 scaled by SCALE
GLOBAL_LAST_UPDATE = Bytes("LU")  # uint64 last timestamp
GLOBAL_REWARD_ASSET = Bytes("RA")  # uint64 ASA id used for rewards
GLOBAL_NFT_SEQ = Bytes("NS")  # uint64 sequential counter for NFT numbering

LOCAL_STAKED = Bytes("S")
LOCAL_REWARD_DEBT = Bytes("RD")

SCALE = Int(10 ** 9)


@Subroutine(TealType.none)
def update_global():
    # reward_rate stored in global key "RR" as reward ASA units per second (uint64)
    reward_rate = App.globalGet(Bytes("RR"))
    last = App.globalGet(GLOBAL_LAST_UPDATE)
    now = Global.latest_timestamp()
    elapsed = ScratchVar(TealType.uint64)
    inc = ScratchVar(TealType.uint64)

    return Seq(
        elapsed.store(If(now > last, now - last, Int(0))),
        If(elapsed.load() == Int(0)).Then(Return()),
        If(App.globalGet(GLOBAL_TOTAL_STAKED) == Int(0)).Then(Seq([
            App.globalPut(GLOBAL_LAST_UPDATE, now),
            Return(),
        ])),
        # inc = reward_rate * elapsed * SCALE / total_staked
        inc.store(WideRatio([reward_rate, elapsed.load(), SCALE], [App.globalGet(GLOBAL_TOTAL_STAKED)])),
        App.globalPut(GLOBAL_REWARD_PER_SHARE, App.globalGet(GLOBAL_REWARD_PER_SHARE) + inc.load()),
        App.globalPut(GLOBAL_LAST_UPDATE, now),
    )


@Subroutine(TealType.uint64)
def pending_reward(account: Expr) -> Expr:
    rps = App.globalGet(GLOBAL_REWARD_PER_SHARE)
    staked = App.localGet(account, LOCAL_STAKED)
    debt = App.localGet(account, LOCAL_REWARD_DEBT)
    return WideRatio([staked, (rps - debt)], [SCALE])


def approval_program():
    on_creation = Seq([
        App.globalPut(GLOBAL_TOTAL_STAKED, Int(0)),
        App.globalPut(GLOBAL_REWARD_PER_SHARE, Int(0)),
        App.globalPut(GLOBAL_LAST_UPDATE, Global.latest_timestamp()),
        # If a reward ASA id is provided as the first application argument, store it; otherwise default to 0
        If(Txn.application_args.length() > Int(0)).Then(
            App.globalPut(GLOBAL_REWARD_ASSET, Btoi(Txn.application_args[0]))
        ).Else(
            App.globalPut(GLOBAL_REWARD_ASSET, Int(0))
        ),
        App.globalPut(GLOBAL_NFT_SEQ, Int(0)),
        App.globalPut(Bytes("RR"), Int(0)),
        Return(Int(1)),
    ])

    # admin-only predicate
    is_admin = Txn.sender() == Global.creator_address()

    # Opt-in for local state
    on_opt_in = Seq([
        App.localPut(Txn.sender(), LOCAL_STAKED, Int(0)),
        App.localPut(Txn.sender(), LOCAL_REWARD_DEBT, Int(0)),
        Return(Int(1)),
    ])

    # Stake: grouped txns expected: Payment to app address (tx 0) + App call (tx 1)
    # scratch vars used by stake flow (declare here so they exist in scope)
    created_id = ScratchVar(TealType.uint64)
    period_secs = ScratchVar(TealType.uint64)
    apr_num = ScratchVar(TealType.uint64)
    reward_est = ScratchVar(TealType.uint64)
    new_seq = ScratchVar(TealType.uint64)

    on_stake = Seq([
        Assert(Global.group_size() == Int(2)),
        update_global(),
        # check payment is present
        Assert(Gtxn[0].type_enum() == TxnType.Payment),
        Assert(Gtxn[0].receiver() == Global.current_application_address()),
        Assert(Gtxn[0].amount() > Int(0)),
        # update local and global staked amounts
        App.localPut(Txn.sender(), LOCAL_STAKED, App.localGet(Txn.sender(), LOCAL_STAKED) + Gtxn[0].amount()),
        App.globalPut(GLOBAL_TOTAL_STAKED, App.globalGet(GLOBAL_TOTAL_STAKED) + Gtxn[0].amount()),
        # set reward debt to current rps
        App.localPut(Txn.sender(), LOCAL_REWARD_DEBT, App.globalGet(GLOBAL_REWARD_PER_SHARE)),
        # create NFT via inner transaction
        # Use a sequential numbering for human-friendly asset names like "naanfi #1"
        # compute next NFT sequence number and store in scratch
        new_seq.store(App.globalGet(GLOBAL_NFT_SEQ) + Int(1)),
        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields({
            TxnField.type_enum: TxnType.AssetConfig,
            TxnField.config_asset_total: Int(1),
            TxnField.config_asset_decimals: Int(0),
            TxnField.config_asset_unit_name: Bytes("NAANFI"),
            # asset name will be like "naanfi #<seq>" (seq stored as big-endian bytes)
            TxnField.config_asset_name: Concat(Bytes("naanfi #"), Itob(new_seq.load())),
            TxnField.config_asset_url: Bytes(""),
            TxnField.config_asset_manager: Global.current_application_address(),
            TxnField.config_asset_reserve: Global.current_application_address(),
            TxnField.config_asset_freeze: Global.current_application_address(),
            TxnField.config_asset_clawback: Global.current_application_address(),
        }),
        InnerTxnBuilder.Submit(),
        created_id.store(InnerTxn.created_asset_id()),
        # Do NOT attempt to transfer immediately — store intended recipient mapping so user can opt-in and claim
        App.globalPut(Concat(Bytes("NFT_OWNER_"), Itob(created_id.load())), Txn.sender()),
        # compute reward estimate based on simple APR tiers: 30d->5%,60d->7%,90d->10%
        period_secs.store(Btoi(Txn.application_args[1])),
        apr_num.store(Cond(
            [period_secs.load() == Int(30 * 24 * 60 * 60), Int(5)],
            [period_secs.load() == Int(60 * 24 * 60 * 60), Int(7)],
            [Int(1), Int(10)]  # default case: any other period gets 10%
        )),
        reward_est.store(WideRatio([Gtxn[0].amount(), apr_num.load(), period_secs.load()], [Int(100), Int(365 * 24 * 60 * 60)])),
        App.globalPut(Concat(Bytes("NFT_S_"), Itob(created_id.load())), Gtxn[0].amount()),
        App.globalPut(Concat(Bytes("NFT_P_"), Itob(created_id.load())), period_secs.load()),
        App.globalPut(Concat(Bytes("NFT_ST_"), Itob(created_id.load())), Global.latest_timestamp()),
        App.globalPut(Concat(Bytes("NFT_R_"), Itob(created_id.load())), reward_est.load()),
        # increment NFT sequence counter
        App.globalPut(GLOBAL_NFT_SEQ, new_seq.load()),
        Return(Int(1)),
    ])

    # Withdraw: user withdraws ALGO (arg1) and claims pending rewards
    amt = Btoi(Txn.application_args[1])
    on_withdraw = Seq([
        Assert(Global.group_size() == Int(1)),
        update_global(),
        Assert(amt > Int(0)),
        Assert(App.localGet(Txn.sender(), LOCAL_STAKED) >= amt),
        App.localPut(Txn.sender(), LOCAL_STAKED, App.localGet(Txn.sender(), LOCAL_STAKED) - amt),
        App.globalPut(GLOBAL_TOTAL_STAKED, App.globalGet(GLOBAL_TOTAL_STAKED) - amt),
        # pay ALGO back via inner txn
        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields({
            TxnField.type_enum: TxnType.Payment,
            TxnField.receiver: Txn.sender(),
            TxnField.amount: amt,
        }),
        InnerTxnBuilder.Submit(),
        # pay pending reward ASA
        If(pending_reward(Txn.sender()) > Int(0)).Then(Seq([
            InnerTxnBuilder.Begin(),
            InnerTxnBuilder.SetFields({
                TxnField.type_enum: TxnType.AssetTransfer,
                TxnField.xfer_asset: App.globalGet(GLOBAL_REWARD_ASSET),
                TxnField.asset_receiver: Txn.sender(),
                TxnField.asset_amount: pending_reward(Txn.sender()),
            }),
            InnerTxnBuilder.Submit(),
        ])),
        App.localPut(Txn.sender(), LOCAL_REWARD_DEBT, App.globalGet(GLOBAL_REWARD_PER_SHARE)),
        Return(Int(1)),
    ])

    # Claim only rewards
    on_claim = Seq([
        update_global(),
        If(pending_reward(Txn.sender()) > Int(0)).Then(Seq([
            InnerTxnBuilder.Begin(),
            InnerTxnBuilder.SetFields({
                TxnField.type_enum: TxnType.AssetTransfer,
                TxnField.xfer_asset: App.globalGet(GLOBAL_REWARD_ASSET),
                TxnField.asset_receiver: Txn.sender(),
                TxnField.asset_amount: pending_reward(Txn.sender()),
            }),
            InnerTxnBuilder.Submit(),
        ])),
        App.localPut(Txn.sender(), LOCAL_REWARD_DEBT, App.globalGet(GLOBAL_REWARD_PER_SHARE)),
        Return(Int(1)),
    ])

    # Admin: set reward asset id and reward rate
    on_set_params = Seq([
        Assert(is_admin),
        App.globalPut(GLOBAL_REWARD_ASSET, Btoi(Txn.application_args[1])),
        App.globalPut(Bytes("RR"), Btoi(Txn.application_args[2])),
        Return(Int(1)),
    ])

    # Asset opt-in for app account
    on_opt_in_asset = Seq([
        Assert(Txn.assets.length() > Int(0)),  # Must include ASA in foreign_assets
        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields({
            TxnField.type_enum: TxnType.AssetTransfer,
            TxnField.xfer_asset: Txn.assets[0],
            TxnField.asset_receiver: Global.current_application_address(),
            TxnField.asset_amount: Int(0)  # Opt-in transfer
        }),
        InnerTxnBuilder.Submit(),
        Return(Int(1))
    ])
    
    # Declare scratch vars for redeem flow
    redeem_staked = ScratchVar(TealType.uint64)
    redeem_period = ScratchVar(TealType.uint64)
    redeem_start = ScratchVar(TealType.uint64)
    redeem_reward = ScratchVar(TealType.uint64)

    # Scratch/holders for claim/delivery flows
    # we reference Txn.assets[0] directly to avoid scratch-slot ordering issues

    handle_noop = Cond(
        [Txn.application_args[0] == Bytes("stake"), on_stake],
        # redeem: caller provides the NFT as Txn.assets[0] and calls redeem to claim stake+reward
        [Txn.application_args[0] == Bytes("redeem"), Seq([
            Assert(Txn.assets.length() == Int(1)),
            # asset index is provided in Txn.assets[0]
            # bind the AssetHolding result to use its slots safely
            (lambda: (
                Seq([
                    # create a local binding
                    (__asset_h := AssetHolding.balance(Txn.sender(), Txn.assets[0])),
                    Assert(__asset_h.hasValue()),
                    Assert(__asset_h.value() >= Int(1)),
                ])
            ))(),
            # fetch stored mapping
            redeem_staked.store(App.globalGet(Concat(Bytes("NFT_S_"), Itob(Txn.assets[0])))),
            redeem_period.store(App.globalGet(Concat(Bytes("NFT_P_"), Itob(Txn.assets[0])))),
            redeem_start.store(App.globalGet(Concat(Bytes("NFT_ST_"), Itob(Txn.assets[0])))),
            redeem_reward.store(App.globalGet(Concat(Bytes("NFT_R_"), Itob(Txn.assets[0])))),
            # ensure stake exists and has matured
            Assert(redeem_staked.load() > Int(0)),
            Assert(Global.latest_timestamp() >= (redeem_start.load() + redeem_period.load())),
            # pay staked amount + reward back to caller (uses app balance)
            InnerTxnBuilder.Begin(),
            InnerTxnBuilder.SetFields({
                TxnField.type_enum: TxnType.Payment,
                TxnField.receiver: Txn.sender(),
                TxnField.amount: redeem_staked.load() + redeem_reward.load(),
            }),
            InnerTxnBuilder.Submit(),
            # clawback the NFT from caller back to app (app is the clawback address)
            InnerTxnBuilder.Begin(),
            InnerTxnBuilder.SetFields({
                TxnField.type_enum: TxnType.AssetTransfer,
                TxnField.xfer_asset: Txn.assets[0],
                TxnField.asset_sender: Txn.sender(),
                TxnField.asset_receiver: Global.current_application_address(),
                TxnField.asset_amount: Int(1),
            }),
            InnerTxnBuilder.Submit(),
            # clear stored mapping
            App.globalDel(Concat(Bytes("NFT_S_"), Itob(Txn.assets[0]))),
            App.globalDel(Concat(Bytes("NFT_P_"), Itob(Txn.assets[0]))),
            App.globalDel(Concat(Bytes("NFT_ST_"), Itob(Txn.assets[0]))),
            App.globalDel(Concat(Bytes("NFT_R_"), Itob(Txn.assets[0]))),
            Return(Int(1)),
        ])],
        # User can claim a previously-created NFT after opting in to its ASA
        [Txn.application_args[0] == Bytes("claim_nft"), Seq([
            Assert(Txn.assets.length() == Int(1)),
            # asset index is provided in Txn.assets[0]
            # ensure caller has opted-in to the asset (bind to local)
            (lambda: (
                Seq([
                    (__claim_h := AssetHolding.balance(Txn.sender(), Txn.assets[0])),
                    Assert(__claim_h.hasValue()),
                ])
            ))(),
            Assert(App.globalGet(Concat(Bytes("NFT_OWNER_"), Itob(Txn.assets[0]))) == Txn.sender()),
            # transfer asset from app account to caller
            InnerTxnBuilder.Begin(),
            InnerTxnBuilder.SetFields({
                TxnField.type_enum: TxnType.AssetTransfer,
                TxnField.xfer_asset: Txn.assets[0],
                TxnField.asset_receiver: Txn.sender(),
                TxnField.asset_amount: Int(1),
            }),
            InnerTxnBuilder.Submit(),
            # clear stored mapping
            App.globalDel(Concat(Bytes("NFT_OWNER_"), Itob(Txn.assets[0]))),
            Return(Int(1)),
        ])],
        # Admin recovery: deliver NFT to accounts[1]
        [Txn.application_args[0] == Bytes("admin_deliver"), Seq([
            Assert(is_admin),
            Assert(Txn.assets.length() == Int(1)),
            Assert(Txn.accounts.length() > Int(1)),
            # asset index is provided in Txn.assets[0]
            # ensure receiver has opted-in (bind to local)
                (lambda: (
                    Seq([
                        (__adm_h := AssetHolding.balance(Txn.accounts[1], Txn.assets[0])),
                        Assert(__adm_h.hasValue()),
                    ])
                ))(),
            InnerTxnBuilder.Begin(),
            InnerTxnBuilder.SetFields({
                TxnField.type_enum: TxnType.AssetTransfer,
                TxnField.xfer_asset: Txn.assets[0],
                TxnField.asset_receiver: Txn.accounts[1],
                TxnField.asset_amount: Int(1),
            }),
            InnerTxnBuilder.Submit(),
            App.globalDel(Concat(Bytes("NFT_OWNER_"), Itob(Txn.assets[0]))),
            Return(Int(1)),
        ])],
        [Txn.application_args[0] == Bytes("withdraw"), on_withdraw],
        [Txn.application_args[0] == Bytes("claim"), on_claim],
        [Txn.application_args[0] == Bytes("set_params"), on_set_params],
        [Txn.application_args[0] == Bytes("opt_in_asset"), on_opt_in_asset],
    )

    program = Cond(
        [Txn.application_id() == Int(0), on_creation],
        [Txn.on_completion() == OnComplete.OptIn, on_opt_in],
        [Txn.on_completion() == OnComplete.NoOp, handle_noop],
    )

    return program


def clear_state_program():
    return Return(Int(1))


if __name__ == "__main__":
    # Write TEAL files into the src directory so deploy script can read them
    import os
    here = os.path.dirname(__file__)
    approval_path = os.path.join(here, "approval.teal")
    clear_path = os.path.join(here, "clear.teal")
    with open(approval_path, "w") as f:
        f.write(compileTeal(approval_program(), mode=Mode.Application, version=6))
    with open(clear_path, "w") as f:
        f.write(compileTeal(clear_state_program(), mode=Mode.Application, version=6))

