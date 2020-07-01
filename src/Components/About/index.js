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
                About Terrament
              </h2>
              <p>
                Terrament is a renewable energy company building low-cost, high-scale energy storage. Our patent-pending design for underground gravity batteries will lead the multi-billion dollar energy storage market.
              </p>

              <p>
                Terrament's gravity storage design was inspired by a related technology called Underground Pumped Hydro Storage, or UPHS. In fact, the company was born out of a research project exploring the feasibility UPHS. By leveraging our UPHS research to spark discussions with industry experts and validate our market assumptions, we proved that Terrament's concept was not just viable, it was urgent needed.
              </p>
              <p>
                Under the threat of a destablized climate, demand for cheap, scaleable energy storage has exploded. And no one has yet developed a satisfactory solution. The market is wide open, and Terrament is already piquing early interest from experts, advisors, and investors.
              </p>
              <p>
                Terrament, LLC was founded at the start of 2020 and holds a provisional patent for our innovative approach to underground energy storage.
              </p>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Our Team
              </h2>
              <div className="p-wrap">
                <img src="/eric-chaves-profile-pic.jpg" className="inline-img" />
                <p>
                  Terrament was founded by Eric Chaves, a technologist and entrepreneur in Brooklyn, New York. Eric is a software developer and designer. He also has a background in architecture, and product design.
                </p>
              </div>
              <p>
                Terrament, LLC was founded at the start of 2020 and holds a provisional patent for our innovative approach to underground energy storage. The company was founded by Eric Chaves, a technologist and entrepreneur in Brooklyn, New York. Eric is a software developer and designer. He also has a background in architecture, and product design.
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
