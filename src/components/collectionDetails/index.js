import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

import Collection1 from "../../collection1.json";

const NftImage = "/src/assets/collection 1.jpg";

const NFTAddress = "0x7773ce12a9561162a6d19aba28d1708bb180c21c";
const NFTSaleAddress = "0x7773ce12a9561162a6d19aba28d1708bb180c21c";

class MintNFT extends React.Component {
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
    if (mintNum > 50) {
      mintNum = 50;
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
            infuraId: "2F220Wofbtcac07qIG9wXbc7qWE",
          },
        },
        walletlink: {
          package: WalletLink,
          options: {
            appName: "Homeworks",
            infuraId: "2F220Wofbtcac07qIG9wXbc7qWE",
            rpc: "",
            chainId: 80001,
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
        if (chainId !== 0x13881) {
          // alert("Please change the network to rinkby");
          return;
        }
        this.setState({ mintState: false });

        const signer = provider.getSigner();
        const DiversifyNFTContract = new ethers.Contract(
          NFTAddress,
          Collection1.abi,
          signer
        );
        const DiversifyNFTSalesContract = new ethers.Contract(
          NFTSaleAddress,
          Collection1.abi,
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

  render() {
    return (
      <Container>
        <div className="title text-center">
          <div
            className="title-big splitAnim"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            NFT Mint
          </div>
          <h2 className="splitAnim" data-aos="fade-up" data-aos-duration="2000">
            NFT Mint
          </h2>
        </div>
        <div
          className="nftmint-list"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Row className="mint-row">
            <Col lg={5}>
              <div
                className="mint-image"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img src={NftImage} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col lg={1}></Col>
            <Col lg={3} className="mint-col">
              <div className="mint-amount-col">
                <Button
                  variant="success"
                  className="mint-number-button"
                  onClick={this.subMintNumber}
                >
                  {" "}
                  -{" "}
                </Button>
                <input
                  className="mint-amount-input"
                  type="number"
                  pattern="[0-9]*"
                  value={this.state.value}
                  min={1}
                  disabled
                />
                <Button
                  variant="success"
                  className="mint-number-button"
                  onClick={this.addMintNumber}
                >
                  {" "}
                  +{" "}
                </Button>
              </div>
            </Col>
            <Col lg={3} className="mint-col" style={{ marginBottom: "20px" }}>
              <Button
                variant="success"
                onClick={this.mintNFT}
                disabled={!this.state.mintState}
              >
                Mint Now
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default MintNFT;
