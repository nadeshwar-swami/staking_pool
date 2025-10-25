import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';
import { AppState, StakeError } from '../types';

// App state with the contract IDs
const appState: AppState = {
  app_id: 748346211,
  asset_id: 748346215
};

// Initialize Pera Wallet instance
const peraWallet = new PeraWalletConnect({
  shouldShowSignTxnToast: false,
  chainId: 416002 // TestNet chain ID
});

// Algod client for TestNet
const algod = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const MainContent = styled.div`
  max-width: 480px;
  margin: 32px auto;
  padding: 0 16px;
  width: 100%;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;

const StakeInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: white;
  margin-bottom: 24px;
  gap: 16px;

  &:focus-within {
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0,102,204,0.1);
  }
`;

const TokenInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 16px;
  border-right: 1px solid #eee;
  min-width: fit-content;
`;

const TokenIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const TokenDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const TokenSymbol = styled.span`
  font-weight: 600;
  color: #333;
`;

const TokenBalance = styled.span`
  font-size: 12px;
  color: #666;
`;

const StakeInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
  text-align: right;
  color: #333;
  background: transparent;
  min-width: 0;
  padding: 0 8px;
  margin-left: 8px;
  
  &::placeholder {
    color: #999;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const StakingPeriodContainer = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
  color: #333;
  background: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  
  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0,102,204,0.1);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const APRBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const APRLabel = styled.span`
  font-weight: 500;
  color: #333;
`;

const APRValue = styled.span`
  font-weight: 600;
  color: #0066cc;
  background: rgba(0,102,204,0.1);
  padding: 4px 12px;
  border-radius: 999px;
`;

const StakeButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 48px;
  background: #000;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.disabled ? '#000' : '#333'};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  padding: 12px;
  background: #ffebee;
  color: #c62828;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
`;

const StakingPeriods = [
  { value: "30", label: "30 days - 5% APR" },
  { value: "60", label: "60 days - 7% APR" },
  { value: "90", label: "90 days - 10% APR" }
];

function getAPR(days: string): string {
  switch (days) {
    case "30": return "5%";
    case "60": return "7%";
    case "90": return "10%";
    default: return "0%";
  }
}

