import 'react-app-polyfill/stable';
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletConnectButton,
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import { Airdrop } from './Airdrop';
import { Balance } from './Balance';
import { SignTransaction } from './SignTransaction';
import { SendSol } from './SendSol';
import { TokenBalance } from './TokenBalance';

//Airdrop 
function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/IA5XqK-rU0LYpFekBWARC-2_lWQNqmFG"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
           <>
            hi there
           </>
           <Airdrop></Airdrop>
           <Balance></Balance>
           <SignTransaction></SignTransaction>
           <SendSol></SendSol>
           <TokenBalance></TokenBalance>
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}

export default App
