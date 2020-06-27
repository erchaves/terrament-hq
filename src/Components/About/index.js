import React from 'react';
import Navbar from "../Navbar";
import VideoComp from "../VideoComp";
import { Link } from '@reach/router'

import './index.scss';

const videoBgShort = '/video-bg-short.jpg';

class About extends React.Component {
  render() {
    return (
      <div className={`page page-about`}>
        <div className="header-logo">
          <img src="/terrament-logo-white.png" alt="Terrament logo" />
        </div>

        <Navbar/>

        <div className="page-screen">
          <div className="screen-content screen-content-above-fold-short">
            <img class="img-background"
              src={videoBgShort} alt="Terrament energy storage background image" />
          </div>
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                About
              </h2>

              <p>
                sdfjdhfkjsdhfkjsdhf
              </p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-inner">
            <Link
                to="/"
              >
                <img src="/terrament-logo-white.png" alt="Terrament logo" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
