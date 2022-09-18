import React from "react";
import "./marketplace.css";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";
import Market from "./market/Market";
import nft1 from "../../assets/624c8c6d91d58f79a0e4d49b.jpg";
import nft2 from "../../assets/european_house_06.jpg";
import nft3 from "../../assets/european_house_08.jpg";
import nft4 from "../../assets/image_001.png";
import nft5 from "../../assets/image_008.png";
import nft6 from "../../assets/image_009.png";
import nft7 from "../../assets/image_0010.png";
import nft8 from "../../assets/image_0011.png";
import nft9 from "../../assets/image_0012.png";
import nft10 from "../../assets/image_0013.png";
import nft11 from "../../assets/image_0014.png";
import nft12 from "../../assets/ny_building_02.jpg";




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
          img={nft1}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft2}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft3}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft4}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft5}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft6}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft7}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft1}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft8}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft9}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft10}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft4}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft11}
          name="The Greenepoint Collection"
          number="250 Items"
          available="(250 Sold, 250 Available)"
        />
        <Market
        img={nft12}
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
