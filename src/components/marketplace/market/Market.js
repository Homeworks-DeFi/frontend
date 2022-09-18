import React from "react";
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
          <button className="viewdetails">View details</button>
        </div>
      </div>
    </div>
  );
}
