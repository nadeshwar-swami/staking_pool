"""Deploy the staking app and create a reward ASA on Algorand TestNet.

Usage: set environment variables as in .env.example then run.
"""
import os
import time
from algosdk import account, mnemonic
from algosdk.v2client import algod
from algosdk import transaction
from algosdk.atomic_transaction_composer import TransactionWithSigner
from algosdk.future.transaction import StateSchema
from algosdk.future import transaction as txn
from algosdk.encoding import decode_address
from dotenv import load_dotenv
import base64

load_dotenv()

ALGOD_ADDRESS = os.getenv("ALGOD_ADDRESS", "https://testnet-api.algonode.cloud")
ALGOD_TOKEN = os.getenv("ALGOD_TOKEN", "")
SENDER_MNEMONIC = os.getenv("SENDER_MNEMONIC")

if not SENDER_MNEMONIC:
    raise SystemExit("Please set SENDER_MNEMONIC in environment (.env)")

sender_private_key = mnemonic.to_private_key(SENDER_MNEMONIC)
sender_address = account.address_from_private_key(sender_private_key)

algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)

def compile_teal(client, source_code):
    return client.compile(source_code)

def create_app():
    # read compiled TEAL from file
    import os
    src_dir = os.path.join(os.path.dirname(__file__), "..", "src")
    
    with open(os.path.join(src_dir, "approval.teal"), "r") as f:
        approval_source = f.read()
    with open(os.path.join(src_dir, "clear.teal"), "r") as f:
        clear_source = f.read()

    try:
        approval_result = compile_teal(algod_client, approval_source)
        clear_result = compile_teal(algod_client, clear_source)
    except Exception as e:
        print(f"Error compiling TEAL: {e}")
        raise

    approval_program = base64.b64decode(approval_result['result'])
    clear_program = base64.b64decode(clear_result['result'])

    global_schema = StateSchema(num_uints=8, num_byte_slices=8)
    local_schema = StateSchema(num_uints=4, num_byte_slices=4)

    params = algod_client.suggested_params()

    create_txn = txn.ApplicationCreateTxn(
        sender=sender_address,
        sp=params,
        on_complete=txn.OnComplete.NoOpOC,
        approval_program=approval_program,
        clear_program=clear_program,
        global_schema=global_schema,
        local_schema=local_schema
    )

    signed = create_txn.sign(sender_private_key)
    txid = algod_client.send_transaction(signed)
    print("txid:", txid)
    # Wait until the transaction is confirmed
    last_round = algod_client.status().get('last-round')
    txinfo = None
    while True:
        try:
            txinfo = algod_client.pending_transaction_info(txid)
            if "application-index" in txinfo:
                break
            print("Waiting for confirmation...")
        except Exception as e:
            print(f"Error checking transaction: {e}")
        last_round += 1
        algod_client.status_after_block(last_round)
        time.sleep(1)

    if not txinfo or "application-index" not in txinfo:
        print("Transaction info:", txinfo)
        raise Exception("Failed to get application-index from transaction")

    app_id = txinfo["application-index"]
    print("Deployed app id:", app_id)
    return app_id

def create_asa():
    params = algod_client.suggested_params()
    txn_ = txn.AssetConfigTxn(
        sender=sender_address,
        sp=params,
        total=1_000_000,
        default_frozen=False,
        unit_name="RWD",
        asset_name="RewardToken",
        manager=sender_address,
        reserve=sender_address,
        freeze=sender_address,
        clawback=sender_address,
        decimals=0,
        strict_empty_address_check=False
    )
    stxn = txn_.sign(sender_private_key)
    txid = algod_client.send_transaction(stxn)
    print("ASA create tx:", txid)
    # Wait until the transaction is confirmed
    last_round = algod_client.status().get('last-round')
    txinfo = None
    while True:
        try:
            txinfo = algod_client.pending_transaction_info(txid)
            if "asset-index" in txinfo:
                break
            print("Waiting for ASA creation confirmation...")
        except Exception as e:
            print(f"Error checking ASA transaction: {e}")
        last_round += 1
        algod_client.status_after_block(last_round)
        time.sleep(1)

    if not txinfo or "asset-index" not in txinfo:
        print("ASA Transaction info:", txinfo)
        raise Exception("Failed to get asset-index from transaction")

    asset_id = txinfo["asset-index"]
    print("Created ASA id:", asset_id)
    return asset_id

def main():
    try:
        # First compile the TEAL files
        print("Compiling PyTEAL to TEAL...")
        import sys
        sys.path.append(os.path.join(os.path.dirname(__file__), ".."))
        from src.staking_app import approval_program, clear_state_program
        from pyteal import compileTeal, Mode
        
        src_dir = os.path.join(os.path.dirname(__file__), "..", "src")
        with open(os.path.join(src_dir, "approval.teal"), "w") as f:
            compiled = compileTeal(approval_program(), mode=Mode.Application, version=6)
            f.write(compiled)
        with open(os.path.join(src_dir, "clear.teal"), "w") as f:
            compiled = compileTeal(clear_state_program(), mode=Mode.Application, version=6)
            f.write(compiled)
            
        print("Creating app...")
        app_id = create_app()
        print("Creating reward ASA...")
        asset_id = create_asa()
        print(f"\nDeployment successful!\nApp ID: {app_id}\nAsset ID: {asset_id}")
        
        # Save IDs to a file for easy access by interact script
        with open("app_state.json", "w") as f:
            import json
            json.dump({"app_id": app_id, "asset_id": asset_id}, f)
            print("\nApp state saved to app_state.json")
            
    except Exception as e:
        print(f"\nError during deployment: {str(e)}")
        raise

if __name__ == "__main__":
    main()
