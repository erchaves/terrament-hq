import React from 'react';
import Navbar from "../Navbar";
import VideoComp from "../VideoComp";
import { Link } from '@reach/router'

import './index.scss';

const videoBgShort = '/video-bg-short.jpg';

class Uphs extends React.Component {
  render() {
    return (
      <div className={`page page-uphs`}>
        <Link className="header-logo"
          to="/"
        >
          <img src="/terrament-logo-white.png" alt="Terrament logo" />
        </Link>

        <Navbar/>

        <div className="page-screen">
          <div className="screen-content screen-content-above-fold-short">
            <img className="img-background"
              src={videoBgShort} alt="Terrament energy storage background image" />
          </div>
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                Underground Pumped Hydro Storage
              </h2>
              <p>
                Terrament is building low-cost, high-scale energy storage using gravity batteries.
              </p>
              <p>
                Our patent pending design uses modular, solid-mass weights deployed deep underground. This design was largely inspired and informed by a different design which uses water. This technology is called Underground Pumped Hydro Storage, or UPHS.
              </p>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Underground Pumped Hydro Storage
              </h2>
              <p>
                xxx
              </p>

              <div className="media-wrap">
                <img className="pnl-report-diagram" src="/pnl-report-diagram-2.png" alt="A UPHS design from a U.S. Gov Report" />
                <span className="caption">
                  UPHS design from a U.S. DOE report. See key research below.
                </span>
              </div>
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

export default Uphs;
