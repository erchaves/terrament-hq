import React from 'react';
import Navbar from "../Navbar";
import VideoComp from "../VideoComp";
import { Link } from '@reach/router'

import './index.scss';

const videoBgShort = '/video-bg-short.jpg';
const videoMp4Bg = 'homepage-bg-uphs.mp4';
const videoPosterBg = 'homepage-bg.jpg';

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
                Terrament was born out of curiosity and a growing concern about climate change. It started as a blog post about an old but neglected technology called Underground Pumped Hydro Storage, or UPHS. Over the summer of 2019, a fascination for this technology escalated into a 70 page <a href="https://blog.syllablehq.com/underground-pumped-hydroelectric-storage-a-feasibility-study/" target="_blank" rel="noopener noreferrer">feasibility study of UPHS</a>.
              </p>

              <div className="media-wrap">
                <VideoComp
                  wrapperClass="captioned-media"
                  isBackgroundVideo={false}
                  poster={videoPosterBg}
                >
                  <source src={videoMp4Bg} type="video/mp4" />
                </VideoComp>

                <span className="caption">
                  Video collage of technologies related to UPHS
                </span>
              </div>
            </div>
            <div className="content-section">
              <h2 className="h2">
                The Feasibility of UPHS
              </h2>
              <p>
                Pulling from US government research, our study demonstrated that the “UPHS concept is technically feasible and economically viable.” We contextualized research from the 1980s indicating that UHPS was even more feasible today due to factors like low interest rates, improved mining technology, and an accelerating demand for large-scale energy storge driven by climate change. We estimated that UPHS could be an order of magnitude cheaper than Li-ion battery technology for grid scale energy storage over a 20-40 year life span.
              </p>

              <div className="media-wrap">
                <img className="captioned-media" src="/pnl-report-diagram-2.png" alt="A UPHS design from a U.S. Gov Report" />
                <span className="caption">
                  UPHS design from a U.S. DOE report. See UPHS feasibility study for details.
                </span>
              </div>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Terrament and UPHS
              </h2>
              <p>
                While UPHS is included on our long term road map, we do not have any immediate plans to focus on UPHS. We're instead focused a novel design inspired by UPHS as well as other types of gravity storage. Our Terrament energy storage design gains the height benefits of UPHS while also leveraging the modularity of solid-mass gravity storage.
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

export default Uphs;
