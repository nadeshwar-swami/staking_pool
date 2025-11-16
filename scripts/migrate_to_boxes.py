"""
Migration script: copy old app's global-state NFT entries into a new app that uses boxes.

Usage:
  - Set `OLD_APP_ID` and `NEW_APP_ID` below.
  - Provide the creator mnemonic in `CREATOR_MNEMONIC` (this account will call the
    new app's `migrate` entrypoint and must be allowed by the new app — by default
    this script assumes the new app accepts creator-signed migrate calls).
  - Run: `python scripts/migrate_to_boxes.py`

Notes:
  - This script is written for clarity not for high throughput. For many entries
    you may want to batch and throttle the calls.
  - Test on testnet first.
"""

import base64
import struct
import time
from algosdk.v2client import algod
from algosdk import mnemonic
from algosdk.future.transaction import ApplicationNoOpTxn, Transaction, LogicSig, wait_for_confirmation
from algosdk.future.transaction import AccountTransactionSigner
from algosdk import account, encoding

# -------- CONFIG ----------
ALGOD_URL = "https://testnet-api.algonode.cloud"
ALGOD_TOKEN = ""

# Old app (the one using global-state currently)
OLD_APP_ID = 749737169

# New app (deployed from the PyTEAL box-based approval program)
NEW_APP_ID = None  # set to new app id after deployment

# Creator mnemonic (needed to sign migrate calls)
CREATOR_MNEMONIC = "REPLACE THIS WITH CREATOR MNEMONIC"

# --------------------------

def decode_global_state_kv(kv):
    # kv: dict with 'key' (base64) and 'value' ({'type':1, 'bytes':...} or {'uint':...})
    key = base64.b64decode(kv['key']).decode('utf-8', errors='ignore')
    valobj = kv.get('value', {})
    if valobj.get('type') == 1:
        # bytes
        val = base64.b64decode(valobj.get('bytes', ''))
    else:
        val = int(valobj.get('uint', 0))
    return key, val

def pack_values(start_time: int, lock_period: int, staked_amount: int) -> bytes:
    # Pack three unsigned 8-byte big-endian integers: start_time, lock_period, staked_amount
    return struct.pack('>QQQ', start_time, lock_period, staked_amount)

def main():
    if NEW_APP_ID is None:
        print('Set NEW_APP_ID to the target contract id and re-run')
        return

    algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_URL)

    # Read old app state
    app_info = algod_client.application_info(OLD_APP_ID)
    global_state = app_info['params'].get('global-state', [])

    print(f'Old app global-state entries: {len(global_state)}')

    # Simple parsing: find keys matching expected prefixes (e.g. NFT_ST_, NFT_P_, NFT_S_)
    # We will aggregate per-asset values into (start, lock, amount)
    assets = {}
    for kv in global_state:
        raw_key = base64.b64decode(kv['key']).decode('utf-8', errors='ignore')
        if raw_key.startswith('NFT_ST_'):
            asset_id = int(raw_key.split('NFT_ST_')[-1]) if raw_key.split('NFT_ST_')[-1].isdigit() else None
            if asset_id is None:
                # try extracting from bytes
                asset_id = None
            val = kv.get('value', {}).get('uint', 0)
            if asset_id:
                assets.setdefault(asset_id, {})['start'] = int(val)
        elif raw_key.startswith('NFT_P_'):
            asset_id = int(raw_key.split('NFT_P_')[-1]) if raw_key.split('NFT_P_')[-1].isdigit() else None
            val = kv.get('value', {}).get('uint', 0)
            if asset_id:
                assets.setdefault(asset_id, {})['lock'] = int(val)
        elif raw_key.startswith('NFT_S_'):
            asset_id = int(raw_key.split('NFT_S_')[-1]) if raw_key.split('NFT_S_')[-1].isdigit() else None
            val = kv.get('value', {}).get('uint', 0)
            if asset_id:
                assets.setdefault(asset_id, {})['staked'] = int(val)

    print(f'Parsed {len(assets)} NFT entries to migrate (partial matches allowed).')

    # Prepare signer
    if CREATOR_MNEMONIC.startswith('REPLACE'):
        print('Please set CREATOR_MNEMONIC in this script before running')
        return

    creator_sk = mnemonic.to_private_key(CREATOR_MNEMONIC)
    creator_addr = account.address_from_private_key(creator_sk)
    signer = AccountTransactionSigner(creator_sk)

    # Perform migration entries one-by-one (can be batched in future)
    for asset_id, vals in assets.items():
        start = vals.get('start', 0)
        lock = vals.get('lock', 0)
        staked = vals.get('staked', 0)

        packed = pack_values(start, lock, staked)
        # App args: [b'migrate', assetIdBytes, packed]
        asset_bytes = asset_id.to_bytes(8, 'big')
        app_args = [b'migrate', asset_bytes, packed]

        params = algod_client.suggested_params()
        txn = ApplicationNoOpTxn(sender=creator_addr, sp=params, index=NEW_APP_ID, app_args=app_args)
        signed = txn.sign(creator_sk)
        txid = algod_client.send_transaction(signed)
        print(f'Submitted migration tx for asset {asset_id}, txid: {txid}')
        # Wait for confirmation
        try:
            wait_for_confirmation(algod_client, txid, 20)
            print('Confirmed')
        except Exception as e:
            print('Confirmation failed', e)
        time.sleep(0.5)

    print('Migration finished (check logs & boxes on new app).')


if __name__ == '__main__':
    main()
