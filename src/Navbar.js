import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-white text-center">
        <a
          className="navbar-brand"
          href="/"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          <img
            src={require("./logo.png")}
            alt="logo"
            style={{ width: "230px" }}
          />
        </a>
      </nav>
    );
  }
}

export default Navbar;
