import React from 'react'
import './index.scss';

export default () => (
  <div className="hamburger-menu">
    <input id="main-menu-checkbox" type="checkbox" />
    <div className="menu-wrap">
      <label for="main-menu-checkbox" className="menu-toggle">
        <span className="sr-only">Open main menu</span>
        <span className="menu-btn" aria-hidden="true"></span>
      </label>

      <nav id="main-menu" role="navigation" className="main-menu" aria-expanded="false" aria-label="Main menu">
        <label for="main-menu-checkbox"className="menu-close">
          <span className="sr-only">Close main menu</span>
          <span className="menu-btn btn-close" aria-hidden="true"></span>
        </label>
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <label for="main-menu-checkbox"
         className="backdrop"
         tabindex="-1"
         aria-hidden="true" hidden></label>
    </div>
  </div>
);
