import React, { Component } from "react";
import { Link } from '@reach/router'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <Link className="footer-link hide-desktop"
              to="/"
            >
              <img src="/terrament-logo-text-white.png" alt="Terrament logo" />
          </Link>
        </div>
        <div className="footer-center hide-mobile">
          <Link className="footer-link"
              to="/"
            >
              <img src="/terrament-logo-text-white.png" alt="Terrament logo" />
          </Link>
        </div>
        <div className="footer-right">
          <a className="footer-link"
              href="https://twitter.com/terrament"
              target="_blank" rel="noopener noreferrer"
            >
              <span className="menu-item__icon icon-twitter"></span>
          </a>
          <a className="footer-link"
              href="mailto:eric@terramenthq.com?subject=Hello"
              target="_blank" rel="noopener noreferrer"
            >
              <span className="menu-item__icon icon-mail"></span>
          </a>
        </div>
      </div>
    );
  }
}