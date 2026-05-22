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
              <img src="/terrament-logo-2026.svg" alt="Terrament logo" />
          </Link>
        </div>
        <div className="footer-center hide-mobile">
          <Link className="footer-link"
              to="/"
            >
              <img src="/terrament-logo-2026.svg" alt="Terrament logo" />
          </Link>
        </div>
        <div className="footer-right">
          <a className="footer-link"
              href="https://www.linkedin.com/company/30730030/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Terrament on LinkedIn"
            >
              <span className="icon-linkedin-wrap" aria-hidden="true">
                <svg className="icon-linkedin-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
                  <rect width="24" height="24" rx="4" fill="#fff" />
                </svg>
                <svg className="menu-item__icon icon-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
          </a>
          <a className="footer-link"
              href="https://terrament.substack.com/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Terrament on Substack"
            >
              <span className="menu-item__icon icon-substack" aria-hidden="true"></span>
          </a>
          <a className="footer-link"
              href="mailto:hello@terramenthq.com?subject=Hello"
              target="_blank" rel="noopener noreferrer"
              aria-label="Email Terrament"
            >
              <span className="menu-item__icon icon-mail" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    );
  }
}