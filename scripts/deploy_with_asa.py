"""Deploy the staking app and set the reward ASA via an app-creation argument.

Usage:
  - If you already created an ASA: `python scripts/deploy_with_asa.py <asset_id>`
  - Or create one first with `scripts/create_asa_no_renounce.py` and pass its id here.

The script compiles `src/staking_app.py` to TEAL, creates the app and saves `app_state.json`.
"""
import os
import sys
from dotenv import load_dotenv
from algosdk import account, mnemonic
from algosdk.v2client import algod
from algosdk import transaction
from algosdk.transaction import ApplicationCreateTxn, OnComplete, StateSchema
from algosdk.transaction import PaymentTxn
from pyteal import compileTeal, Mode

load_dotenv()
ALGOD_ADDRESS = os.getenv("ALGOD_ADDRESS", "https://testnet-api.algonode.cloud")
ALGOD_TOKEN = os.getenv("ALGOD_TOKEN", "")
SENDER_MNEMONIC = os.getenv("SENDER_MNEMONIC")

if not SENDER_MNEMONIC:
    raise SystemExit("Please set SENDER_MNEMONIC in .env")

sender_private_key = mnemonic.to_private_key(SENDER_MNEMONIC)
sender_address = account.address_from_private_key(sender_private_key)
algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)

if len(sys.argv) != 2:
    print("Usage: python scripts/deploy_with_asa.py <reward_asset_id>")
    sys.exit(1)

reward_asset_id = int(sys.argv[1])

# Compile PyTEAL to TEAL files first
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from src.staking_app import approval_program, clear_state_program

src_dir = os.path.join(os.path.dirname(__file__), '..', 'src')
with open(os.path.join(src_dir, 'approval.teal'), 'w') as f:
    compiled = compileTeal(approval_program(), mode=Mode.Application, version=6)
    f.write(compiled)
with open(os.path.join(src_dir, 'clear.teal'), 'w') as f:
    compiled = compileTeal(clear_state_program(), mode=Mode.Application, version=6)
    f.write(compiled)

# Read compiled TEAL and deploy
import base64
with open(os.path.join(src_dir, 'approval.teal'), 'r') as f:
    approval_source = f.read()
with open(os.path.join(src_dir, 'clear.teal'), 'r') as f:
    clear_source = f.read()

try:
    approval_result = algod_client.compile(approval_source)
    clear_result = algod_client.compile(clear_source)
except Exception as e:
    print('Error compiling TEAL via algod client:', e)
    raise

approval_program_bytes = base64.b64decode(approval_result['result'])
clear_program_bytes = base64.b64decode(clear_result['result'])

# NOTE: The app stores per-NFT metadata in global state (4 uint keys + 1 bytes key per NFT),
# so we need ample global schema capacity. Algorand limits are 64 uints and 64 byte slices.
# Use the maximums here for testing/demos. For production, consider AVM boxes to scale.
# Global schema total (uints + byte_slices) must be <= 64.
# Allocate more uints for per-NFT values and some bytes for owner mapping.
global_schema = StateSchema(num_uints=48, num_byte_slices=16)
local_schema = StateSchema(num_uints=4, num_byte_slices=4)

params = algod_client.suggested_params()

# pass the reward asset id as the first app arg (8 byte big-endian)
app_args = [reward_asset_id.to_bytes(8, 'big')]
create_txn = ApplicationCreateTxn(
    sender=sender_address,
    sp=params,
    on_complete=OnComplete.NoOpOC.real,
    approval_program=approval_program_bytes,
    clear_program=clear_program_bytes,
    global_schema=global_schema,
    local_schema=local_schema,
    app_args=app_args,
)

signed = create_txn.sign(sender_private_key)
txid = algod_client.send_transaction(signed)
print('create app txid:', txid)
res = transaction.wait_for_confirmation(algod_client, txid, 4)
app_id = res['application-index']
print('Deployed app id:', app_id)

# Save to app_state.json for frontend and scripts
import json
with open('app_state.json', 'w') as f:
    json.dump({'app_id': app_id, 'asset_id': reward_asset_id}, f)
print('Saved app_state.json')
print(f'Deployment complete: app {app_id} wired to reward ASA {reward_asset_id}')
