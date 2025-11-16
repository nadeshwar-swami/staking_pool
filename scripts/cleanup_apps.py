"""Safely delete one or more Algorand applications (smart contracts).

Usage:
  python scripts/cleanup_apps.py <app_id> [<app_id> ...] [--yes]

If no app ids provided, the script will scan for `app_state.json` in the repo root
and `frontend/app_state.json` and print candidates.

Notes:
- Requires `SENDER_MNEMONIC`, `ALGOD_ADDRESS`, and optional `ALGOD_TOKEN` in environment
  or `.env` (it will attempt to load `.env`).
- The deployer (creator) account must be the signer to delete the app.
- This script only deletes the application. It will not destroy ASAs.
"""
import os
import sys
import json
import pathlib
from dotenv import load_dotenv

load_dotenv()
from algosdk import account, mnemonic
from algosdk.v2client import algod
from algosdk.future.transaction import ApplicationDeleteTxn, wait_for_confirmation

ALGOD_ADDRESS = os.getenv('ALGOD_ADDRESS', 'https://testnet-api.algonode.cloud')
ALGOD_TOKEN = os.getenv('ALGOD_TOKEN', '')
SENDER_MNEMONIC = os.getenv('SENDER_MNEMONIC')

if not SENDER_MNEMONIC:
    print('Please set SENDER_MNEMONIC in environment or .env')
    sys.exit(1)

sender_sk = mnemonic.to_private_key(SENDER_MNEMONIC)
sender_addr = account.address_from_private_key(sender_sk)
algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)

# helper to find candidate app_state.json files
here = pathlib.Path(__file__).resolve().parent.parent
candidates = []
for rel in ['app_state.json', 'frontend/app_state.json', 'scripts/app_state.json']:
    p = here / rel
    if p.exists():
        try:
            with open(p, 'r') as f:
                j = json.load(f)
                if isinstance(j, dict) and 'app_id' in j:
                    candidates.append((str(p), int(j['app_id'])))
        except Exception:
            pass

# parse args
args = [a for a in sys.argv[1:] if not a.startswith('-')]
force = '--yes' in sys.argv or '-y' in sys.argv

if not args:
    if candidates:
        print('No app ids provided. Found the following candidates from app_state.json files:')
        for p, aid in candidates:
            print(f'  {aid} (from {p})')
        print('\nTo delete any use:')
        print('  python scripts/cleanup_apps.py <app_id> [<app_id> ...]')
    else:
        print('No app ids provided and no candidates found in app_state.json files.')
    sys.exit(0)

# convert args to ints
try:
    app_ids = [int(a) for a in args]
except ValueError:
    print('App ids must be integers')
    sys.exit(1)

print('About to delete these application ids:', app_ids)
if not force:
    resp = input('Type YES to proceed: ')
    if resp.strip() != 'YES':
        print('Aborted')
        sys.exit(0)

# perform deletion
sp = algod_client.suggested_params()
for app_id in app_ids:
    try:
        txn = ApplicationDeleteTxn(sender=sender_addr, sp=sp, index=app_id)
        signed = txn.sign(sender_sk)
        txid = algod_client.send_transaction(signed)
        print(f'submitted delete tx for app {app_id}: {txid}')
        wait_for_confirmation(algod_client, txid, 10)
        print(f'App {app_id} deleted')
    except Exception as e:
        print(f'Failed to delete app {app_id}:', e)

print('Done')
