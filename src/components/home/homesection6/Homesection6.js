import React from "react";
import "./homesection6.css";

function Homesection6() {
  return (
    <div className="homesec6">
      <div className="fortgreen">
        <div className="fortgreen--square"></div>
        <div className="fortgreen-text">The FortGreen Collection</div>
        <div className="fortgreen-stock">1 of 500</div>
        <button className="fortgreen-btn">Sold</button>
      </div>
      <div className="homesec6-flex2">
        <div className="greenpoint">
          <div className="greenpoint-square"></div>
          <div className="greenpoint-text">
            The Greenpoint Collection
            <div className="greenpoint-stock">1 of 250</div>
            <button className="greenpoint-btn">Available</button>
          </div>
        </div>
        <div className="williamsburg">
          <div className="williamsburg-square"></div>
          <div className="williamsburg-text">
            The Williamsburg Collection
            <div className="williamsburg-stock">1 of 250</div>
            <button className="williamsburg-btn">Available</button>
          </div>
        </div>
        <div className="brownstone">
          <div className="brownstone-square"></div>
          <div className="brownstone-text">
            The Brownstone Collection
            <div className="brownstone-stock">1 of 250</div>
            <button className="brownstone-btn">Available</button>
          </div>
        </div>
      </div>
      <div className="topcollections-div">
        <div className="topcollection-text">TOP COLLECTIONS SOLD OVER</div>
        <span className="last7days-text">Last 7 days</span>
        <ol className="topcollections-list">
          <li><div className="circle1"></div>
            <div className="greenpoint2">Greenpoint Collection<div className="greenpoint2-flex">
            <div className="greenpoint2-amt">250 items</div>
            <div className="greenpoint2-percent">+28.37%</div>
            </div>
              
            </div>
          </li>
          <li>
          <div className="circle1"></div>
            <div className="greenpoint2">Greenpoint Collection<div className="greenpoint2-flex">
            <div className="greenpoint2-amt">250 items</div>
            <div className="greenpoint2-percent">+28.37%</div>
            </div>
              
            </div></li>
          <li>
          <div className="circle1"></div>
            <div className="greenpoint2">Greenpoint Collection<div className="greenpoint2-flex">
            <div className="greenpoint2-amt">250 items</div>
            <div className="greenpoint2-percent">+28.37%</div>
            </div>
              
            </div></li>
          <li>
          <div className="circle1"></div>
            <div className="greenpoint2">Greenpoint Collection<div className="greenpoint2-flex">
            <div className="greenpoint2-amt">250 items</div>
            <div className="greenpoint2-percent">+28.37%</div>
            </div>
              
            </div></li>
          <li>
          <div className="circle1"></div>
            <div className="greenpoint2">Greenpoint Collection<div className="greenpoint2-flex">
            <div className="greenpoint2-amt">250 items</div>
            <div className="greenpoint2-percent">+28.37%</div>
            </div>
              
            </div></li>
        </ol>
      </div>
    </div>
  );
}

export default Homesection6;
