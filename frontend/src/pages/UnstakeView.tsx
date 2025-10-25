import React, { useState, useEffect } from 'react';
import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';
import { AppState } from '../types';
import appStateJson from '../app_state.json';
import './Unstake.css';

interface Props {
  accountAddress: string | null;
  peraWallet: PeraWalletConnect;
}

interface StakeInfo {
  stakedAmount: number;
  pendingRewards: number;
}

interface AppOptInStatus {
  isOptedIn: boolean;
  isChecking: boolean;
}

const appState: AppState = {
  app_id: appStateJson.app_id,
  asset_id: appStateJson.asset_id
};

// Initialize Algorand client with proper configuration
const algodServer = 'https://testnet-api.algonode.cloud';
const algodToken = '';
const algodPort = '';

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// Test the connection
(async () => {
  try {
    await algodClient.status().do();
    console.log('Successfully connected to Algorand node');
  } catch (error) {
    console.error('Failed to connect to Algorand node:', error);
  }
})();

export default function UnstakeView({ accountAddress, peraWallet }: Props): JSX.Element {
  const [stakeInfo, setStakeInfo] = useState<StakeInfo>({ stakedAmount: 0, pendingRewards: 0 });
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [optInStatus, setOptInStatus] = useState<AppOptInStatus>({
    isOptedIn: false,
    isChecking: true
  });

  const fetchStakeInfo = async () => {
    // Only show loading on initial load
    if (stakeInfo.stakedAmount === 0) {
      setIsLoading(true);
    }
    
    if (!accountAddress) {
      console.log('No account address provided');
      setStakeInfo({ stakedAmount: 0, pendingRewards: 0 });
      setIsLoading(false);
      return;
    }

    try {
      console.log('Fetching account info for address:', accountAddress);
      console.log('Looking for app ID:', appState.app_id);
      
      // Ensure the algodClient is properly initialized
      if (!algodClient) {
        throw new Error('Algorand client not initialized');
      }

      // Get account info
      const accountInfo = await algodClient.accountInformation(accountAddress).do();
      // Custom serializer to handle BigInt values
      const serializer = (_key: string, value: any) => {
        if (typeof value === 'bigint') {
          return value.toString();
        }
        return value;
      };
      console.log('Account Info:', JSON.stringify(accountInfo, serializer, 2));
      
      // Validate account info structure
      if (!accountInfo) {
        throw new Error('Failed to retrieve account information');
      }
      
      // First check if the account is opted into the app
      const localStates = accountInfo.appsLocalState || [];
      console.log('Local States:', JSON.stringify(localStates, serializer, 2));
      console.log('Looking for app_id:', appState.app_id, 'in local states');
      
      // Find the app's local state
      const appLocalState = localStates.find(
        (app: any) => Number(app.id) === appState.app_id
      );

      console.log('Found app local state:', appLocalState ? 'yes' : 'no');
      if (appLocalState) {
        console.log('App local state:', JSON.stringify(appLocalState, serializer, 2));
      }

      if (!appLocalState) {
        console.log('App not found in local state. Make sure the account is opted in to app ID:', appState.app_id);
        setError('Please opt in to the staking application first');
        setStakeInfo({ stakedAmount: 0, pendingRewards: 0 });
        return;
      }

      // Log the full app local state for debugging
      console.log('Full app local state:', appLocalState);

      const keyValues = appLocalState.keyValue;
      if (!keyValues) {
        console.log('No key-value pairs found in local state');
        setStakeInfo({ stakedAmount: 0, pendingRewards: 0 });
        return;
      }

      console.log('Raw key-value pairs:', keyValues);
      let stakedAmount = 0;
      let pendingRewards = 0;

      // Log each key-value pair for debugging
      keyValues.forEach((kv: any) => {
        try {
          // Log the raw key-value pair
          console.log('Raw KV pair:', kv);
          
          // Convert and log the key and value
          const rawKey = Buffer.from(kv.key, 'base64').toString();
          console.log('Processing key-value pair:', {
            rawKey,
            rawValue: kv.value,
            valueType: typeof kv.value,
            valueContent: kv.value
          });
          
          // Try different key formats
          if (rawKey === 'sa' || rawKey === 'staked_amount') {
            stakedAmount = Number(kv.value.uint || 0);
            console.log('Found staked amount:', stakedAmount);
          } else if (rawKey === 'pr' || rawKey === 'pending_rewards') {
            pendingRewards = Number(kv.value.uint || 0);
            console.log('Found pending rewards:', pendingRewards);
          } else {
            // Log the raw key bytes for debugging
            console.log('Unknown key details:', {
              rawKeyBase64: kv.key,
              rawKeyBytes: Array.from(Buffer.from(kv.key, 'base64')),
              decodedString: rawKey
            });
          }
        } catch (err) {
          console.error('Error processing key-value pair:', err);
          console.log('Problematic key-value pair:', kv);
        }
      });

      console.log('Final values:', {
        stakedAmount,
        pendingRewards,
        formattedStakedAmount: stakedAmount / 1_000_000,
        formattedPendingRewards: pendingRewards / 1_000_000
      });

      setStakeInfo({ stakedAmount, pendingRewards });
    } catch (error: any) {
      console.error('Error fetching stake info:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      
      let errorMessage = 'Failed to fetch staking information';
      if (error.message) {
        if (error.message.includes('opt')) {
          errorMessage = 'Please opt in to the staking application first';
        } else if (error.message.includes('network')) {
          errorMessage = 'Network error. Please check your connection';
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }
      
      setError(errorMessage);
      setStakeInfo({ stakedAmount: 0, pendingRewards: 0 });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptIn = async () => {
    if (!accountAddress) {
      setError('Please connect your wallet first');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // First check if already opted in
      const currentOptInStatus = await checkAccountOptIn();
      if (currentOptInStatus) {
        console.log('Account is already opted in');
        setError('Account is already opted in to the application');
        return;
      }

      console.log('Starting opt-in process for account:', accountAddress);
      console.log('App ID to opt into:', appState.app_id);

      // Get account information to verify minimum balance
      const accountInfo = await algodClient.accountInformation(accountAddress).do();
      console.log('Account balance:', accountInfo.amount);

      const suggestedParams = await algodClient.getTransactionParams().do();
      console.log('Got suggested params:', suggestedParams);
      
      const optInTxn = algosdk.makeApplicationOptInTxnFromObject({
        sender: accountAddress,
        suggestedParams,
        appIndex: appState.app_id,
      });

      try {
        const signedTxn = await peraWallet.signTransaction([[{ txn: optInTxn }]]);
        console.log('Transaction signed successfully');
        
        const response = await algodClient.sendRawTransaction(signedTxn).do();
        console.log('Opt-in transaction sent:', response);
        
        // Wait for transaction to be confirmed
        console.log('Waiting for transaction confirmation...');
        const confirmedTxn = await algosdk.waitForConfirmation(algodClient, response.txid, 4);
        console.log('Transaction confirmed in round:', confirmedTxn.confirmedRound);
        
        // Add a delay to allow indexer to update
        console.log('Waiting for indexer to update...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (signError: any) {
        if (signError.message?.includes('cancelled')) {
          throw new Error('Transaction was cancelled by user');
        }
        throw signError;
      }
      
      // Verify opt-in after confirmation
      console.log('Verifying opt-in status...');
      const isOptedIn = await checkAccountOptIn();
      
      if (isOptedIn) {
        console.log('Successfully opted into application');
        setOptInStatus({ isOptedIn: true, isChecking: false });
        await fetchStakeInfo();
      } else {
        throw new Error('Opt-in transaction was confirmed but account is not showing as opted in. Please try refreshing the page.');
      }
    } catch (error: any) {
      console.error('Error opting in:', error);
      setError(error.message || 'Failed to opt in to the application');
    } finally {
      setIsProcessing(false);
    }
  };

  const checkAccountOptIn = async () => {
    if (!accountAddress) {
      console.log('No account address provided for opt-in check');
      setOptInStatus({ isOptedIn: false, isChecking: false });
      return false;
    }
    
    try {
      setOptInStatus(prev => ({ ...prev, isChecking: true }));
      console.log('Checking opt-in status for address:', accountAddress);
      console.log('Checking for app ID:', appState.app_id);
      
      // Get account information
      const accountInfo = await algodClient.accountInformation(accountAddress).do();
      
      // Log the full account info for debugging
      const serializer = (_key: string, value: any) => {
        if (typeof value === 'bigint') {
          return value.toString();
        }
        return value;
      };
      console.log('Full account info:', JSON.stringify(accountInfo, serializer, 2));
      
      // Check if the account has opted into any applications
      if (!accountInfo.appsLocalState || accountInfo.appsLocalState.length === 0) {
        console.log('No applications found in account local state');
        setOptInStatus({ isOptedIn: false, isChecking: false });
        return false;
      }
      
      // Check the applications local state
      const hasOptedIn = accountInfo.appsLocalState.some((app: any) => {
        const appId = Number(app.id);
        const matches = appId === appState.app_id;
        console.log(`Found application ID ${appId}, matches our app ID ${appState.app_id}: ${matches}`);
        if (matches) {
          // Log the app's local state for debugging
          console.log('Found matching app local state:', JSON.stringify(app, serializer, 2));
        }
        return matches;
      });
      
      console.log('Opt-in check result:', {
        hasOptedIn,
        totalAppsFound: accountInfo.appsLocalState.length,
        appIds: accountInfo.appsLocalState.map((app: any) => Number(app.id))
      });
      
      console.log('Final opt-in status:', hasOptedIn);
      
      setOptInStatus({ isOptedIn: hasOptedIn, isChecking: false });
      return hasOptedIn;
    } catch (error: any) {
      console.error('Error checking opt-in status:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
      setOptInStatus({ isOptedIn: false, isChecking: false });
      return false;
    }
  };

  useEffect(() => {
    const initializeAccount = async () => {
      if (!accountAddress) {
        console.log('No account address, skipping initialization');
        return;
      }

      try {
        console.log('Initializing account for address:', accountAddress);
        console.log('Current app ID:', appState.app_id);
        
        // Clear any previous errors
        setError(null);
        
        // Check opt-in status
        const isOptedIn = await checkAccountOptIn();
        console.log('Opt-in status:', isOptedIn);
        
        if (!isOptedIn) {
          console.log('Account not opted in');
          setError('Please opt in to the staking application first');
          return;
        }
        
        // Fetch stake info after confirming opt-in
        console.log('Account is opted in, fetching stake info...');
        await fetchStakeInfo();
      } catch (error: any) {
        console.error('Error in initialization:', error);
        setError(`Initialization error: ${error.message}`);
      }
    };

    // Initialize immediately
    void initializeAccount();
    
    // Poll for updates more frequently (every 3 seconds) if account is connected
    const interval = setInterval(() => {
      if (accountAddress) {
        console.log('Polling for updates...');
        void fetchStakeInfo();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [accountAddress]);

  const handleUnstake = async () => {
    if (!accountAddress || !withdrawAmount) {
      setError('Please enter an amount and connect your wallet');
      return;
    }
    
    setIsProcessing(true);
    setError(null);

    try {
      const parsedAmount = parseFloat(withdrawAmount);
      const stakedAlgos = stakeInfo.stakedAmount / 1_000_000;
      
      console.log('Unstake validation:', {
        parsedAmount,
        stakedAlgos,
        stakedMicroAlgos: stakeInfo.stakedAmount,
        withdrawAmount
      });
      
      // Validate input amount
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        throw new Error('Please enter a valid amount greater than 0');
      }

      if (parsedAmount > stakedAlgos) {
        throw new Error(`Cannot unstake more than your staked amount (${stakedAlgos.toFixed(6)} ALGO)`);
      }

      const amount = Math.floor(parsedAmount * 1_000_000); // Convert to microAlgos
      
      // Double check the conversion
      console.log('Amount conversion check:', {
        inputAmount: parsedAmount,
        microAlgos: amount,
        backToAlgos: amount / 1_000_000
      });
      console.log('Amount to unstake:', amount);

      const suggestedParams = await algodClient.getTransactionParams().do();

      const appCallTxn = algosdk.makeApplicationCallTxnFromObject({
        sender: accountAddress,
        appIndex: appState.app_id,
        onComplete: algosdk.OnApplicationComplete.NoOpOC,
        appArgs: [
          new Uint8Array(Buffer.from('unstake')),
          algosdk.encodeUint64(amount)
        ],
        foreignAssets: [appState.asset_id], // Include the ASA
        suggestedParams,
      });

      try {
        console.log('Requesting transaction signature...');
        const signedTxns = await peraWallet.signTransaction([[{ txn: appCallTxn }]]);
        console.log('Transaction signed successfully');
        
        console.log('Sending transaction to network...');
        const response = await algodClient.sendRawTransaction(signedTxns).do();

        console.log('Waiting for transaction confirmation...');
        await algosdk.waitForConfirmation(algodClient, response.txId, 4);
        console.log('Transaction confirmed');

        setAmount('');
        setSuccessMessage('Unstake successful!');
        setErrorMessage('');
      } catch (error) {
        console.error('Error during unstaking:', error);
        setErrorMessage('Failed to unstake. Please try again.');
        setSuccessMessage('');
      }
      console.log('Unstake transaction sent:', response);

      // Wait for transaction to be confirmed
      console.log('Waiting for unstake transaction to be confirmed...');
      await algosdk.waitForConfirmation(algodClient, response.txid, 4);
      console.log('Unstake transaction confirmed');

      // Clear the input
      setWithdrawAmount('');

      // Add a small delay to allow indexer to update
      console.log('Waiting for indexer to update...');
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Refresh the stake info multiple times to ensure we get the updated amount
      console.log('Refreshing stake info...');
      await fetchStakeInfo();
      
      // Set up additional refreshes to catch any delayed updates
      const refreshIntervals = [3000, 6000]; // Refresh after 3 and 6 seconds
      for (const delay of refreshIntervals) {
        setTimeout(() => {
          console.log(`Refreshing stake info after ${delay}ms...`);
          void fetchStakeInfo();
        }, delay);
      }
      
    } catch (error: any) {
      console.error('Error unstaking:', error);
      setError(error.message || 'Failed to process unstaking transaction');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    
    // Allow empty input
    if (input === '') {
      setWithdrawAmount('');
      return;
    }

    // Only allow valid numbers with up to 6 decimal places
    const regex = /^\d*\.?\d{0,6}$/;
    if (regex.test(input)) {
      const parsedValue = parseFloat(input);
      if (isNaN(parsedValue)) {
        setWithdrawAmount(input);
      } else {
        // Ensure the amount is not greater than staked amount
        const maxAmount = stakeInfo.stakedAmount / 1_000_000;
        if (parsedValue <= maxAmount) {
          setWithdrawAmount(input);
        }
      }
      console.log('Input validation:', {
        input,
        parsedValue: parseFloat(input),
        maxAmount: stakeInfo.stakedAmount / 1_000_000,
        isValid: regex.test(input)
      });
    }
  };

  const formatAmount = (amount: number) => {
    const formatted = (amount / 1_000_000).toFixed(6);
    console.log('Formatting amount:', {
      originalAmount: amount,
      dividedBy1M: amount / 1_000_000,
      formatted,
      formattedAsNumber: parseFloat(formatted)
    });
    return formatted;
  };
  
  return (
    <div className="unstake-container">
      <div className="unstake-content">
        <div className="unstake-card">
          <h1 className="unstake-title">Unstake Tokens</h1>
          
          {isLoading ? (
            <div className="loading-state">Loading...</div>
          ) : !accountAddress ? (
            <div className="connect-wallet-message">Please connect your wallet first</div>
          ) : !optInStatus.isOptedIn ? (
            <div className="opt-in-section">
              <p className="opt-in-message">You need to opt in to the staking application first</p>
              <button
                onClick={() => void handleOptIn()}
                disabled={isProcessing || optInStatus.isChecking}
                className={`opt-in-button ${isProcessing ? 'processing' : ''}`}
              >
                {isProcessing ? 'Processing...' : 'Opt In to Staking'}
              </button>
            </div>
          ) : (
            <>
              <div className="info-row">
                <span className="info-label">Staked Amount:</span>
                <span className="info-value">{formatAmount(stakeInfo.stakedAmount)}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Pending Rewards:</span>
                <span className="info-value">{formatAmount(stakeInfo.pendingRewards)}</span>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                void handleUnstake();
              }}>
                <div className="input-container">
                  <input
                    type="text"
                    value={withdrawAmount}
                    onChange={handleInputChange}
                    placeholder="Amount to unstake"
                    disabled={isProcessing}
                    className="unstake-input"
                  />
                  <button
                    type="button"
                    className="max-button"
                    onClick={() => setWithdrawAmount(formatAmount(stakeInfo.stakedAmount))}
                    disabled={isProcessing}
                  >
                    MAX
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || !withdrawAmount || parseFloat(withdrawAmount) <= 0}
                  className={`unstake-button ${isProcessing ? 'processing' : ''}`}
                >
                  {isProcessing 
                    ? 'Processing...' 
                    : !withdrawAmount
                    ? 'Enter amount to unstake'
                    : 'Unstake'}
                </button>
              </form>
            </>
          )}

          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </div>
  );
}