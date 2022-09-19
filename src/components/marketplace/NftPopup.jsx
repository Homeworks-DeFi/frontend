import React from "react";
import Image from "../../assets/rect1.png";

const NftPopup = () => {
  return (
    <div
      className="card mx-auto mt-3 border-0 pb-2"
      style={{ width: "18rem", backgroundColor: "#fff", borderRadius: "15px" }}
    >
      <img
        className="card-img-top mx-auto my-2"
        src={Image}
        alt="NFT"
        style={{ width: "17rem", height: "12rem" }}
      />
      <div className="row pl-1">
        <div className="col-7">
          <div className="card-body px-1 mx-0" style={{ fontSize: "14px" }}>
            <p className="lh-sm">
              <span className="nft-name">
                <strong>The Fort Green</strong>
              </span>{" "}
              <br />
              <span className="nft-name">
                <strong>Collection</strong> (Available)
              </span>
            </p>
            <p className="">
              <span className="">NFT PRICE</span> <br />
              <span className="">($$$)</span>
            </p>
          </div>
        </div>
        <div className="col-5 px-1">
          <div className="card-body px-0 mx-0">
            <p className="lh1 text-muted" style={{ fontSize: "12px" }}>
              <span>Estimated Monthly</span> <br />
              <span>Income ($#)</span>
            </p>
            <p className="lh1 text-muted" style={{ fontSize: "12px" }}>
              <span>Estimated value in</span> <br />
              <span>36 months ($#)</span>
            </p>
          </div>
          <div className="">
            <div
              className="btn py-1 text-light buy-button"
              style={{
                backgroundColor: "#C115EC",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              BUY NOW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftPopup;
