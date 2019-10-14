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
                Ter
                <span className="bullet" />
                ra
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
                Terrament is an energy startup solving our trillion-dollar energy storage crisis. <br/>
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Solution
              </h3>
              <p>
                Terrament's design uses a technology called Underground Pumped Hydro Storage, or UPHS. UPHS is a simple, well-researched technology that can provide scalable energy storage at an affordable cost. We estimate our design to be 3-15 times cheaper than lithium ion storage over a lifetime of forty years.
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Summary
              </h3>
              <p>
                <a href="https://www.scribd.com/embeds/427763238/content?start_page=1&view_mode=slideshow" target="_blank" rel="noopener noreferrer"
                >
                  View our summary deck to learn more
                </a>.
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Why Terrament?
              </h3>
              <p>
                World governments have promised to quit fossil fuels by 2050. But we are not yet on track to meet those promises. <a href="https://www.eto.think.woodmac.com" target="_blank" rel="noopener noreferrer">Research shows</a> that if we don't expand our energy storage capacity, our solar and wind energy markets will stagnate and fail to reach even 25% of the energy market by 2040. This will cause global temperatures to rise over 3°C, a level which will cause catastrophic climate damage. We must do better.
              </p>
              <p>
                We need highly-scalable energy storage, and we need it immediately. Terrament provides a low-risk solution for an affordable cost.
              </p>
            </div>
            <div className="content-section">
              <h3 className="h3">
                Links
              </h3>
              <ul className="info-link-list">
                <li className="info-link">
                  <a href="https://www.scribd.com/embeds/427763238/content?start_page=1&view_mode=slideshow" target="_blank" rel="noopener noreferrer">
                    Pitch deck
                  </a>: &nbsp;
                  <span>
                    Our pitch deck (draft). This is not yet intended for investors. Its purpose is to find a civil engineer co-founder. Interested? <a href="mailto:hello@terramenthq.com" target="_blank" rel="noopener noreferrer">Contact us</a>.
                  </span>
                </li>
                <li className="info-link">
                  <a href="https://github.com/syllable-hq/uphs-feasibility-study" target="_blank" rel="noopener noreferrer">
                    Feasibility study
                  </a>: &nbsp;
                  <span>
                    Our feasibility report about Underground Pumped Storage.
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
            <br />
            <p>
              Terrament is currently seeking a civil engineer co-founder to join our team. <br/>Any introductions are greatly appreciated.
            </p>
            <br />
            <p>
              Got questions or feedback? Please <a href="mailto:hello@terramenthq.com" target="_blank" rel="noopener noreferrer">email us</a>.
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
