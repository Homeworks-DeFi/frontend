import React, { useState, useEffect } from "react";
import "./header.css";
//import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };
  return (
    <header className="App-header">
      {haveMetamask ? (
        <div className="App-header">
          {isConnected ? (
            <div className="card">
              <div className="card-row">
                <h3>Wallet Address:</h3>
                <p>
                  {accountAddress.slice(0, 4)}...
                  {accountAddress.slice(38, 42)}
                </p>
              </div>
            </div>
          ): (
            <img src="" className="App-logo" alt="logo" />
          )}
        </div>
      ) : (
        <p>Please Install MataMask</p>
      )}
      <nav className="nav">
        <span className="sitename">HOMEWORKS</span>
        <ul className="nav-items">
          <li>Metaverse NFT Collections</li>
          <li>Loan Seeker</li>
          <li>Investor</li>
          <li >
          {isConnected ? (
            <p className="info">🎉 Connected Successfully</p>
          ) : (
            <button className="walletconnect-btn" onClick={connectWallet}>
              Connect
            </button>
          )}
          </li>
          <li>
            <button className="header__searchIcon">search</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
