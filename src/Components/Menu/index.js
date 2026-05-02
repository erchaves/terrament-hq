import React from 'react'
import { Link } from '@reach/router'
import './index.scss';

export default () => (
  <div className="menu">
    <input id="main-menu-checkbox" type="checkbox" />
    <div className="menu-wrap">
      <label htmlFor="main-menu-checkbox" className="menu-toggle">
        <span className="sr-only">Open main menu</span>
        <span className="menu-btn" aria-hidden="true"></span>
      </label>

      <nav id="main-menu" role="navigation" className="main-menu" aria-expanded="false" aria-label="Main menu">
        <label htmlFor="main-menu-checkbox"className="menu-close menu-toggle">
          <span className="sr-only">Close main menu</span>
          <span className="menu-btn btn-close" aria-hidden="true"></span>
        </label>
        <ul className="menu-ul">
          <li className="menu-li">
            <Link to="/howItWorks" >
              How it Works
            </Link>
          </li>
          <li className="menu-li">
            <Link to="/mission" >
              Our Mission
            </Link>
          </li>
          <li className="menu-li">
            <Link to="/about" >
              Company
            </Link>
          </li>
          <li className="menu-li">
            <Link to="/contact" >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
