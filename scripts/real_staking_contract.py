"""
AVM8 (TEAL v8) PyTEAL contract draft for NFT-per-stake staking.

Behavior (draft):
- `stake` (grouped txns: Payment + AppCall): app creates a 1-unit NFT via inner txn
  and stores position metadata in a box keyed by the created asset id.
- `claim_nft`: after user opts-in to asset id, app transfers the NFT to the user.
- `redeem`: caller who owns the NFT can redeem after lock period: app pays ALGO
  plus reward Naan tokens (asset id from config) and destroys the NFT via inner txn.

Lock options (defaults):
- 0: 2 minutes -> fixed reward 0.1 Naan per ALGO
- 1: 30 days -> 8% APR
- 2: 60 days -> 10% APR
- 3: 90 days -> 12% APR

NOTES:
- This is a draft PyTEAL implementation and requires PyTEAL that supports boxes and
  inner transaction features (PyTEAL >= 0.21 / AVM8 support). If your environment
  has an older PyTEAL, upgrade or compile from a machine that has the required version.
- The contract uses `Global.creator_address()` as admin. Reward asset id is set
  via global state at creation time (the deploy script sets it).
- Please review and audit before deploying on mainnet.
"""

from pyteal import *


def approval_program(reward_asset_id_uint: int):
    """Return PyTEAL AST for approval program.

    `reward_asset_id_uint` is the asset id for Naan (used for reward payouts).
    """

    # Constants / configuration
    YEAR_SECONDS = Int(31536000)
    # Lock configs: (seconds, apr_bps, fixed_per_algo_micronaan)
    # fixed_per_algo_micronaan used only for lock option 0 (2 minutes). 0.1 Naan per ALGO
    # We'll represent fixed reward as micro-Naan per micro-ALGO: 0.1 Naan per ALGO => 0.1 * (naan_decimals) / 1 ALGOs
    LOCK_SECS = [Int(120), Int(30 * 24 * 3600), Int(60 * 24 * 3600), Int(90 * 24 * 3600)]
    LOCK_APR_BPS = [Int(0), Int(800), Int(1000), Int(1200)]
    FIXED_PER_ALGO_NUM = Int(1)
    FIXED_PER_ALGO_DEN = Int(10)

    admin_check = Txn.sender() == Global.creator_address()

    @Subroutine(TealType.none)
    def pack_and_store_box(box_key: Expr, start_time: Expr, lock_index: Expr, staked_amt: Expr):
        # pack as start(8) | lock_index(8) | staked_amt(8) => store as bytes concatenation
        return Seq([
            App.box_create(box_key, Int(24)),
            App.box_put(box_key, Concat(Itob(start_time), Itob(lock_index), Itob(staked_amt)))
        ])

    @Subroutine(TealType.uint64)
    def compute_apr_reward(staked_microalgo: Expr, apr_bps: Expr, lock_seconds: Expr):
        # reward = floor(staked * apr_bps/10000 * lock_seconds / YEAR_SECONDS)
        num = WideRatio([staked_microalgo, apr_bps, lock_seconds], Int(10000) * YEAR_SECONDS)
        return num

    # initialize globals: reward_asset and NFT sequence counter
    on_create = Seq([
        App.globalPut(Bytes("reward_asset"), Int(reward_asset_id_uint)),
        App.globalPut(Bytes("NFT_SEQ"), Int(0)),
        Return(Int(1))
    ])

    # stake: expects group size 2 with Gtxn[0] = Payment (from the staker) and Gtxn[1] = ApplicationCall
    lock_idx_sv = ScratchVar(TealType.uint64())
    staked_amt_sv = ScratchVar(TealType.uint64())
    created_id_sv = ScratchVar(TealType.uint64())

    stake = Seq([
        Assert(Global.group_size() == Int(2)),
        Assert(Gtxn[0].type_enum() == TxnType.Payment),
        Assert(Gtxn[0].sender() == Gtxn[1].sender()),
        Assert(Txn.application_args.length() >= Int(1)),
        lock_idx_sv.store(If(Txn.application_args.length() > Int(1), Btoi(Txn.application_args[1]), Int(0))),
        staked_amt_sv.store(Gtxn[0].amount()),

        # Create NFT via inner txn
        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields({
            TxnField.TypeEnum: TxnType.AssetConfig,
            TxnField.ConfigAssetTotal: Int(1),
            TxnField.ConfigAssetDecimals: Int(0),
            TxnField.ConfigAssetDefaultFrozen: Int(0),
            TxnField.ConfigAssetUnitName: Bytes("STK"),
            TxnField.ConfigAssetName: Bytes("NaanStakeNFT"),
            TxnField.ConfigAssetURL: Bytes(""),
            TxnField.ConfigAssetManager: Global.current_application_address(),
            TxnField.ConfigAssetReserve: Global.current_application_address(),
            TxnField.ConfigAssetFreeze: Global.current_application_address(),
            TxnField.ConfigAssetClawback: Global.current_application_address(),
        }),
        InnerTxnBuilder.Submit(),

        created_id_sv.store(InnerTxn.created_asset_id()),
        # increment NFT sequence and use it in the asset name
        seq = App.globalGet(Bytes("NFT_SEQ")) + Int(1),
        App.globalPut(Bytes("NFT_SEQ"), seq),
        # store box keyed by asset id
        box_key = Concat(Bytes("NFT:"), Itob(created_id_sv.load())),
        start_time = Global.latest_timestamp(),
        App.box_create(box_key, Int(24)),
        App.box_put(box_key, Concat(Itob(start_time), Itob(lock_idx_sv.load()), Itob(staked_amt_sv.load()))),

        # Log the created asset id and sequence so frontend can detect it
        Log(Itob(created_id_sv.load())),
        Log(Itob(seq)),
        Return(Int(1))
    ])

    # claim_nft: transfer NFT from app to caller. Expect arg1 = asset id
    claim_asset_sv = ScratchVar(TealType.uint64())
    claim_nft = Seq([
        Assert(Txn.application_args.length() >= Int(2)),
        claim_asset_sv.store(Btoi(Txn.application_args[1])),
        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields({
            TxnField.TypeEnum: TxnType.AssetTransfer,
            TxnField.XferAsset: claim_asset_sv.load(),
            TxnField.AssetReceiver: Txn.sender(),
            TxnField.AssetAmount: Int(1),
        }),
        InnerTxnBuilder.Submit(),
        Return(Int(1))
    ])

    # opt_in_asset: instruct the app to opt-in to an ASA (provide asset in Txn.assets[0])
    opt_in_asset = Seq([
        Assert(Txn.assets.length() == Int(1)),
        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields({
            TxnField.TypeEnum: TxnType.AssetTransfer,
            TxnField.XferAsset: Txn.assets[0],
            TxnField.AssetReceiver: Global.current_application_address(),
            TxnField.AssetAmount: Int(0),
        }),
        InnerTxnBuilder.Submit(),
        Return(Int(1))
    ])

    # redeem: caller must hold 1 unit of the NFT; arg1 = asset id
    redeem_asset_sv = ScratchVar(TealType.uint64())
    packed_sv = ScratchVar(TealType.bytes())
    redeem = Seq([
        Assert(Txn.application_args.length() >= Int(2)),
        redeem_asset_sv.store(Btoi(Txn.application_args[1])),

        # check holder balance
        bal = AssetHolding.balance(Txn.sender(), redeem_asset_sv.load()),
        bal,
        Assert(bal.hasValue()),
        Assert(bal.value() == Int(1)),

        box_key = Concat(Bytes("NFT:"), Itob(redeem_asset_sv.load())),
        packed = App.box_get(box_key),
        Assert(packed.hasValue()),
        packed_sv.store(packed.value()),
        start_time = Btoi(Extract(packed_sv.load(), Int(0), Int(8))),
        lock_index = Btoi(Extract(packed_sv.load(), Int(8), Int(8))),
        staked_amt = Btoi(Extract(packed_sv.load(), Int(16), Int(8))),

        lock_seconds = If(lock_index == Int(0), LOCK_SECS[0], If(lock_index == Int(1), LOCK_SECS[1], If(lock_index == Int(2), LOCK_SECS[2], LOCK_SECS[3]))),
        Assert(Global.latest_timestamp() >= start_time + lock_seconds),

        reward_asset = App.globalGet(Bytes("reward_asset")),
        reward_amount = If(lock_index == Int(0),
            WideRatio([staked_amt, FIXED_PER_ALGO_NUM], FIXED_PER_ALGO_DEN),
            compute_apr_reward(staked_amt, If(lock_index == Int(1), LOCK_APR_BPS[1], If(lock_index == Int(2), LOCK_APR_BPS[2], LOCK_APR_BPS[3])), If(lock_index == Int(1), LOCK_SECS[1], If(lock_index == Int(2), LOCK_SECS[2], LOCK_SECS[3])))
        ),

        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields({
            TxnField.TypeEnum: TxnType.Payment,
            TxnField.PaymentReceiver: Txn.sender(),
            TxnField.PaymentAmount: staked_amt,
        }),
        InnerTxnBuilder.Submit(),

        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields({
            TxnField.TypeEnum: TxnType.AssetTransfer,
            TxnField.XferAsset: reward_asset,
            TxnField.AssetReceiver: Txn.sender(),
            TxnField.AssetAmount: reward_amount,
        }),
        InnerTxnBuilder.Submit(),

        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields({
            TxnField.TypeEnum: TxnType.AssetConfig,
            TxnField.ConfigAsset: redeem_asset_sv.load(),
            TxnField.ConfigAssetManager: Global.zero_address(),
            TxnField.ConfigAssetReserve: Global.zero_address(),
            TxnField.ConfigAssetFreeze: Global.zero_address(),
            TxnField.ConfigAssetClawback: Global.zero_address(),
            TxnField.ConfigAssetTotal: Int(0),
        }),
        InnerTxnBuilder.Submit(),

        App.box_delete(box_key),
        Return(Int(1))
    ])

    program = Cond(
        [Txn.application_id() == Int(0), on_create],
        [Txn.on_completion() == OnComplete.DeleteApplication, Return(admin_check)],
        [Txn.on_completion() == OnComplete.UpdateApplication, Return(admin_check)],
        [Txn.on_completion() == OnComplete.CloseOut, Return(Int(1))],
        [Txn.on_completion() == OnComplete.OptIn, Return(Int(1))],
        [Txn.application_args[0] == Bytes("stake"), stake],
        [Txn.application_args[0] == Bytes("claim_nft"), claim_nft],
        [Txn.application_args[0] == Bytes("opt_in_asset"), opt_in_asset],
        [Txn.application_args[0] == Bytes("redeem"), redeem],
    )

    return program


def clear_state_program():
    return Return(Int(1))


if __name__ == '__main__':
    approval = compileTeal(approval_program(749736840), Mode.Application, version=8)
    clear = compileTeal(clear_state_program(), Mode.Application, version=8)
    print('# Approval TEAL')
    print(approval)
    print('# Clear TEAL')
    print(clear)
