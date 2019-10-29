import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav-content" id="navbar">
        <ul className="menu-ul">
          <li className="menu-li">
            <Link
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="menu-li">
            <Link
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          {/*
          <li className="menu-li">
            <a href="https://twitter.com/syllablehq" target="_blank" rel="noopener noreferrer">
              <span className="menu-item__icon icon-twitter"></span>
            </a>
          </li>
          */}
        </ul>
      </nav>
    );
  }
}