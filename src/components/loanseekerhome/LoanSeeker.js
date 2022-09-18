import React from "react";
import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import "./loanSeeker.css";
import Homesection3 from "./loanseekersec/Homesection3";

export default function LoanSeeker(){
    return(
        <div>
            <Header />
            <Homesection3 />
            <Footer />
        </div>
    );
}