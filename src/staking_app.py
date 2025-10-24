from pyteal import *

# Constants / keys
GLOBAL_TOTAL_STAKED = Bytes("TS")  # uint64 total microalgos staked
GLOBAL_REWARD_PER_SHARE = Bytes("RPS")  # uint64 scaled by SCALE
GLOBAL_LAST_UPDATE = Bytes("LU")  # uint64 last timestamp
GLOBAL_REWARD_ASSET = Bytes("RA")  # uint64 ASA id used for rewards

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
        App.globalPut(GLOBAL_REWARD_ASSET, Int(0)),
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
    
    handle_noop = Cond(
        [Txn.application_args[0] == Bytes("stake"), on_stake],
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

