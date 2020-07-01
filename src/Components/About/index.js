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
                Terrament is a renewable energy company building low-cost, high-scale energy storage. We believe that our patent-pending design for underground gravity batteries will lead our future's multi-billion dollar energy storage market.
              </p>

              <p>
                Terrament's gravity storage design was inspired by a related technology called Underground Pumped Hydro Storage, or UPHS. In fact, the company was born out of a research project exploring the feasibility UPHS. By leveraging our UPHS research to spark discussions with industry experts and validate our market assumptions, we proved that Terrament's concept was not just viable, it was urgently needed.
              </p>
              <p>
                Under the threat of a destablized climate, demand for cheap, scaleable energy storage has exploded. And no one has yet developed a satisfactory solution. The market is wide open, and Terrament has already piqued early interest from experts, advisors, and investors.
              </p>
              <p>
                Terrament, LLC was founded at the start of 2020 and holds a provisional patent for our innovative approach to underground energy storage.
              </p>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Our Team
              </h2>

              <div className="profile-row">
                <div className="profile-wrap">
                  <img src="/eric-chaves-profile-pic.jpg" className="profile-img crop-circle" />
                  <h3 className="profile-name">Eric Chaves</h3>
                  <h4 className="profile-title">Founder</h4>
                  <p>
                    Eric Chaves is the founder of Terrament. He is a technol&shy;ogist and entre&shy;preneur living in Brooklyn, New York. He is a software developer and multi-disciplinary designer with experience in a range of fields from architecture to industrial design. Terrament is his third company. His first two companies are <a href="https://angel.co/company/antenna-1" title="Antenna Startup Company: Next-gen recommendations powered by mobile-first feedback on everything">Antenna</a> and <a href="https://www.syllablehq.com/" title="Syllable Technology and Design">Syllable</a>.
                  </p>
                </div>
                <div className="profile-wrap">
                  <img src="/profile-placeholder-image.svg" className="profile-img" />
                  <h3 className="profile-name">
                    <span className="bold-not">[</span>
                      Engineering Advisor
                    <span className="bold-not">]</span>
                  </h3>
                  <h4 className="profile-title">Mechanical Engineer, PhD</h4>
                  <p>
                    One of our interim advisors is a Mechanical Engineer, PhD. <br/>
                    We greatly appreciate their support while we seek early investment and carefully build our team.
                  </p>
                </div>
                <div className="profile-wrap">
                  <img src="/profile-placeholder-image.svg" className="profile-img" />
                  <h3 className="profile-name">
                    <span className="bold-not">[</span>
                      Engineering Advisor
                    <span className="bold-not">]</span>
                  </h3>
                  <h4 className="profile-title">Mechanical Engineer, PhD</h4>
                  <p>
                    One of our interim advisors is a Civil Engineer, PhD. <br/>
                    We greatly appreciate their support while we seek early investment and carefully build our team.
                  </p>
                </div>
                <div className="profile-wrap">
                  <img src="/profile-placeholder-image.svg" className="profile-img" />
                  <h3 className="profile-name">
                    <span className="bold-not">[</span>
                      Engineering Advisor
                    <span className="bold-not">]</span>
                  </h3>
                  <h4 className="profile-title">Civil Engineer</h4>
                  <p>
                    One of our interim advisors is a Civil Engineer with years of experience managing infra&shy;structure project construc&shy;tion. We greatly appreciate their support while we seek early investment and carefully build our team.
                  </p>
                </div>
                <div className="profile-wrap">
                  <img src="/profile-placeholder-image.svg" className="profile-img" />
                  <h3 className="profile-name">
                    <span className="bold-not">[</span>
                      Engineering Advisor
                    <span className="bold-not">]</span>
                  </h3>
                  <h4 className="profile-title">Electrical Engineer</h4>
                  <p>
                    One of our interim advisors is an Electrical Engineer, Energy Project Developer, and MBA candidate. We greatly appre&shy;ciate their support while we seek early investment and carefully build our team.
                  </p>
                </div>

                <div className="profile-wrap">
                  <img src="/profile-placeholder-image.svg" className="profile-img" />
                  <h3 className="profile-name">
                    <span className="bold-not">[</span>
                      Support Crew
                    <span className="bold-not">]</span>
                  </h3>
                  <h4 className="profile-title">Creatives, etc</h4>
                  <p>
                    Thanks to the rest of our slack team support crew whose Venn diagrams of  tallent include grant writing, climate advocacy, entre&shy;preneurship, software develop&shy;ment, and more.
                  </p>
                </div>
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

export default About;
