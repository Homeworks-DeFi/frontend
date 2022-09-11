import { useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Homesection1 from "./homesection1/Homesection1";
import Homesection2 from "./homesection2/Homesection2";
import Homesection3 from "./homesection3/Homesection3";

function Home() {


  return (
    <div className="App">
      <Header />
      <Homesection1 />
      <Homesection2 />
      <Homesection3 />
      <Footer />
    </div>
  );
}

export default Home;
