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
                Summary
              </h3>
              <p>
                <a href="https://www.scribd.com/embeds/427763238/content?start_page=1&view_mode=slideshow" target="_blank" rel="noopener noreferrer"
                >
                  View the Terrament summary deck
                </a>.
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Problem
              </h3>
              <p>
              Dear Neighbor,
              </p>
              <p>
              As you know, global heating is an international emergency. It is urgent that we redouble efforts to replace fossil fuels with renewable energy.
              </p>
              <p>
                But, did you know that our power grids can't switch to variable energy sources like wind and solar until we build <i>trillions of dollars</i> of energy storage?
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Solution
              </h3>
              <p>
                Terrament is building affordable, scalable energy storage using a technology called Underground Pumped Hydro Storage, or UPHS. UPHS is a well-researched, low-risk technology. Our design will be 3-15 times cheaper than lithium ion storage over a lifetime of forty years.
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Why Terrament?
              </h3>
              <p>
                World governments have promised to quit fossil fuels by 2050. But we are not yet on track to meet those promises. <a href="https://www.eto.think.woodmac.com" target="_blank" rel="noopener noreferrer">Research shows</a> that if we don't expand our energy storage capacity, our solar and wind energy markets will stagnate and fail to reach even 25% of the energy market by 2040. This will cause global temperatures to rise over 3°C, a level which will cause catastrophic climate damage. We have to do better.
              </p>
              <p>
                We have to build highly-scalable energy storage, immediately. Terrament provides a low-risk solution for an affordable cost.
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
                    Our pitch deck summary is not intended for investors (yet). We made it to help us find a civil engineer co-founder. Interested? <a href="mailto:hello@terramenthq.com" target="_blank" rel="noopener noreferrer">Contact us</a>.
                  </span>
                </li>
                <li className="info-link">
                  <a href="/underground-pumped-hydroelectric-storage-feasibility-study.pdf" target="_blank" rel="noopener noreferrer">
                    Feasibility study
                  </a>: &nbsp;
                  <span>
                    Our feasibility report about Underground Pumped Storage. This report is <a href="https://github.com/syllable-hq/uphs-feasibility-study" target="_blank" rel="noopener noreferrer">open-source</a> and may be updated in the future.
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
