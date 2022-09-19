import React from "react";
import Image from "../../assets/rect1.png";

const NftCard = ({ collectionName, itemsNumber, sold, available }) => {
  return (
    <div
      className="card mx-auto mt-3 border-0 pb-2"
      style={{ width: "18rem", backgroundColor: "#fff", borderRadius: "15px" }}
    >
      <img
        className="card-img-top mx-auto mt-2"
        src={Image}
        alt="NFT"
        style={{ width: "17rem", height: "12rem" }}
      />
      <div className="mt-2 nft-card-body">
        <p className="mx-2">
          <strong>{collectionName || "The Fort Green Collection"}</strong>
        </p>
      </div>
      <div className="row pt-0 pl-1">
        <div className="col-8">
          <div className="card-body px-1 mx-0">
            <p className="lh1">
              <span className="nft-name" style={{ fontSize: "14px" }}>
                {`${itemsNumber} Items`}
              </span>{" "}
              <br />
              <span className="nft-name" style={{ fontSize: "12px" }}>
                <strong>{`${sold} Sold, ${available} Available`}</strong>
              </span>
            </p>
          </div>
        </div>
        <div className="col-4 px-0 mx-0 pt-4">
          <div
            className="btn py-1 text-light buy-button px-1"
            style={{
              backgroundColor: "#C115EC",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
