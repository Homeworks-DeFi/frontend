import React from "react";
import NftCard from "./NftCard";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";

const MarketPlace = () => {
  return (
    <div className="wrapper bg-light pb-5">
      <Header />
      <div className="row mx-5 mt-4">
        <div className="col">
          <span className="" style={{ fontSize: "24px", fontWeight: "bold" }}>
            METAVERSE NFT COLLECTION
          </span>
        </div>
        <div className="col">
          <div
            className="btn btn-outline py-1 text-light px-4"
            style={{
              backgroundColor: "#C115EC",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              float: "right",
              backgroundColor: "none",
            }}
          >
            <i className="bi bi-search"></i> Search
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around mx-4">
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
      </div>
      <div className="d-flex justify-content-around mx-4">
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
      </div>
      <div className="d-flex justify-content-around mx-4">
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
        <NftCard
          sold={16}
          available={234}
          collectionName="The Fort Green Collection"
          itemsNumber={250}
        />
      </div>

      <Footer />
    </div>
  );
};

export default MarketPlace;
