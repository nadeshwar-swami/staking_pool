import os
from algosdk import account, mnemonic
from algosdk.v2client import algod
from algosdk.future.transaction import AssetOptInTxn
from dotenv import load_dotenv
import json
import time

load_dotenv()

ALGOD_ADDRESS = os.getenv("ALGOD_ADDRESS", "https://testnet-api.algonode.cloud")
ALGOD_TOKEN = os.getenv("ALGOD_TOKEN", "")
SENDER_MNEMONIC = os.getenv("SENDER_MNEMONIC")

sender_private_key = mnemonic.to_private_key(SENDER_MNEMONIC)
sender_address = account.address_from_private_key(sender_private_key)

algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)

def opt_in_to_reward():
    # Load app state to get asset ID
    with open("app_state.json", "r") as f:
        app_state = json.load(f)
    
    asset_id = app_state["asset_id"]
    
    # Get suggested params
    params = algod_client.suggested_params()
    
    # Create opt-in transaction
    txn = AssetOptInTxn(
        sender=sender_address,
        sp=params,
        index=asset_id
    )
    
    # Sign transaction
    signed_txn = txn.sign(sender_private_key)
    
    # Send transaction
    tx_id = algod_client.send_transaction(signed_txn)
    print(f"Sent opt-in transaction: {tx_id}")
    
    # Wait for confirmation
    last_round = algod_client.status().get('last-round')
    while True:
        try:
            txinfo = algod_client.pending_transaction_info(tx_id)
            if "confirmed-round" in txinfo:
                break
            print("Waiting for confirmation...")
        except Exception as e:
            print(f"Error checking transaction: {e}")
        last_round += 1
        algod_client.status_after_block(last_round)
        time.sleep(1)
    
    print(f"Successfully opted in to reward token (ASA ID: {asset_id})")
    return True

if __name__ == "__main__":
    try:
        opt_in_to_reward()
    except Exception as e:
        print(f"Error opting in: {str(e)}")