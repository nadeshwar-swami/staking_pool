import os
import json
from algosdk import mnemonic, account
from algosdk.v2client import algod
from algosdk.future.transaction import ApplicationCallTxn
from algosdk.encoding import decode_address
from dotenv import load_dotenv

load_dotenv()

ALGOD_ADDRESS = os.getenv("ALGOD_ADDRESS", "https://testnet-api.algonode.cloud")
ALGOD_TOKEN = os.getenv("ALGOD_TOKEN", "")
SENDER_MNEMONIC = os.getenv("SENDER_MNEMONIC")

sender_private_key = mnemonic.to_private_key(SENDER_MNEMONIC)
sender_address = account.address_from_private_key(sender_private_key)

algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)

def set_params():
    # Load app state
    with open("app_state.json", "r") as f:
        app_state = json.load(f)
    
    app_id = app_state["app_id"]
    asset_id = app_state["asset_id"]
    
    # Set reward rate to 100 tokens per day (about 0.001157 tokens per second)
    reward_rate = 1157  # Rate in microTokens per second
    
    params = algod_client.suggested_params()
    
    # Convert parameters to byte arrays
    asset_id_bytes = asset_id.to_bytes(8, byteorder='big')
    rate_bytes = reward_rate.to_bytes(8, byteorder='big')
    
    # Create application call transaction
    txn = ApplicationCallTxn(
        sender=sender_address,
        sp=params,
        index=app_id,
        app_args=[b"set_params", asset_id_bytes, rate_bytes],
        on_complete=0  # NoOp
    )
    
    # Sign and send
    signed_txn = txn.sign(sender_private_key)
    tx_id = algod_client.send_transaction(signed_txn)
    print(f"Set params transaction sent: {tx_id}")
    
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
        
    print(f"Parameters set successfully. Reward rate: {reward_rate} microTokens/second")
    return True

if __name__ == "__main__":
    try:
        set_params()
        print("Successfully set contract parameters")
    except Exception as e:
        print(f"Error setting parameters: {str(e)}")