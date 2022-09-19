import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <nav className="nav">
        <span className="sitename">HOMEWORKS</span>
        <ul className="nav-items">
          <Link to="/marketplace">
            <li className="metaverse">Metaverse NFT Collections</li>
          </Link>
          <li>Loan Seeker</li>
          <li>Investor</li>
          <li>
            {isConnected ? (
              <p className="info">🎉 Connected Successfully</p>
            ) : (
              <button className="walletconnect-btn" onClick={connectWallet}>
                Connect
              </button>
            )}
          </li>
          <li>
            <Link to="/login">
              <button className="header__signinIcon">Sign In</button>
            </Link>
          </li>
        </ul>
      </nav>
      {haveMetamask ? (
        <div className="App-header">
          {isConnected ? (
            <div className="">
              <div
                className="float-right text-success mx-5"
                style={{ fontSize: "13px", float: "right" }}
              >
                <p>
                  Wallet Address: {accountAddress.slice(0, 4)}...
                  {accountAddress.slice(38, 42)}
                </p>
              </div>
            </div>
          ) : (
            <img src="" className="App-logo" alt="logo" />
          )}
        </div>
      ) : (
        <div className="text-warning mx-5">
          <p className="" style={{ fontSize: "13px", float: "right" }}>
            Please Install MataMask
          </p>
        </div>
      )}
    </header>
  );
}
