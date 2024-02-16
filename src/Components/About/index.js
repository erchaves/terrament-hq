import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from '@reach/router'
import MailchimpForm from "../MailchimpForm";
import './index.scss';

const videoBgShort = '/video-bg-short.jpg';

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
                Terrament was founded at the start of 2020. We have been awarded one US Patent, and we have two more pending patent applications. We are now seeking $1 million in pre-seed funding.
              </p>
              <p>
                Terrament's gravity storage design was inspired by a related technology called Underground Pumped Hydro Storage, or UPHS. In fact, the company was born out of a <a href="https://github.com/syllable-hq/uphs-feasibility-study" target="_blank" rel="noopener noreferrer">research project exploring the feasibility UPHS</a>. By leveraging our UPHS research to spark discussions with industry experts and validate our market assumptions, we demonstrated that Terrament's concept was not just viable, it was urgently needed.
              </p>
              <p>
                We are proud to have been selected to join the <a
                  href="https://www.cebip.org/terrament"
                  target="_blank" rel="noopener noreferrer"
                >CEBIP accelerator program</a>. CEBIP, the Clean Energy Business Incubator Program, is supported by Stony Brook University and the New York State Energy Research and Development Authority (<a
                  href="https://www.nyserda.ny.gov/"
                  target="_blank" rel="noopener noreferrer"
                >NYSERDA</a>).
              </p>
              <p>
                We're also grateful to have been selected as a <a
                  href="https://www.newlab.com/articles/founder-fellowship-2023"
                  target="_blank" rel="noopener noreferrer"
                >2023 Fellowship Founder</a> at <a
                  href="https://www.newlab.com/"
                  target="_blank" rel="noopener noreferrer"
                >Newlab</a>. The founder fellowship is run in partnership with the New York City Economic Development Corporation (NYCEDC)’s Venture Access NYC initiative.
              </p>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Our Team
              </h2>

              <div className="profile-row">
                <div className="profile-wrap full-row">
                  <div className="profile-img-wrap">
                    <img src="/team-profile-pics/eric-chaves.png" className="profile-img crop-circle" />
                    <h3 className="profile-name">
                      Eric Chaves
                    </h3>
                    <h4 className="profile-title">
                      Founder / CEO
                    </h4>
                  </div>
                  <div className="profile-content-wrap">
                    <p>
                       Eric is a technol&shy;ogist and entre&shy;preneur with a diverse background spanning architecture, industrial design, and software. With a passion for design and experimentation, his broad experience empowers a multidisciplinary approach to entrepreneurship. Terrament is his third company. His former companies include a media-tech startup called <a href="https://angel.co/company/antenna-1" title="Antenna Startup Company: Next-gen recommendations powered by mobile-first feedback on everything" target="_blank" rel="noopener noreferrer">Antenna</a>, and a software and design studio called <a href="https://www.syllablehq.com/" title="Syllable Technology and Design" target="_blank" rel="noopener noreferrer">Syllable</a>.
                    </p>
                  </div>
                </div>
                <div className="profile-wrap full-row">
{/*                  <div className="profile-img-wrap">
                    <img src="/team-profile-pics/sukhbir-kalirai.png" className="profile-img crop-circle" />
                    <h3 className="profile-name">
                      Sukhbir Kalirai
                    </h3>
                    <h4 className="profile-title">
                      Founder
                    </h4>
                  </div>
                  <div className="profile-content-wrap">
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                */}
                <div className="profile-img-wrap">
                    <img src="/team-profile-pics/anon.png" className="profile-img crop-circle" />
                    <h3 className="profile-name">
                      Announced Soon
                    </h3>
                    <h4 className="profile-title">
                      Co-Founder / Finance
                    </h4>
                  </div>
                  <div className="profile-content-wrap">
                    <p>
                      Extensive experience in private equity and development. <br />
                      Closed $1b+ deals in energy & infrastructure. <br />
                      Built two previous companies, and grew revenue by 1,000% YoY. <br />
                      More details announced soon...
                    </p>
                  </div>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/wei-li.png" className="profile-img" />
                  <h3 className="profile-name">
                    Dr. Wei Li, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Geo-scientist, Civil Engineer, PhD <br />
                    Professor, Stony Brook
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/jon-longtin.png" className="profile-img" />
                  <h3 className="profile-name">
                    Dr. Jon Longtin, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Mechanical Engineering, PhD, Dean, Stony Brook
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/steven-decarlo.png" className="profile-img" />
                  <h3 className="profile-name">
                    Steven DeCarlo, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Electrical Engineering, MBA <br />
                    Grid Utilities + Pumped Hydro
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/kathryn-gardner.png" className="profile-img" />
                  <h3 className="profile-name">
                    Kathryn Gardner, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Mining Engineer, P.E., MBA, Esq.
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/courtney-reich.png" className="profile-img" />
                  <h3 className="profile-name">
                    Courtney Reich, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Mechanical Engineering, M.S. <br />
                    Battery Tech, Statistics
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/rich-delmerico.png" className="profile-img" />
                  <h3 className="profile-name">
                    Rich Delmerico, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Electrical/Industrial Engineering <br />
                    Business M.S.
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/etinosa-ogiesoba.png" className="profile-img" />
                  <h3 className="profile-name">
                    Etinosa Ogiesoba, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Electrical Engineer, ME, MBA
                  </h4>
                </div>
                <div className="profile-wrap">
                  <img src="/team-profile-pics/colin-bateson.png" className="profile-img" />
                  <h3 className="profile-name">
                    Colin Bateson, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Mechanical Engineer, PhD
                  </h4>
                </div>
                <div className="profile-wrap">
                  <img src="/team-profile-pics/isabelle-heye.png" className="profile-img" />
                  <h3 className="profile-name">
                    Isabelle Heye, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Mechanical Engineer, ME
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/achal-upadhyaya.png" className="profile-img" />
                  <h3 className="profile-name">
                    Achal Upadhyaya, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Mechanical Engineering, SpaceX
                  </h4>
                </div>

              </div>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Stay in Touch
              </h2>
              <div className="contact-info ">
                <div className="">
                  <address>
                    Eric Chaves, CEO<br />
                    Terrament, Inc. <br />
                    19 Morris Ave <br />
                    Brooklyn, NY 11205
                  </address>
                  <a className="address-link" href="mailto:eric@terramenthq.com">eric@terramenthq.com</a>
                </div>
                <div className="">
                  <MailchimpForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default About;
