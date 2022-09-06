import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';


function App() {

  const [currentAccount, setCurrentAccount] = useState(null);
  const checkWalletIsConnected = () => { 
    const { ethereum } = window;

    if (ethereum) {
      console.log("Make sure you have Metamask installed on your browser")
      return;
    } else {
      console.log("Wallet is connected")
    }

    const accounts = ethereum.request({ method: "eth_accounts"});

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account)
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found")
    }

  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Install Metamask")
    }
   }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }


  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className='main-app'>
      <h1>Home Works</h1>
      <div>
        {connectWalletButton()}
      </div>
    </div>
  )
}

export default App;