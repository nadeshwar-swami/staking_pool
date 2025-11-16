"""Deploy the staking app and set the reward ASA via an app-creation argument.

Usage:
  - If you already created an ASA: `python scripts/deploy_with_asa.py <asset_id>`
  - Or create one first with `scripts/create_asa_no_renounce.py` and pass its id here.

The script compiles `src/staking_app.py` to TEAL, creates the app and saves `app_state.json`.
"""
import os
import sys
from dotenv import load_dotenv
from algosdk import account, mnemonic, logic
from algosdk.v2client import algod
from algosdk import transaction
from algosdk.future.transaction import ApplicationCreateTxn, StateSchema, AssetConfigTxn, AssetTransferTxn, ApplicationNoOpTxn, PaymentTxn, wait_for_confirmation
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

# If an existing reward asset id is provided as first arg, use it. Otherwise create NaanFi ASA.
if len(sys.argv) == 2:
    try:
        reward_asset_id = int(sys.argv[1])
        print(f'Using provided reward asset id: {reward_asset_id}')
    except Exception:
        print('Argument provided is not an integer asset id; exiting')
        sys.exit(1)
else:
    print('No reward asset id provided — creating `NaanFi` ASA')
    # Create ASA parameters
    NAAN_TOTAL = 1_000_000 * (10 ** 6)  # 1,000,000 Naan with 6 decimals
    NAAN_DECIMALS = 6
    params = algod_client.suggested_params()
    from algosdk.future.transaction import AssetConfigTxn, AssetTransferTxn

    asset_txn = AssetConfigTxn(
        sender=sender_address,
        sp=params,
        total=NAAN_TOTAL,
        default_frozen=False,
        unit_name="Naan",
        asset_name="NaanFi",
        manager=sender_address,
        reserve=sender_address,
        freeze=sender_address,
        clawback=sender_address,
        decimals=NAAN_DECIMALS,
    )
    signed_asset_txn = asset_txn.sign(sender_private_key)
    atxid = algod_client.send_transaction(signed_asset_txn)
    print('submitted create asset txid:', atxid)
    ares = wait_for_confirmation(algod_client, atxid, 4)
    reward_asset_id = ares['asset-index']
    print('Created NaanFi ASA id:', reward_asset_id)

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

# NOTE: The app stores per-NFT metadata in global state (4 uint keys + 1 bytes key per NFT).
# We must ensure the declared global schema can hold the fixed global keys plus 4 uints
# and 1 bytes entry per NFT. Algorand requires `num_uints + num_byte_slices <= 64`.
#
# To support one more NFT without changing TEAL, adjust the allocation. The contract
# uses ~6 reserved uint globals (TS,RPS,LU,RA,NS,RR) plus 4 uints per NFT. Choosing
# `num_uints=53` and `num_byte_slices=11` yields capacity for up to 11 NFTs:
#   reserved_uints + 4*11 = 6 + 44 = 50 <= 53 (ok), and byte slices 11 allows 11 owner entries.
#
# For production scaling, migrate per-NFT storage to Boxes (TEAL v8+) or use an external
# indexer/service. For now, increase the schema to avoid the "store integer count" error.
global_schema = StateSchema(num_uints=53, num_byte_slices=11)
local_schema = StateSchema(num_uints=4, num_byte_slices=4)

params = algod_client.suggested_params()

# pass the reward asset id as the first app arg (8 byte big-endian)
app_args = [reward_asset_id.to_bytes(8, 'big')]
create_txn = ApplicationCreateTxn(
    sender=sender_address,
    sp=params,
    on_complete=0,
    approval_program=approval_program_bytes,
    clear_program=clear_program_bytes,
    global_schema=global_schema,
    local_schema=local_schema,
    app_args=app_args,
)

signed = create_txn.sign(sender_private_key)
txid = algod_client.send_transaction(signed)
print('create app txid:', txid)
res = wait_for_confirmation(algod_client, txid, 4)
app_id = res['application-index']
 
print('Deployed app id:', app_id)

# Save to app_state.json for frontend and scripts
import json
with open('app_state.json', 'w') as f:
    json.dump({'app_id': app_id, 'asset_id': reward_asset_id}, f)
print('Saved app_state.json')
print(f'Deployment complete: app {app_id} wired to reward ASA {reward_asset_id}')
# Fund the application account with Algos so it can submit inner transactions (opt-in requires fee/min-balance)
try:
    app_addr = logic.get_application_address(app_id)
    FUND_ALGO = 200_000  # 0.2 ALGO to cover opt-in fee and min balance
    print(f'Funding app account {app_addr} with {FUND_ALGO} microAlgos')
    from algosdk.future.transaction import PaymentTxn, AssetTransferTxn
    fund_algo_txn = PaymentTxn(sender=sender_address, sp=algod_client.suggested_params(), receiver=app_addr, amt=FUND_ALGO)
    signed_fund_algo = fund_algo_txn.sign(sender_private_key)
    fund_txid = algod_client.send_transaction(signed_fund_algo)
    print('submitted funding (ALGO) txid:', fund_txid)
    wait_for_confirmation(algod_client, fund_txid, 4)
    print('App account funded with ALGO')
except Exception as e:
    print('Failed to fund app account with ALGO:', e)

# Opt the app into the reward ASA by calling the app's `opt_in_asset` method and
# including the ASA in the foreign assets list. The app's handler will perform an
# inner transaction to opt the application account into the asset.
try:
    params = algod_client.suggested_params()
    opt_txn = ApplicationNoOpTxn(
        sender=sender_address,
        sp=params,
        index=app_id,
        app_args=[b"opt_in_asset"],
        foreign_assets=[reward_asset_id],
    )
    signed_opt = opt_txn.sign(sender_private_key)
    otxid = algod_client.send_transaction(signed_opt)
    print('submitted app opt-in asset call txid:', otxid)
    ores = wait_for_confirmation(algod_client, otxid, 4)
    print('App opted into asset:', reward_asset_id)
except Exception as e:
    print('Failed to opt app into asset automatically:', e)

# Optionally fund app with initial NaanFi supply so rewards can be paid
try:
    FUND_AMOUNT = 100_000 * (10 ** NAAN_DECIMALS) if 'NAAN_DECIMALS' in locals() else 0
    if FUND_AMOUNT > 0:
        app_addr = logic.get_application_address(app_id)
        fund_txn = AssetTransferTxn(
            sender=sender_address,
            sp=algod_client.suggested_params(),
            receiver=app_addr,
            index=reward_asset_id,
            amt=FUND_AMOUNT,
        )
        signed_fund = fund_txn.sign(sender_private_key)
        ftxid = algod_client.send_transaction(signed_fund)
        print('submitted funding txid:', ftxid)
        fres = wait_for_confirmation(algod_client, ftxid, 4)
        print(f'Funded app {app_id} with {FUND_AMOUNT} units of ASA {reward_asset_id}')
except Exception as e:
    print('Failed to fund app with initial NaanFi supply:', e)
