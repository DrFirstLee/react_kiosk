import React, { Component } from "react";
import HeaderImg from "../components/HeaderImg";
import HeaderMenu from "../components/HeaderMenu";

class Header extends Component {

  render() {
    return (
      <div>
        <HeaderImg />
        <HeaderMenu/>
      </div>
    );
  }
}

export default Header;
