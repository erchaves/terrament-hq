import React from 'react';
import Navbar from "../Navbar";
import VideoBg from "../VideoBg";
import { Link } from "react-scroll";

import './index.scss';

const videoPoster = 'homepage-bg.jpg';
const videoMp4 = 'homepage-bg.mp4';

class Home extends React.Component {
  render() {
    return (
      <div className={`page page-home`}>
        <div className="header-logo">
          <img src="/terrament-logo-white.png" alt="Terrament logo" />
        </div>

        <Navbar/>

        <div className="page-screen">
          <div className="screen-content screen-content-above-fold">
            <VideoBg
              poster={videoPoster}
            >
              <source src={videoMp4} type="video/mp4" />
            </VideoBg>

            <div className="h1-wrap">
              <h1 className="h1">
                <img src="/terrament-logo-text-white.svg" alt="Terrament logo" />
              </h1>
              <h2 className="h2">
                Radically Scalable Energy Storage
              </h2>
            </div>
          </div>
        </div>
        <div className="page-screen">
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                Meet Terrament
              </h2>

              <p>
                The threat of climate change has sparked an energy revolution; wind and solar technologies are poised to replace fossil fuels. This transition is urgent. But it will stall without a key ingredient: energy storage.
              </p>
              <p>
                Terrament is building low-cost, high-scale energy storage using gravity batteries lowered deep underground.
              </p>
            </div>

            <div className="content-section">
              <h2 className="h2">
                Terrament’s Pitch Deck
              </h2>

              <div class="responsive-google-slides">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vRAx_zGoWME9GspEBwb6Ss3zX7dRh74G36690nuYKGFbphRtIQ88V8MjpUqKEhvnK8rjH4VeqI_r5ge/embed?start=false&loop=false&delayms=10000"
                  frameborder="0"
                  allowfullscreen="true"
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true">
                </iframe>
              </div>

              <p>
                Terrament’s patent-pending design achieves breakthrough efficiency by maximizing the two simple principals of gravity storage: height and weight.
              </p>

              <p>
                1: We leverage 10 times more height than above-ground solutions. We achieve this by digging a mile deep into bedrock (or re-using abandoned mine shafts).
              </p>

              <p>
                2: We leverage 100% of our volume - a full mile of densely packed weight. We achieve this using a modular design of self-supporting autonomous units.
              </p>

              <p>
                Our solution is low-risk, employing only well-established mining technologies, not unproven, risky chemical technologies.
              </p>
            </div>

            <div className="content-section">
              <h2 className="h2">
                Terrament’s Alpha Design
              </h2>

              <p>
                Our alpha design is in very early development. The 3D rendering below is merely an approximation to communicate our design concept.
              </p>
            </div>

            <div className="content-section">
              <h2 className="h2">
                Learn More
              </h2>
              <p>
                Terrament is a pre-funding startup based in Brooklyn, NY. We are currently seeking our first round of investment.
                <Link
                  to="/"
                >
                  About us
                </Link>
              </p>
              <p>
                Our long term strategy includes a type of energy storage called underground pumped hydro storage, or UPHS. Learn more:
                <Link
                  to="/"
                >
                  UPHS Research
                </Link>
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

export default Home;
