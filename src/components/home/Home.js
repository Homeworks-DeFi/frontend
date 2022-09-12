import { useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Homesection1 from "./homesection1/Homesection1";
import Homesection2 from "./homesection2/Homesection2";
import Homesection3 from "./homesection3/Homesection3";
import Homesection4 from "./homesection4/Homesection4";
import Homesection5 from "./homesection5/Homesection5";
import Homesection6 from "./homesection6/Homesection6";

function Home() {


  return (
    <div className="App">
      <Header />
      <Homesection1 />
      <Homesection2 />
      <Homesection3 />
      <Homesection4 />
      <Homesection5 />
      <Homesection6 />
      <Footer />
    </div>
  );
}

export default Home;