export default function Stake() {
  const [amount, setAmount] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("30");
  const [error, setError] = useState<StakeError | null>(null);
  const [isStaking, setIsStaking] = useState(false);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [accountBalance, setAccountBalance] = useState("0");

  useEffect(() => {
    // Reconnect to session if it exists
    peraWallet.reconnectSession().then((accounts) => {
      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    });

    // Handle disconnect event
    peraWallet.connector?.on("disconnect", () => {
      setAccountAddress(null);
      setAccountBalance("0");
    });

    return () => {
      // Cleanup
      peraWallet.disconnect();
    };
  }, []);

  // Fetch balance when account is connected
  useEffect(() => {
    const fetchBalance = async () => {
      if (accountAddress) {
        try {
          const accountInfo = await algod.accountInformation(accountAddress).do();
          const balance = (Number(accountInfo.amount) / 1e6).toFixed(2);
          setAccountBalance(balance);
        } catch (err) {
          console.error("Error fetching balance:", err);
          setAccountBalance("0");
        }
      }
    };

    fetchBalance();
  }, [accountAddress]);

  const connectWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      setAccountAddress(accounts[0]);
      return accounts[0];
    } catch (error: any) {
      if (error?.message?.includes("Session currently connected")) {
        const accounts = await peraWallet.reconnectSession();
        if (accounts.length > 0) {
          setAccountAddress(accounts[0]);
          return accounts[0];
        }
      }
      throw error;
    }
  };

  const handleStake = async () => {
    if (!amount) {
      setError({
        type: "transaction_failed",
        message: "Please enter an amount to stake"
      });
      return;
    }

    try {
      setIsStaking(true);
      setError(null);

      // Ensure we have a connected account
      let activeAddress = accountAddress;
      if (!activeAddress) {
        try {
          // First try to reconnect existing session
          const reconnectAccounts = await peraWallet.reconnectSession();
          if (reconnectAccounts.length > 0) {
            activeAddress = reconnectAccounts[0];
            setAccountAddress(activeAddress);
          } else {
            // If no existing session, try to create new connection
            const newAccounts = await peraWallet.connect();
            if (newAccounts.length > 0) {
              activeAddress = newAccounts[0];
              setAccountAddress(activeAddress);
            }
          }
        } catch (err: any) {
          console.error("Wallet connection error:", err);
          if (err?.message?.includes("Session currently connected")) {
            // If session exists but we don't have the address, try one more reconnect
            const accounts = await peraWallet.reconnectSession();
            if (accounts.length > 0) {
              activeAddress = accounts[0];
              setAccountAddress(activeAddress);
            }
          }
        }
      }

      // Verify we have a connected address
      if (!activeAddress) {
        setError({
          type: "transaction_failed",
          message: "Please connect your wallet to stake"
        });
        setIsStaking(false);
        return;
      }

      // Get suggested params for the transaction
      const params = await algod.getTransactionParams().do();

      // Check if account is opted in
      let userOptedIn = false;
      try {
        await algod.accountApplicationInformation(activeAddress, appState.app_id).do();
        userOptedIn = true;
      } catch (error) {
        console.log("User not opted in to application");
      }

      // If not opted in, handle opt-in first
      if (!userOptedIn) {
        // Create and send opt-in transaction
        const optInTxn = algosdk.makeApplicationOptInTxnFromObject({
          sender: activeAddress,
          suggestedParams: params,
          appIndex: appState.app_id
        });

        const optInTxnToSign = [{ txn: optInTxn, signers: [activeAddress] }];
        const signedOptIn = await peraWallet.signTransaction([optInTxnToSign]);
        const response = await algod.sendRawTransaction(signedOptIn).do();
        await algosdk.waitForConfirmation(algod, response.txid, 4);
        console.log("Successfully opted into application");
      }

      // Create payment transaction
      const paymentTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        sender: activeAddress,
        receiver: algosdk.getApplicationAddress(appState.app_id),
        amount: Math.floor(Number(amount) * 1e6),
        suggestedParams: params
      });

      // Convert period to seconds and create app call transaction
      const periodInSeconds = parseInt(selectedPeriod) * 24 * 60 * 60;
      const appCallTxn = algosdk.makeApplicationCallTxnFromObject({
        sender: activeAddress,
        appIndex: appState.app_id,
        onComplete: algosdk.OnApplicationComplete.NoOpOC,
        appArgs: [
          new Uint8Array(Buffer.from("stake")),
          algosdk.encodeUint64(periodInSeconds)
        ],
        suggestedParams: {
          ...params,
          flatFee: true,
          fee: 2000 // Ensure enough fee for inner transactions
        }
      });

      // Create atomic transaction group
      const txnsToGroup = [paymentTxn, appCallTxn];
      algosdk.assignGroupID(txnsToGroup);

      // Format for signing
      const transactions = txnsToGroup.map(txn => ({
        txn: txn,
        signers: [activeAddress]
      }));

      // Sign with Pera Wallet
      try {
        const signedTxns = await peraWallet.signTransaction([transactions]);
        
        // Send signed transactions to network
        const response = await algod.sendRawTransaction(signedTxns).do();
        const txId = response.txid;
        await algosdk.waitForConfirmation(algod, txId, 4);
        
        console.log("Successfully staked!", txId);
        setError(null);
      } catch (err: any) {
        if (typeof err === 'object' && err?.message?.includes('cancelled')) {
          throw new Error("Transaction was cancelled");
        }
        throw err;
      }
    } catch (err: any) {
      console.error("Staking error:", err);
      setError({
        type: "transaction_failed",
        message: err?.message || "Failed to stake ALGO"
      });
    } finally {
      setIsStaking(false);
    }
  };

  return (
    <Container>
      <MainContent>
        <Title>Stake ALGO</Title>
        <Card>
          <StakeInputContainer>
            <TokenInfo>
              <TokenIcon src="/algo-logo.svg" alt="ALGO" />
              <TokenDetails>
                <TokenSymbol>ALGO</TokenSymbol>
                {accountAddress && (
                  <TokenBalance>
                    Balance: {accountBalance} ALGO
                  </TokenBalance>
                )}
              </TokenDetails>
            </TokenInfo>
            <StakeInput
              type="text"
              inputMode="decimal"
              placeholder="0.0"
              value={amount}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^\d*\.?\d*$/.test(value)) {
                  setAmount(value);
                  setError(null);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'e' || e.key === '-' || e.key === '+') {
                  e.preventDefault();
                }
              }}
            />
          </StakeInputContainer>

          <StakingPeriodContainer>
            <Label>Select Staking Period</Label>
            <Select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              {StakingPeriods.map((period) => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </Select>
          </StakingPeriodContainer>

          <APRBox>
            <APRLabel>Expected APR</APRLabel>
            <APRValue>{getAPR(selectedPeriod)}</APRValue>
          </APRBox>

          {error && (
            <ErrorMessage>{error.message}</ErrorMessage>
          )}

          <StakeButton 
            disabled={isStaking}
            onClick={handleStake}
          >
            {isStaking ? "Staking..." : "Stake ALGO"}
          </StakeButton>
        </Card>
      </MainContent>
    </Container>
  );
}