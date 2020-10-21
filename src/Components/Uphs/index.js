import React from 'react';
import Navbar from "../Navbar";
import VideoComp from "../VideoComp";
import Footer from "../Footer";
import { Link } from '@reach/router'

import './index.scss';

const videoBgShort = '/video-bg-short.jpg';
const videoMp4Bg = 'homepage-bg-uphs.mp4';
const videoPosterBg = 'homepage-bg.jpg';

class Uphs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
                Terrament was born out of curiosity and a growing concern about climate change. It started as a <a href="https://blog.syllablehq.com/underground-pumped-hydroelectric-storage-a-feasibility-study" target="_blank" rel="noopener noreferrer">blog post</a> about an old but neglected technology called Underground Pumped Hydro Storage, or UPHS. Over the summer of 2019, my fascination for this technology escalated into a 70 page <a href="https://github.com/syllable-hq/uphs-feasibility-study/raw/master/report.pdf">feasibility study of UPHS</a>.
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
                Drawing from US government research, our UPHS white paper explained why the “UPHS concept is technically feasible and economically viable.” Further, we contextualized this past research to demonstrate that building a UHPS installation today would be more feasible than ever due to low interest rates, improved mining technology, and an accelerating demand for large-scale energy storage driven by climate change. We estimated that over a 20-40 year project lifespan, UPHS could be an order of magnitude cheaper than Li-ion battery technology built today.
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
                Although our long term road map does leave room to explore UPHS, we do not have any immediate plans to focus on the technology. Instead, we're fully focused on our own solid-mass gravity storage design inspired by both UPHS and other types of gravity storage.
              </p>
              <p>
                Our Terrament energy storage design gains the height benefits of UPHS while also leveraging the modularity of solid-mass gravity storage. Learn more about our alpha design on our <a href="/">home page</a>.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Uphs;
