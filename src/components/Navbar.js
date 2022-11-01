import React from "react";
import logo from "../images/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
    </nav>
  );
}

// export into App.js
export default Navbar;
