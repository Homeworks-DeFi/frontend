import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <table>
        <tr>
          <th>Marketplace</th>
          <th>About Us</th>
          <th>More</th>
        </tr>
        <tr>
          <td>NFTs</td>
          <td>Team</td>
          <td>Terms & Conditions</td>
        </tr>
        <tr>
          <td>MetaVerse</td>
          <td>Services</td>
          <td>Privacy Policy</td>
        </tr>
        <tr>
          <td>Polygon</td>
          <td>FAQs</td>
          <td>Web3</td>
        </tr>
        <tr>
          <td>FileCoin</td>
          <td>Offers</td>
          <td>Contact</td>
        </tr>
      </table>
      <button className="chatfooter-btn">Chat with us</button>
    </footer>
  );
}

export default Footer;
