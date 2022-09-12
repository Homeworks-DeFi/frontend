import React from "react";
import "./homesection5.css";

function Homesection5() {
  return (
    <div className="homesec5">
      <div className="howitworks">
        <h1>How it works</h1>
        New here as a loan seeker? Read the following steps to understand how
        the system works and help you get started
      </div>
      <div className="homesteps">
        <div className="step1">
          <h2>Step 1</h2>Complete online application
        </div>
        <div className="step2">
          <h2>Step 2</h2>Submit documentation
        </div>
        <div className="step3">
          <h2>Step 3</h2>Wait for Approval
        </div>
        <div className="step4">
          <h2>Step 4</h2>Update important details in your dashboard
        </div>
        <button className="signin-btn">Sign In</button>
      </div>
    </div>
  );
}

export default Homesection5;
