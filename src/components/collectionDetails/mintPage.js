import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";
import MintNFT from "../../components/collectionDetails/CollectionDetails";

function Mint() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <header className="page-header">
        <Header />
      </header>
      <section className="mint">
        <details />
      </section>
      <div className="section-seperater right"></div>
      <footer className="page-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Mint;
