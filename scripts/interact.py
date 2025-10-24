"""Simple interact script for staking app.

Usage: configure .env and call functions from main() for basic demo flows.
"""
import os
from algosdk import mnemonic, account
from algosdk.v2client import algod
from algosdk.transaction import (
    ApplicationNoOpTxn,
    ApplicationOptInTxn,
    PaymentTxn,
    OnComplete,
    AssetTransferTxn
)
from algosdk import transaction
from dotenv import load_dotenv
import base64

load_dotenv()

ALGOD_ADDRESS = os.getenv("ALGOD_ADDRESS", "https://testnet-api.algonode.cloud")
ALGOD_TOKEN = os.getenv("ALGOD_TOKEN", "")
SENDER_MNEMONIC = os.getenv("SENDER_MNEMONIC")

sender_private_key = mnemonic.to_private_key(SENDER_MNEMONIC)
sender_address = account.address_from_private_key(sender_private_key)

algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)

def opt_in(app_id):
    params = algod_client.suggested_params()
    app_txn = ApplicationOptInTxn(
        sender=sender_address,
        sp=params,
        index=app_id
    )
    stx = app_txn.sign(sender_private_key)
    txid = algod_client.send_transaction(stx)
    print("Opt-in txid:", txid)
    return transaction.wait_for_confirmation(algod_client, txid, 4)

def stake(app_id, amount):
    # Create grouped transactions: Payment + AppCall
    params = algod_client.suggested_params()
    
    # Payment to app address
    from algosdk.logic import get_application_address
    app_addr = get_application_address(app_id)
    pay_txn = PaymentTxn(
        sender=sender_address,
        sp=params,
        receiver=app_addr,
        amt=amount
    )
    
    # App call with "stake"
    app_txn = ApplicationNoOpTxn(
        sender=sender_address,
        sp=params,
        index=app_id,
        app_args=[b"stake"]
    )
    
    # Group the transactions
    transaction.assign_group_id([pay_txn, app_txn])
    
    # Sign both transactions
    signed_pay = pay_txn.sign(sender_private_key)
    signed_app = app_txn.sign(sender_private_key)
    
    # Send the group
    txid = algod_client.send_transactions([signed_pay, signed_app])
    print("Stake txid:", txid)
    result = transaction.wait_for_confirmation(algod_client, txid, 4)
    print("Stake confirmed in round:", result["confirmed-round"])
    return result

def withdraw(app_id, amount):
    params = algod_client.suggested_params()
    
    # Get app info to find reward ASA ID
    app_info = algod_client.application_info(app_id)
    for kv in app_info['params']['global-state']:
        if base64.b64decode(kv['key']) == b'RA':  # Reward ASA ID key
            reward_asa = kv['value']['uint']
            break
    
    # Single app call that triggers inner transactions
    app_txn = ApplicationNoOpTxn(
        sender=sender_address,
        sp=params,
        index=app_id,
        app_args=[b"withdraw", amount.to_bytes(8, 'big')],
        foreign_assets=[reward_asa]
    )
    
    signed = app_txn.sign(sender_private_key)
    txid = algod_client.send_transaction(signed)
    print("Withdraw txid:", txid)
    result = transaction.wait_for_confirmation(algod_client, txid, 4)
    print("Withdraw confirmed in round:", result["confirmed-round"])
    return result

def claim(app_id):
    params = algod_client.suggested_params()
    
    # Get app info to find reward ASA ID
    app_info = algod_client.application_info(app_id)
    for kv in app_info['params']['global-state']:
        if base64.b64decode(kv['key']) == b'RA':  # Reward ASA ID key
            reward_asa = kv['value']['uint']
            break
    
    # Single app call that triggers inner ASA transfer
    app_txn = ApplicationNoOpTxn(
        sender=sender_address,
        sp=params,
        index=app_id,
        app_args=[b"claim"],
        foreign_assets=[reward_asa]  # Reference reward ASA in foreign assets
    )
    
    signed = app_txn.sign(sender_private_key)
    txid = algod_client.send_transaction(signed)
    print("Claim txid:", txid)
    result = transaction.wait_for_confirmation(algod_client, txid, 4)
    print("Claim confirmed in round:", result["confirmed-round"])
    return result

def opt_in_to_asa(asset_id):
    """Opt-in to the reward ASA."""
    params = algod_client.suggested_params()
    
    asa_txn = AssetTransferTxn(
        sender=sender_address,
        sp=params,
        receiver=sender_address,
        amt=0,
        index=asset_id
    )
    
    signed = asa_txn.sign(sender_private_key)
    txid = algod_client.send_transaction(signed)
    print("ASA opt-in txid:", txid)
    return transaction.wait_for_confirmation(algod_client, txid, 4)

