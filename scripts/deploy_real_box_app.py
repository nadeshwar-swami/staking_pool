"""
Deploy the real AVM8 staking contract (uses `scripts/real_staking_contract.py`).

This script compiles the PyTEAL contract to TEAL v8 (requires PyTEAL that supports v8),
then sends TEAL to algod compile endpoint and creates the application. It reads
`SENDER_MNEMONIC` and `ALGOD_ADDRESS` / `ALGOD_TOKEN` from environment (or `.env`).

Note: If your local PyTEAL can't compile to v8, run this on a machine with newer PyTEAL
or extract the printed TEAL and use algod's compile endpoint directly.
"""

import os
import base64
import sys
import pathlib
import importlib.util
from algosdk.v2client import algod
from algosdk import mnemonic, account
from algosdk.future.transaction import ApplicationCreateTxn, StateSchema, wait_for_confirmation

# Load .env into environment if present (simple parser)
env_path = pathlib.Path(__file__).resolve().parent.parent / '.env'
if env_path.exists():
    for line in env_path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith('#'): continue
        if '=' in line:
            k, v = line.split('=', 1)
            v = v.strip().strip('"')
            os.environ.setdefault(k.strip(), v)

ALGOD_ADDRESS = os.environ.get('ALGOD_ADDRESS', 'https://testnet-api.algonode.cloud')
ALGOD_TOKEN = os.environ.get('ALGOD_TOKEN', '')
SENDER_MNEMONIC = os.environ.get('SENDER_MNEMONIC', '')

if not SENDER_MNEMONIC:
    print('Set SENDER_MNEMONIC in environment or in .env before running')
    sys.exit(1)

creator_sk = mnemonic.to_private_key(SENDER_MNEMONIC)
creator_addr = account.address_from_private_key(creator_sk)

algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)

# load the pyteal contract module
script_dir = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location('real_staking_contract', str(script_dir / 'real_staking_contract.py'))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

print('Compiling PyTEAL -> TEAL (v8)')
approval_teal = module.compileTeal(module.approval_program(749736840), mode=module.Mode.Application, version=8)
clear_teal = module.compileTeal(module.clear_state_program(), mode=module.Mode.Application, version=8)

def compile_program(client, source: str):
    resp = client.compile(source)
    return base64.b64decode(resp['result'])

approval_bytes = compile_program(algod_client, approval_teal)
clear_bytes = compile_program(algod_client, clear_teal)

global_schema = StateSchema(num_uints=1, num_byte_slices=1)
local_schema = StateSchema(num_uints=0, num_byte_slices=0)

sp = algod_client.suggested_params()
txn = ApplicationCreateTxn(
    sender=creator_addr,
    sp=sp,
    on_complete=0,
    approval_program=approval_bytes,
    clear_program=clear_bytes,
    global_schema=global_schema,
    local_schema=local_schema,
)

signed = txn.sign(creator_sk)
txid = algod_client.send_transaction(signed)
print('sent create tx', txid)
conf = wait_for_confirmation(algod_client, txid, 20)
app_id = conf['application-index']
print('Deployed new app id:', app_id)
print('Update frontend/app_state.json to point to this app id when ready.')
