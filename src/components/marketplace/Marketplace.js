import React from "react";
import "./marketplace.css";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";
import Market from "./market/Market";

function Marketplace() {
  return (
    <div>
      <Header />
      <div className="marketplacecontainer-header">
        <h1 className=".marketplacecontainer-headertext">
          METAVERSE NFT COLLECTIONS
        </h1>
        <button type="input" className="marketplacesearch-btn">Search</button>
      </div>
      <div className="marketplacecontainer">
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <div className="marketplace-text">
          THE BEST MARKETPLACE TO OWN AN NFT COLLECTION!
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Marketplace;
