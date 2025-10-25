import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { PeraWalletConnect } from '@perawallet/connect';
import Stake from './pages/Stake';
import Unstake from './pages/Unstake';
import Claim from './pages/Claim';

// Initialize the PeraWallet connector
const peraWallet = new PeraWalletConnect();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
  color: #000;
`;

const Header = styled.header`
  height: 64px;
  padding: 0 24px;
  z-index: 20;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-self: center;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 24px;
`;

const NavLink = styled(Link)<{ active: boolean }>`
  color: ${props => props.active ? '#000' : '#666'};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  &:hover {
    color: #000;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: inherit;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const ConnectButton = styled.button`
  min-height: 32px;
  border-radius: 8px;
  background-color: rgb(24, 24, 24);
  color: white;
  padding: 0 8px;
  display: flex;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  height: 32px;
  align-self: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;



const App: React.FC = () => {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const location = useLocation();
  
  const handleConnectWalletClick = async () => {
    try {
      const newAccounts = await peraWallet.connect();
      if (newAccounts && newAccounts.length > 0) {
        setAccountAddress(newAccounts[0]);
      }
    } catch (error) {
      console.error('Error connecting to Pera Wallet:', error);
    }
  };

  const handleDisconnectWalletClick = async () => {
    try {
      await peraWallet.disconnect();
      setAccountAddress(null);
    } catch (error) {
      console.error('Error disconnecting from Pera Wallet:', error);
    }
  };

  useEffect(() => {
    // Reconnect to session when the page loads
    peraWallet.reconnectSession()
      .then((accounts) => {
        if (accounts && accounts.length > 0) {
          setAccountAddress(accounts[0]);
        }
      })
      .catch(error => {
        console.error('Error reconnecting session:', error);
      });

    // Setup connection listener
    const handleConnect = (error: Error | null, payload: { accounts: string[] }) => {
      if (error) return;
      if (payload.accounts.length > 0) {
        setAccountAddress(payload.accounts[0]);
      }
    };

    // Setup disconnection listener
    const handleDisconnect = (error: Error | null) => {
      if (error) return;
      setAccountAddress(null);
    };

    if (peraWallet.connector) {
      peraWallet.connector.on('connect', handleConnect);
      peraWallet.connector.on('disconnect', handleDisconnect);
    }

    return () => {
      if (peraWallet.connector) {
        peraWallet.connector.off('connect');
        peraWallet.connector.off('disconnect');
      }
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <Container>
      <Header>
        <LogoContainer to="/">
          <Logo src="/algo-logo.svg" alt="Algo Logo" />
          <span>AlgoStake</span>
        </LogoContainer>

        <Navigation>
          <NavLink to="/" active={isActive('/')}>Stake</NavLink>
          <NavLink to="/unstake" active={isActive('/unstake')}>Unstake</NavLink>
          <NavLink to="/claim" active={isActive('/claim')}>Claim</NavLink>
        </Navigation>

        <ConnectButton onClick={accountAddress ? handleDisconnectWalletClick : handleConnectWalletClick}>
          {accountAddress ? "Disconnect wallet" : "Connect wallet"}
        </ConnectButton>
      </Header>

      <Routes>
        <Route path="/" element={<Stake />} />
        <Route path="/unstake" element={<Unstake />} />
        <Route path="/claim" element={<Claim />} />
      </Routes>
    </Container>
  );
};

export default App;