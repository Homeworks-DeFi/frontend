import React from "react";
import './header.css'
//import SearchIcon from '@mui/icons-material/Search';

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
          <button className="header__searchIcon">search</button>
        </li>
      </ul>
    </nav>
  );
}