def opt_app_into_asa(app_id, asset_id):
    """Have the app opt into the reward ASA by including it in foreign assets."""
    params = algod_client.suggested_params()
    
    from algosdk.logic import get_application_address
    app_addr = get_application_address(app_id)
    
    # Step 1: Fund the app account with minimum balance for ASA opt-in
    min_balance_per_asset = 200000  # 0.2 ALGO per ASA opt-in
    min_txn_fee = 2000  # 0.002 ALGO for transaction fees
    funding_amount = min_balance_per_asset + min_txn_fee
    
    fund_txn = PaymentTxn(
        sender=sender_address,
        sp=params,
        receiver=app_addr,
        amt=funding_amount
    )
    
    # Step 2: Create opt-in transaction
    opt_in_txn = ApplicationNoOpTxn(
        sender=sender_address,
        sp=params,
        index=app_id,
        app_args=[b"opt_in_asset"],
        foreign_assets=[asset_id]  # Allow app to reference this ASA
    )
    
    # Group the transactions
    transaction.assign_group_id([fund_txn, opt_in_txn])
    
    # Sign transactions
    signed_fund_txn = fund_txn.sign(sender_private_key)
    signed_opt_in_txn = opt_in_txn.sign(sender_private_key)
    
    # Send grouped transactions
    try:
        algod_client.send_transactions([signed_fund_txn, signed_opt_in_txn])
        # Wait for confirmation of the group
        result = transaction.wait_for_confirmation(algod_client, signed_opt_in_txn.get_txid(), 4)
        print(f"App account successfully funded and opted into ASA")
        return result
    except Exception as e:
        print(f"Error in app ASA opt-in: {str(e)}")
        return False

def fund_app_with_rewards(app_id, asset_id, amount=100_000):
    """Fund the app with reward ASA so it can distribute rewards."""
    params = algod_client.suggested_params()
    
    from algosdk.logic import get_application_address
    app_addr = get_application_address(app_id)
    
    # Send ASA to app account
    print(f"\nSending {amount} ASA to app...")
    fund_txn = AssetTransferTxn(
        sender=sender_address,
        sp=params,
        receiver=app_addr,
        amt=amount,
        index=asset_id
    )
    signed_fund = fund_txn.sign(sender_private_key)
    txid = algod_client.send_transaction(signed_fund)
    
    result = transaction.wait_for_confirmation(algod_client, txid, 4)
    print("ASA sent to app, txid:", txid)
    return result

def set_up_reward_asset(app_id, asset_id):
    """Set up the reward asset and reward rate for the app."""
    params = algod_client.suggested_params()
    
    # Call set_params to configure reward asset and rate
    app_txn = ApplicationNoOpTxn(
        sender=sender_address,
        sp=params,
        index=app_id,
        app_args=[
            b"set_params",
            asset_id.to_bytes(8, 'big'),
            # Set reward rate to 1 token per second
            (1).to_bytes(8, 'big')
        ]
    )
    
    signed = app_txn.sign(sender_private_key)
    txid = algod_client.send_transaction(signed)
    print("Set params txid:", txid)
    return transaction.wait_for_confirmation(algod_client, txid, 4)

def demo_flow(app_id, asset_id):
    """Run through a complete demo flow."""
    print(f"\nStarting demo with app {app_id} and ASA {asset_id}")
    
    # Check if we need to opt in
    account_info = algod_client.account_info(sender_address)
    
    # 1. App opt-in if needed
    if app_id not in [app['id'] for app in account_info.get('apps-local-state', [])]:
        print("\nOpting in to app...")
        opt_in(app_id)
    else:
        print("\nAlready opted in to app")
    
    # 2. ASA opt-in if needed
    if asset_id not in account_info.get('assets', {}):
        print("\nOpting in to reward ASA...")
        opt_in_to_asa(asset_id)
    else:
        print("\nAlready opted in to reward ASA")
    
    # 3. Have the app opt into the ASA
    print("\nHaving app opt into reward ASA...")
    if not opt_app_into_asa(app_id, asset_id):
        print("Failed to have app opt into ASA")
        return

    # 4. Set up reward params and fund app
    print("\nSetting up reward asset and rate...")
    set_up_reward_asset(app_id, asset_id)
    
    print("\nFunding app with reward ASA...")
    fund_app_with_rewards(app_id, asset_id)
    
    # 4. Stake some ALGO
    stake_amount = 100_000  # 0.1 ALGO to test
    print(f"\nStaking {stake_amount} microALGO...")
    stake(app_id, stake_amount)
    
    # 4. Wait a few seconds for rewards to accrue
    print("\nWaiting 5 seconds for rewards to accrue...")
    import time
    time.sleep(5)
    
    # 5. Claim rewards
    print("\nClaiming rewards...")
    claim(app_id)
    
    # 6. Withdraw half the staked amount
    withdraw_amount = stake_amount // 2
    print(f"\nWithdrawing {withdraw_amount} microALGO...")
    withdraw(app_id, withdraw_amount)

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 3:
        print("Usage: python interact.py <app_id> <asset_id>")
        sys.exit(1)
    
    app_id = int(sys.argv[1])
    asset_id = int(sys.argv[2])
    demo_flow(app_id, asset_id)
