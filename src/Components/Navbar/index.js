import React, { useEffect } from "react";
import { Link } from '@reach/router'
import HamburgerMenu from '../HamburgerMenu';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav-content" id="navbar">
      <div className="nav-container">
        <Link className="nav-logo" to="/">
          <img src="/terrament-logo-white.png" alt="Terrament logo" />
        </Link>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
