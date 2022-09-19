import React from "react";
import { Link } from "react-router-dom";
import "./collectionDetails.css";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";

import nft1 from "../../assets/624c8c6d91d58f79a0e4d49b.jpg";

export default function Details() {
  return (
    <div>
      <Header />
      <div className="nft-details">
        <img src={nft1} className="detail-pic" alt="nftimages" />
        <div className="details-info">
        <span className="detail-name">The Greenepoint Collection</span>
        <div className="detail-amt">250 Items</div>
        <div>
          <span className="detail-avail">(250 Sold, 250 Available)</span>
          <Link to="/details">
            <button className="mintbtn">MInt</button>
          </Link>
        </div></div>
        
      </div>
      <Footer />
    </div>
  );
}