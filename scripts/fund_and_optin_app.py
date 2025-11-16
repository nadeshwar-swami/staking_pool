"""Fund the deployed application account with Algos and opt it into the reward ASA.

Reads `app_state.json` (created by `deploy_with_asa.py`) to get `app_id` and `asset_id`.
Requires `SENDER_MNEMONIC`, `ALGOD_ADDRESS`, and optional `ALGOD_TOKEN` in `.env` or environment.

Usage:
  python scripts/fund_and_optin_app.py
"""
import os
import json
import sys
from dotenv import load_dotenv
from algosdk import account, mnemonic, logic
from algosdk.v2client import algod
from algosdk.future.transaction import PaymentTxn, ApplicationNoOpTxn, AssetTransferTxn, wait_for_confirmation

load_dotenv()
ALGOD_ADDRESS = os.getenv("ALGOD_ADDRESS", "https://testnet-api.algonode.cloud")
ALGOD_TOKEN = os.getenv("ALGOD_TOKEN", "")
SENDER_MNEMONIC = os.getenv("SENDER_MNEMONIC")

if not SENDER_MNEMONIC:
    print('Please set SENDER_MNEMONIC in environment or .env')
    sys.exit(1)

sender_sk = mnemonic.to_private_key(SENDER_MNEMONIC)
sender_addr = account.address_from_private_key(sender_sk)
algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)

# read app_state.json
here = os.path.dirname(__file__)
state_path = os.path.join(here, '..', 'app_state.json')
if not os.path.exists(state_path):
    print('app_state.json not found. Run deploy_with_asa.py first or create the file manually.')
    sys.exit(1)

with open(state_path, 'r') as f:
    s = json.load(f)
app_id = int(s.get('app_id'))
asset_id = int(s.get('asset_id'))

print(f'Funding app {app_id} and opting into ASA {asset_id}')

# fund app with ALGO to cover inner txn fees and min balance
app_addr = logic.get_application_address(app_id)
FUND_ALGO = 200_000  # 0.2 ALGO
try:
    params = algod_client.suggested_params()
    fund_algo_txn = PaymentTxn(sender=sender_addr, sp=params, receiver=app_addr, amt=FUND_ALGO)
    signed = fund_algo_txn.sign(sender_sk)
    txid = algod_client.send_transaction(signed)
    print('submitted funding (ALGO) txid:', txid)
    wait_for_confirmation(algod_client, txid, 4)
    print('App funded with ALGO')
except Exception as e:
    print('Failed to fund app with ALGO:', e)
    sys.exit(1)

# call app opt_in_asset
try:
    params = algod_client.suggested_params()
    opt_txn = ApplicationNoOpTxn(sender=sender_addr, sp=params, index=app_id, app_args=[b"opt_in_asset"], foreign_assets=[asset_id])
    signed = opt_txn.sign(sender_sk)
    txid = algod_client.send_transaction(signed)
    print('submitted opt_in_asset txid:', txid)
    wait_for_confirmation(algod_client, txid, 4)
    print('App opted into ASA')
except Exception as e:
    err = str(e)
    print('Failed to opt app into ASA:', err)
    # If the error indicates the app balance is just below min due to fee rounding, top-up a small amount and retry once
    if 'below min' in err or 'balance' in err:
        try:
            TOPUP = 5000
            print(f'Attempting small top-up of {TOPUP} microAlgos to app and retrying opt-in')
            top_tx = PaymentTxn(sender=sender_addr, sp=algod_client.suggested_params(), receiver=app_addr, amt=TOPUP)
            signed_top = top_tx.sign(sender_sk)
            topid = algod_client.send_transaction(signed_top)
            wait_for_confirmation(algod_client, topid, 4)
            print('Top-up sent, retrying opt-in')
            params = algod_client.suggested_params()
            opt_txn = ApplicationNoOpTxn(sender=sender_addr, sp=params, index=app_id, app_args=[b"opt_in_asset"], foreign_assets=[asset_id])
            signed = opt_txn.sign(sender_sk)
            txid = algod_client.send_transaction(signed)
            print('submitted opt_in_asset txid (retry):', txid)
            wait_for_confirmation(algod_client, txid, 4)
            print('App opted into ASA (after top-up)')
        except Exception as e2:
            print('Retry opt-in failed:', e2)
            sys.exit(1)
    else:
        sys.exit(1)

# optionally transfer some ASA units to app so rewards can be paid
try:
    FUND_ASA = 100_000  # units w.r.t asset decimals
    params = algod_client.suggested_params()
    tx = AssetTransferTxn(sender=sender_addr, sp=params, receiver=app_addr, index=asset_id, amt=FUND_ASA)
    signed = tx.sign(sender_sk)
    txid = algod_client.send_transaction(signed)
    print('submitted ASA funding txid:', txid)
    wait_for_confirmation(algod_client, txid, 4)
    print(f'Funded app with {FUND_ASA} units of ASA {asset_id}')
except Exception as e:
    print('Failed to fund app with ASA units:', e)
    # not fatal

print('Done')
