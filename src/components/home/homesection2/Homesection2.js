import React from "react";
import "./homesection2.css";

function Homesection2() {
  return (
    <div className="homesec2">
      <div className="homesec2-flex1">
        JOIN A GROWING GROUP OF INVESTORS BUILDING THEIR FORTUNE IN THE
        METAVERSE
      </div>
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
            <button className="explorehome-btn">Explore Collections</button>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Homesection2;
