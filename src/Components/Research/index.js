import React from 'react';
import Navbar from "../Navbar";
import VideoComp from "../VideoComp";
import Footer from "../Footer";
import { Link } from '@reach/router'

import './index.scss';

const videoBgShort = '/video-bg-short.jpg';
const videoMp4Bg = 'homepage-bg-uphs.mp4';
const videoPosterBg = 'homepage-bg.jpg';

class Research extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={`page page-research`}>
        <Navbar/>

        <div className="page-screen">
          <div className="screen-content screen-content-above-fold-short">
            <img className="img-background"
              src={videoBgShort} alt="Terrament energy storage background image" />
          </div>
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                Research and Case Studies
              </h2>
              <p>
                Terrament's early research into our solid-mass, modular gravity storage was largely inspired by the concept of underground pumped hydro storage, or UPHS. Terrament is very similar to UPHS. Although we don't use water, we still move heavy weight up and down a deep underground shaft to harness the power of gravitational potential energy.
              </p>
              <p>
               When Terrament first started in 2019, we found our greatest inspiration from a research paper about underground pumped hydro written in 1984. This <a href="https://doi.org/10.2172/6517343" target="_blank" rel="noopener noreferrer">U.S. DOE report about the feasibility of Underground Pumped Hydro Storage</a> showed that it was “technically feasible and economically viable” to dig deep underground to push the height limits of gravity storage.
              </p>
              <p>
                Before Terrament decided to shift our focus entirely to solid mass instead of water, we wrote a <a href="https://github.com/syllable-hq/uphs-feasibility-study/raw/master/report.pdf" target="_blank" rel="noopener noreferrer">70-page white paper about UPHS</a> to help the public understand this fantastic technology. Although UPHS has still never been built, this research is still very relevant for demonstrating the promise of using mining and excavation technology for underground gravity storage.
              </p>
              <p>
                Terrament believes that our solid-mass design holds even more promise than UPHS. By using solid mass, we gain greater density than water which can further offset the cost of excavation.
              </p>
              <p>
                Learn more on our <a href="/">home page</a>.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Research;
