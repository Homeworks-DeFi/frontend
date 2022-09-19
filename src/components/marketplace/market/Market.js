import React from "react";
import { Link } from "react-router-dom";
import "./market.css";

export default function Market(props) {
  return (
    <div className="market">
      <img src={props.img} className="nft-pic" alt="nftimages" />
      <div className="marketplaceinfo">
        <span className="nft-name">{props.name}</span>
        <div className="nft-amt">{props.number}</div>
        <div>
          <span className="nft-avail">{props.available}</span>
          <Link to="/details">
            <button className="viewdetails">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
