import React from 'react';
import Navbar from "../Navbar";
import Section from "../Section";
import { Link } from "react-scroll";

import './index.scss';

const hashes = [
  '#home',
  '#about',
  '#contact',
];

const onLoad = () => {
  // alert('test');
};

class Home extends React.Component {
  render() {
    return (
      <div className={`page page-home`}>
        <Navbar/>

        <Section
          name="home"
          id="home"
        >
          <div className="screen-content screen-content-dark">
            <div className="h1-wrap">
              <h1 className="h1">
                Terr
                <span className="bullet" />
                a
                <span className="bullet" />
                ment
              </h1>

              <h2 className="h2">
                Solving our trillion-dollar energy storage crisis
              </h2>
            </div>
            <div className="footer">
              <div className="footer-inner">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  <img src="/logo-white.png" alt="Terrament logo" />
                </Link>
              </div>
            </div>
          </div>
        </Section>
        <Section
          name="about"
          id="about"
        >
          <div className="screen-content screen-content-light">
            <h2 className="h2">
              About Terrament
            </h2>

            <div className="content-section">
              <p>
                Terrament is an energy startup ready to solve our trillion-dollar energy storage crisis. <br/>
              </p>
              <p>
                We are building large scale grid energy storage using Underground Pumped Storage, or UPHS. We estimate UPHS to be 3-15 times cheaper than lithium ion over a 40 year <a href="https://en.wikipedia.org/wiki/Cost_of_electricity_by_source" target="_blank" rel="noopener noreferrer">LCOE</a>.
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Links
              </h3>
              <ul className="info-link-list">
                <li className="info-link">
                  <a href="https://github.com/syllable-hq/uphs-feasibility-study" target="_blank" rel="noopener noreferrer">
                    Feasibility study
                  </a>: &nbsp;
                  <span>
                    Our feasibility report about Underground Pumped Storage.
                  </span>
                </li>
                <li className="info-link">
                  <a href="https://www.scribd.com/embeds/427763238/content?start_page=1&view_mode=slideshow" target="_blank" rel="noopener noreferrer">
                    Pitch deck
                  </a>: &nbsp;
                  <span>
                    Our pitch deck (draft). This is not yet intended for investors. Its purpose is to find a civil engineer co-founder. Interested? <a href="mailto:hello@terramenthq.com" target="_blank" rel="noopener noreferrer">Contact us</a>.
                  </span>
                </li>
              </ul>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Key Research
              </h3>
              <ul className="info-link-list">
                <li className="info-link">
                  <a href="https://www.osti.gov/biblio/6517343" target="_blank" rel="noopener noreferrer">
                    UPHS Report (U.S. Department of Energy)
                  </a>: &nbsp;
                  <span>
                    A U.S. DOE report from 1984 which demonstrates that Underground Pumped Storage is feasible and cost effective.
                  </span>
                </li>
                <li className="info-link">
                  <a href="https://www.sdcwa.org/sites/default/files/White%20Paper%20-%20Pumped%20Energy%20Storage%20V.16.pdf" target="_blank" rel="noopener noreferrer">
                    Pumped Energy Storage Report (San Diego County Research)
                  </a>: &nbsp;
                  <span>
                    The San Diego County Water Authority demonstrates that pumped hydro storage is cheaper than lithium ion.
                  </span>
                </li>
              </ul>
            </div>
            <div className="content-section">
              <p>
                Terrament is currently unfunded and sponsored by <a href="https://www.syllablehq.com" target="_blank" rel="noopener noreferrer">
                  Syllable Technology and Design
                </a>.
              </p>
            </div>
          </div>
          <div className="footer">
            <div className="footer-inner">
              <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  <img src="/logo.png" alt="Terrament logo" />
                </Link>
            </div>
          </div>
        </Section>
        <Section
          name="contact"
          id="contact"
        >
          <div className="screen-content screen-content-dark">
            <h2 className="h2">
              Contact Us
            </h2>

            <p>
              Got questions or feedback? Please <a href="mailto:hello@terramenthq.com" target="_blank" rel="noopener noreferrer">email us</a>.
            </p>
            <p>
              Terrament is currently seeking a civil engineer co-founder to join our team. <br/>Any introductions are greatly appreciated. See our <a href="https://www.scribd.com/embeds/427763238/content?start_page=1&view_mode=slideshow" target="_blank" rel="noopener noreferrer">pitch deck</a> for more information.
            </p>
            <div className="footer">
              <div className="footer-inner">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  <img src="/logo-white.png" alt="Terrament logo" />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Home;
