import React from "react";
import "./homesection1.css";
import rect1 from "../../../assets/rect1.png"
import rect2 from "../../../assets/rect2.png"
import rect3 from "../../../assets/rect3.png"
function Homesection1() {
  return (
    <div className="homesec1">
      <container>
        <div className="homesec1text1">
          TWO INVESTMENTS, <br></br> ONE NFT.
        </div>
        <div className="homesec1text2">
          Our Investments are innovative, impactful, and high-<br></br>
          yielding. Invest in a metaverse NFT collection today!
        </div>
        <div className="homesec1text3">
          <span>10k+ </span> Metaverse Collections (and more to come)
        </div>
      </container>
      <img src={rect1} className="rectangle1" />
      <img src={rect2} className="rectangle2" />
      <img src={rect3} className="rectangle3" />
    </div>
  );
}

export default Homesection1;
