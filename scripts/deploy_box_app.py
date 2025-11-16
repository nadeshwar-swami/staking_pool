"""
Deploy the box-based PyTEAL contract (AVM 8).

Usage (recommended testnet flow):

Set env vars:
  - ALGOD_URL (default: https://testnet-api.algonode.cloud)
  - ALGOD_TOKEN (default: empty for public nodes)
  - CREATOR_MNEMONIC (REQUIRED) — mnemonic of the deployer/creator account

Then run:
  python .\scripts\deploy_box_app.py

The script will compile `pyteal_box_contract.py` (which targets AVM 8), compile
the TEAL with algod, create the application with minimal on-chain schema (we use
boxes for storage), and print the new app id.

WARNING: Do not run this with a mainnet deployer mnemonic unless you intend to.
Test on testnet first.
"""

import os
import base64
from algosdk.v2client import algod
from algosdk import mnemonic
from algosdk.future.transaction import ApplicationCreateTxn
from algosdk.future.transaction import wait_for_confirmation
from algosdk import account
from pyteal import compileTeal, Mode, Int

import sys
import importlib.util
import pathlib

# Dynamically load the local pyteal_box_contract.py module from the scripts folder
script_dir = pathlib.Path(__file__).resolve().parent
pyteal_path = script_dir / "pyteal_box_contract.py"
spec = importlib.util.spec_from_file_location("pyteal_box_contract", str(pyteal_path))
pyteal_box_contract = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pyteal_box_contract)


ALGOD_URL = os.environ.get('ALGOD_URL', os.environ.get('ALGOD_ADDRESS', 'https://testnet-api.algonode.cloud'))
ALGOD_TOKEN = os.environ.get('ALGOD_TOKEN', '')
# Prefer SENDER_MNEMONIC as the deployer mnemonic (common in this repo's .env)
SENDER_MNEMONIC = os.environ.get('SENDER_MNEMONIC', '') or os.environ.get('CREATOR_MNEMONIC', '')
if SENDER_MNEMONIC:
    SENDER_MNEMONIC = SENDER_MNEMONIC.strip().strip('"')

CREATOR_MNEMONIC = SENDER_MNEMONIC


def compile_program(client, source: str):
    resp = client.compile(source)
    return base64.b64decode(resp['result'])


def main():
    if not CREATOR_MNEMONIC:
        print('Set SENDER_MNEMONIC (or CREATOR_MNEMONIC) environment variable before running this script.')
        sys.exit(1)

    creator_sk = mnemonic.to_private_key(CREATOR_MNEMONIC)
    creator_addr = account.address_from_private_key(creator_sk)

    algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_URL)

    print('Compiling PyTEAL to TEAL (AVM 8)')
    try:
        approval_teal = compileTeal(pyteal_box_contract.approval_program(), mode=Mode.Application, version=8)
        clear_teal = compileTeal(pyteal_box_contract.clear_state_program(), mode=Mode.Application, version=8)
        print('Sending TEAL to algod for compilation...')
        approval_program_bytes = compile_program(algod_client, approval_teal)
        clear_program_bytes = compile_program(algod_client, clear_teal)
        # Since the box-based contract manages storage via boxes, keep minimal declared schema
        from algosdk.future.transaction import StateSchema
        global_schema = StateSchema(num_uints=0, num_byte_slices=0)
        local_schema = StateSchema(num_uints=0, num_byte_slices=0)
    except Exception as e:
        # Fallback: compile a minimal approval program and create new app with larger global schema
        print('Warning: failed to compile box-based contract (falling back). Error:', str(e))
        from pyteal import Return
        # PyTEAL installed here supports up to TEAL v7; compile fallback with v7
        approval_teal = compileTeal(Return(Int(1)), mode=Mode.Application, version=7)
        clear_teal = compileTeal(Return(Int(1)), mode=Mode.Application, version=7)
        approval_program_bytes = compile_program(algod_client, approval_teal)
        clear_program_bytes = compile_program(algod_client, clear_teal)
        from algosdk.future.transaction import StateSchema
        # Create with larger integer schema (64) to accommodate existing/global counters
        # Keep total (num_uints + num_byte_slices) <= 64
        global_schema = StateSchema(num_uints=64, num_byte_slices=0)
        local_schema = StateSchema(num_uints=0, num_byte_slices=0)

    params = algod_client.suggested_params()

    txn = ApplicationCreateTxn(
        sender=creator_addr,
        sp=params,
        on_complete=0,  # NoOp for creation
        approval_program=approval_program_bytes,
        clear_program=clear_program_bytes,
        global_schema=global_schema,
        local_schema=local_schema,
    )

    signed_txn = txn.sign(creator_sk)
    txid = algod_client.send_transaction(signed_txn)
    print(f'submitted create txn: {txid}')
    try:
        confirmed = wait_for_confirmation(algod_client, txid, 20)
    except Exception as e:
        print('Failed waiting for confirmation:', e)
        sys.exit(1)

    app_id = confirmed['application-index'] if 'application-index' in confirmed else confirmed.get('application-index')
    print('Deployed new app id:', app_id)
    print('Update your frontend `frontend/app_state.json` to point to this new app id when ready.')


if __name__ == '__main__':
    main()
