import React from "react";
import './header.css'
export default function Header() {
  return (
    <nav className="nav">
      <span className="sitename">HOMEWORKS</span>
      <ul className="nav-items">
        <li>Metaverse NFT Collections</li>
        <li>Loan Seeker</li>
        <li>Investor</li>
        <li>
          <button className="walletconnect-btn">Connect Wallet</button>
        </li>
        <li>
          <button>search</button>
        </li>
      </ul>
    </nav>
  );
}


