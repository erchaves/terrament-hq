import React, { useState } from 'react'
import { Link } from '@reach/router'
import './index.scss';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <div className="menu">
      <input
        id="main-menu-checkbox"
        type="checkbox"
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      <div className="menu-wrap">
        <label htmlFor="main-menu-checkbox" className="menu-toggle">
          <span className="sr-only">Open main menu</span>
          <span className="menu-btn" aria-hidden="true"></span>
        </label>

        <nav id="main-menu" className="main-menu" aria-expanded={isOpen} aria-label="Main menu">
          <label htmlFor="main-menu-checkbox" className="menu-close menu-toggle">
            <span className="sr-only">Close main menu</span>
            <span className="menu-btn btn-close" aria-hidden="true"></span>
          </label>
          <ul className="menu-ul">
            <li className="menu-li">
              <Link to="/howItWorks" onClick={close}>
                How it Works
              </Link>
            </li>
            <li className="menu-li">
              <Link to="/mission" onClick={close}>
                Our Mission
              </Link>
            </li>
            <li className="menu-li">
              <Link to="/about" onClick={close}>
                Company
              </Link>
            </li>
            <li className="menu-li">
              <Link to="/contact" onClick={close}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
