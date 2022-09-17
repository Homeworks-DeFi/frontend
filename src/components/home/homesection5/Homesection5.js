import React from "react";
import { Link } from "react-router-dom";
import "./homesection5.css";
import img1 from "../../../assets/img1.png";

function Homesection5() {
  return (
    <div className="homesec5">
      <div className="howitworks">
        <h1>How it works</h1>
      </div>
      <div className="homesteps">
        <img src={img1} className="steppics" alt="stepsimage" />
      </div>
      <div className="homesec2-flex1">
        JOIN A GROWING GROUP OF INVESTORS BUILDING THEIR FORTUNE IN THE
        METAVERSE
      </div>
      <div className="homesec2">
        <table className="homesec2-flex2">
          <tr>
            <th>LOW BARRIER FOR ENTRY</th>
            <th>SIMPLE, EASY, LOW RISK</th>
          </tr>
          <tr>
            <td>
              Get started with as low as <br></br>$250 today!
            </td>
            <td>
              Purchase fractionalized metaverse
              <br></br>real estate through one of our
              <br></br> exclusive NFT collections
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/marketplace">
                <button className="explorehome-btn">Explore Collections</button>
              </Link>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Homesection5;
