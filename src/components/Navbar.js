import React from "react";
import logo from "../Images/soko-logo 2.png";
import flag from "../Images/united-kingdom.png";

function Navbar() {
  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="" />
      {/* <h1>SokoKonnect</h1> */}
      <div className="items">
        <a href="/">Home</a>
        <a href="/">Category</a>
        <a href="/">Offers</a>
        <a href="/">Help</a>
        <a href="/">About</a>
        <a href="/">Contact Us</a>
      </div>
      <input type="search" name="" id="" placeholder="Search for a product" />
      <img id="flag" src={flag} alt="" />
      <button id="login">Login</button>
    </div>
  );
}

export default Navbar;
