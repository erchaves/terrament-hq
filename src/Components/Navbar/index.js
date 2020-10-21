import React, { Component } from "react";
import { Link } from '@reach/router'
import HamburgerMenu from '../HamburgerMenu';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-content" id="navbar">
        <HamburgerMenu />
      </nav>
    );
  }
}
