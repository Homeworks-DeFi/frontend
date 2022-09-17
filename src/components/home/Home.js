import React from "react";
import "./home.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Homesection1 from "./homesection1/Homesection1";
import Homesection4 from "./homesection4/Homesection4";
import Homesection5 from "./homesection5/Homesection5";

function Home() {
  return (
    <div className="App">
      <Header />
      <Homesection1 />
      <Homesection4 />
      <Homesection5 />
      
      <Footer />
    </div>
  );
}

export default Home;
