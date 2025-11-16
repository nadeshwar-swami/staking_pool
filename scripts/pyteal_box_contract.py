"""
Draft PyTEAL approval program (box-based storage)

This file contains a PyTEAL sketch for a box-based staking contract.
It is intended as a starting point — adjust logic to match your existing
stake/mint/claim flows. The key points:

- Uses app boxes to store per-NFT state rather than global-state uint slots.
- Supports an owner-only "migrate" syscall that writes a box for a given NFT.
- On stake/redeem flows the app will read/write boxes keyed by the asset id.

Notes:
- Requires AVM 8+ (boxes support). Ensure your PyTEAL and node target AVM 8+.
- This is a draft. Test & audit before deploying to mainnet.
"""

from pyteal import *


def approval_program():
    # Application args:
    # - op: Text operation, e.g. "stake", "redeem", "migrate"
    # - For migrate: ["migrate", AssetIdBytes, PackedValue]

    op = Txn.application_args[0]

    is_creator = Txn.sender() == Global.creator_address()

    # Helper: construct box name for an asset id bytes
    # We use prefix "NFT:" to avoid ambiguous names.
    def box_key_from_asset_bytes(b):
        return Concat(Bytes("NFT:"), b)

    # Migration handler: only creator can write boxes directly
    box_key_svar = ScratchVar(TealType.bytes)
    packed_svar = ScratchVar(TealType.bytes)
    migrate = Seq(
        Assert(is_creator),
        # args: ["migrate", assetIdBytes, packedValue]
        Assert(Txn.application_args.length() == Int(3)),
        box_key_svar.store(box_key_from_asset_bytes(Txn.application_args[1])),
        packed_svar.store(Txn.application_args[2]),
        If(Not(App.box_exists(box_key_svar.load()))).Then(App.box_create(box_key_svar.load(), Len(packed_svar.load()))),
        App.box_put(box_key_svar.load(), packed_svar.load()),
        Return(Int(1)),
    )

    # Stake handler (simplified): expects asset id in args and other checks
    stake_boxkey = ScratchVar(TealType.bytes)
    stake_packed = ScratchVar(TealType.bytes)
    stake = Seq(
        # Example: args ["stake", assetIdBytes, lockPeriod]
        Assert(Txn.application_args.length() >= Int(2)),
        stake_boxkey.store(box_key_from_asset_bytes(Txn.application_args[1])),
        # Build packed value: startTime (8 bytes) | lockPeriod (8 bytes) | stakedAmount (8 bytes)
        # Here we use Itob to convert integers to 8-byte big-endian
        stake_packed.store(Concat(Itob(Global.round()), Itob(If(Txn.application_args.length() >= Int(3), Btoi(Txn.application_args[2]), Int(0))), Itob(Txn.amount()))),
        If(Not(App.box_exists(stake_boxkey.load()))).Then(App.box_create(stake_boxkey.load(), Len(stake_packed.load()))),
        App.box_put(stake_boxkey.load(), stake_packed.load()),
        Return(Int(1)),
    )

    # Redeem handler (simplified): reads box and verifies maturity
    redeem_boxkey = ScratchVar(TealType.bytes)
    redeem = Seq(
        Assert(Txn.application_args.length() >= Int(2)),
        redeem_boxkey.store(box_key_from_asset_bytes(Txn.application_args[1])),
        # packed = App.box_get(redeem_boxkey.load())
        # extraction and checks should be implemented here
        Return(Int(1)),
    )

    program = Cond(
        [op == Bytes("migrate"), migrate],
        [op == Bytes("stake"), stake],
        [op == Bytes("redeem"), redeem],
    )

    return program


def clear_state_program():
    return Return(Int(1))


if __name__ == "__main__":
    from pyteal import compileTeal
    print("# Approval Program (TEAL):\n")
    print(compileTeal(approval_program(), mode=Mode.Application, version=8))
    print("\n# Clear State Program (TEAL):\n")
    print(compileTeal(clear_state_program(), mode=Mode.Application, version=8))
