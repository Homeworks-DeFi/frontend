import React from "react";
import { Link } from "react-router-dom";
import "./collectionDetails.css";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

import DiversifyNFT from "../../contracts/DiversifyNFT.json";
import DiversifyNFTSales from "../../contracts/DiversifyNFTSales.json";
import nft1 from "../../assets/624c8c6d91d58f79a0e4d49b.jpg";

const NFTAddress = "0xCc48a3ECB6c671eb4eEBBeBE000802D4C15796f6";
const NFTSaleAddress = "0xB48bceaAF3bF8aB9C5517518aF0dCc21F81790cE";

class details extends React.Component {
    constructor(props) {
      super(props);
      this.addMintNumber = this.addMintNumber.bind(this);
      this.subMintNumber = this.subMintNumber.bind(this);
      // Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
      this.state = {
        value: 3,
        mintState: true,
      };
    }
  
    addMintNumber(e) {
      let mintNum = this.state.value + 1;
      if (mintNum > 5) {
        mintNum = 5;
      }
      this.setState({ value: mintNum });
    }
  
    subMintNumber(e) {
      let mintNum = this.state.value - 1;
      if (mintNum < 1) {
        mintNum = 1;
      }
      this.setState({ value: mintNum });
    }
  
    mintNFT = async () => {
      const { ethereum } = window;
      if (ethereum) {
        const providerOptions = {
          //   binancechainwallet: {
          //     package: binancechainwallet
          //     },
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: "0bbb45846bdf44d1bcbe6275327619ad",
            },
          },
          walletlink: {
            package: WalletLink,
            options: {
              appName: "Hip Ass Ape Minter",
              infuraId: "0bbb45846bdf44d1bcbe6275327619ad",
              rpc: "",
              chainId: 4,
              appLogoUrl: null,
              darkMode: true,
            },
          },
        };
  
        var provider = new ethers.providers.Web3Provider(ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          // var account = accounts[0];
          const { chainId } = await provider.getNetwork();
          if (chainId !== 0x4) {
            // alert("Please change the network to rinkby");
            return;
          }
          this.setState({ mintState: false });
  
          const signer = provider.getSigner();
          const DiversifyNFTContract = new ethers.Contract(
            NFTAddress,
            DiversifyNFT.abi,
            signer
          );
          const DiversifyNFTSalesContract = new ethers.Contract(
            NFTSaleAddress,
            DiversifyNFTSales.abi,
            signer
          );
  
          const result = await DiversifyNFTContract.totalSupply();
          const totalSupply = result.toNumber();
          // console.log("totalSupply : ", totalSupply);
  
          let data = [];
          for (var n = 0; n < this.state.value; n++) {
            const tokenID = totalSupply + n;
            const obj = { user: accounts[0], tokenId: tokenID };
            data.push(obj);
          }
          // console.log("mint data : ", data);
  
          const mintFee = await DiversifyNFTSalesContract.fee();
          // console.log("fee : ", ethers.utils.formatEther(mintFee));
  
          await DiversifyNFTSalesContract.mint(data, { value: mintFee });
  
          alert("NFt minting successed!");
  
          // const mintResult = await DiversifyNFTSalesContract.minted();
          // console.log("minted : ", mintResult.toNumber());
        } else {
          alert("Please connect the wallet");
        }
      } else {
        alert("Please install Metamask!");
      }
  
      this.setState({ mintState: true });
    };
    render () {
  return (
    <div>
      <div className="nft-details">
        <img src={nft1} className="detail-pic" alt="nftimages" />
        <div className="details-info">
          <span className="detail-name">The Greenepoint Collection</span>
          <div className="detail-amt">250 Items</div>
          <div>
            <span className="detail-avail">(250 Sold, 250 Available)</span>
            <Link to="/details">
              <button
                className="mintbtn"
                variant="success"
                onClick={this.mintNFT}
                disabled={!this.state.mintState}
              >
                MInt
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default details;
