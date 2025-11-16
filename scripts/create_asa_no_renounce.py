"""Create a Naan ASA on TestNet without renouncing manager keys.

This is intended for TestNet/dev flows so the manager stays controllable.

Usage: configure `.env` and run:
  python scripts/create_asa_no_renounce.py

It prints the created asset id and exits.
"""
import os
from dotenv import load_dotenv
from algosdk import account, mnemonic
from algosdk.v2client import algod
from algosdk.transaction import AssetConfigTxn
from algosdk import transaction

load_dotenv()

ALGOD_ADDRESS = os.getenv("ALGOD_ADDRESS", "https://testnet-api.algonode.cloud")
ALGOD_TOKEN = os.getenv("ALGOD_TOKEN", "")
SENDER_MNEMONIC = os.getenv("SENDER_MNEMONIC")

if not SENDER_MNEMONIC:
    raise SystemExit("Please set SENDER_MNEMONIC in .env")

sender_private_key = mnemonic.to_private_key(SENDER_MNEMONIC)
sender_address = account.address_from_private_key(sender_private_key)

algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)

TOKEN_NAME = "Naan"
TOKEN_UNIT = "NAAN"
DECIMALS = 0
TOTAL_SUPPLY = 1_000_000_000


def create_asa():
    params = algod_client.suggested_params()

    txn = AssetConfigTxn(
        sender=sender_address,
        sp=params,
        total=TOTAL_SUPPLY,
        default_frozen=False,
        unit_name=TOKEN_UNIT,
        asset_name=TOKEN_NAME,
        manager=sender_address,
        reserve=sender_address,
        freeze=sender_address,
        clawback=sender_address,
        decimals=DECIMALS,
        strict_empty_address_check=False
    )

    stx = txn.sign(sender_private_key)
    txid = algod_client.send_transaction(stx)
    print("ASA create tx:", txid)
    res = transaction.wait_for_confirmation(algod_client, txid, 4)
    asset_id = res.get('asset-index') or res.get('created-asset-index')
    print("Created ASA id:", asset_id)
    return asset_id


if __name__ == '__main__':
    print(f"Creating ASA '{TOKEN_NAME}' ({TOKEN_UNIT}), total={TOTAL_SUPPLY}, decimals={DECIMALS}")
    asset_id = create_asa()
    if asset_id:
        print(f"ASA {asset_id} created. Manager keys are retained (NOT renounced).")
    else:
        print("ASA creation failed.")
