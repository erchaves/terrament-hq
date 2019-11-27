import React from 'react';
import Navbar from "../Navbar";
import Section from "../Section";
import VideoBg from "../VideoBg";
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

const videoPoster = 'homepage-bg.jpg';
// const videoOgg = 'https://uploads.codesandbox.io/uploads/user/979de439-4f3c-445b-ab75-ec2ce2f24a5f/AY5H-Neon.ogg';
// const videoWebm = 'https://uploads.codesandbox.io/uploads/user/979de439-4f3c-445b-ab75-ec2ce2f24a5f/gOrX-Neon.webm';
const videoMp4 = 'homepage-bg.mp4';

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
            <VideoBg
              poster={videoPoster}
            >
              <source src={videoMp4} type="video/mp4" />
            </VideoBg>

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
                  <img src="/terrament-logo-white.png" alt="Terrament logo" />
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
              <p>
                We are building affordable, scalable energy storage using a technology called Underground Pumped Hydro Storage, or UPHS.
              </p>
              <p>
                <img className="pnl-report-diagram" src="/pnl-report-diagram-2.png" alt="A UPHS design from a U.S. Gov Report" />
                <span className="caption">
                  UPHS design from a U.S. DOE report. See key research below.
                </span>
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Our Energy Storage Problem
              </h3>
              <p>
              Climate damage is a grave threat to our health, economy, and national security. We must accelerate our efforts to replace fossil fuels with renewable energy.
              </p>
              <p>
                But renewable energy has a problem: it's dependent on fickle weather. Because of this variability, wind and solar energy is not enough to solve our carbon problem. We must also invest <i>trillions of dollars</i> to build more energy storage.
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Terrament's Solution
              </h3>
              <p className="block">
                Terrament is building closed-loop, underground pumped hydro storage (UPHS). UPHS is a well-researched, low-risk technology. We estimate that our design will be 3-15 times cheaper than lithium ion storage over a lifetime of forty years.
              </p>
              <p className="block">
                Terrament's unique design solves previous barriers to the construction of UPHS.
              </p>
            </div>

            <div className="content-section">
              <p className="p-summary-deck">
                <iframe className="scribd_iframe_embed" title="Terrament Pitch Deck - Draft for Founder Search" src="https://www.scribd.com/embeds/427763238/content?start_page=3&view_mode=slideshow&show_recommendations=true&access_key=key-ANp95hsITbjLqjZZ0wII" data-auto-height="true" data-aspect-ratio="1.7790927021696252" scrolling="no" width="100%" height="450px" frameborder="0"></iframe>
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Why Terrament?
              </h3>
              <p>
                Terrament provides a low-risk, affordable solution for scalable energy storage.
              </p>
              <p>
                World governments have declared a state of climate emergency. And they have pledged to quit fossil fuels by 2050. But we are not yet on track to meet those promises. <a href="https://www.eto.think.woodmac.com" target="_blank" rel="noopener noreferrer">Research shows</a> that if we don't expand our energy storage capacity, our solar and wind energy markets will stagnate.
              </p>
              <p>
                Without energy storage, renewables will fail to reach even 25% of the energy market by 2040. This will cause global temperatures to rise over 3°C, a level which will cause catastrophic climate damage.
              </p>
              <p>
                We have to do better.
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Key Research
              </h3>
              <ul className="info-link-list">
                <li className="info-link">
                  <a href="/underground-pumped-hydroelectric-storage-feasibility-study.pdf" target="_blank" rel="noopener noreferrer">
                    Terrament's feasibility study on UPHS
                  </a>: &nbsp;
                  <span>
                    Our feasibility report about Underground Pumped Storage. This report is <a href="https://github.com/syllable-hq/uphs-feasibility-study" target="_blank" rel="noopener noreferrer">open-source</a> and may be updated in the future.
                  </span>
                </li>
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
          </div>
          <div className="footer">
            <div className="footer-inner">
              <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  <img src="/terrament-logo.png" alt="Terrament logo" />
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
              Terrament is sponsored by <a href="https://www.syllablehq.com" target="_blank" rel="noopener noreferrer">
                Syllable Technology and Design
              </a>.
            </p>
            <p>
              We are currently working with civil engineers to develop our designs and patents. And we are actively seeking partners and advisors. We are also seeking grant support and seed funding to sustain us until we can secure series A funding.
            </p>
            <p>
              Any introductions to interested parties would be greatly appreciated.
            </p>
            <p>
              <a href="mailto:hello@terramenthq.com" target="_blank" rel="noopener noreferrer">
                hello@terramenthq.com
              </a>
            </p>
            <div className="footer">
              <div className="footer-inner">
                <ul>
                  <li>
                    <a href="https://twitter.com/terrament" target="_blank" rel="noopener noreferrer">
                      <span className="menu-item__icon icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@terramenthq.com" target="_blank" rel="noopener noreferrer">
                      <span className="menu-item__icon icon-mail"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Home;
