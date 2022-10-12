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
                Terrament was founded at the start of 2020 and has filed a patent application for our innovative approach to underground energy storage. We are now seeking angel investment and seed funding.
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
                Terrament's gravity storage design was inspired by a related technology called Underground Pumped Hydro Storage, or UPHS. In fact, the company was born out of a <a href="https://github.com/syllable-hq/uphs-feasibility-study" target="_blank" rel="noopener noreferrer">research project exploring the feasibility UPHS</a>. By leveraging our UPHS research to spark discussions with industry experts and validate our market assumptions, we demonstrated that Terrament's concept was not just viable, it was urgently needed.
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
                      Founder
                    </h4>
                  </div>
                  <div className="profile-content-wrap">
                    <p>
                      Eric Chaves is a technol&shy;ogist and entre&shy;preneur living in Brooklyn, New York. He is a software developer and multi-disciplinary designer with experience in a range of fields from architecture to industrial design. Terrament is his third company. His first two companies are <a href="https://angel.co/company/antenna-1" title="Antenna Startup Company: Next-gen recommendations powered by mobile-first feedback on everything" target="_blank" rel="noopener noreferrer">Antenna</a> and <a href="https://www.syllablehq.com/" title="Syllable Technology and Design" target="_blank" rel="noopener noreferrer">Syllable</a>.
                    </p>
                  </div>
                </div>
                <div className="profile-wrap">
                  <img src="/team-profile-pics/steven-decarlo.png" className="profile-img" />
                  <h3 className="profile-name">
                    Steven DeCarlo, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Engineering, MBA, Grid Utilities
                  </h4>
                </div>
                <div className="profile-wrap">
                  <img src="/team-profile-pics/paul-schwartz.png" className="profile-img" />
                  <h3 className="profile-name">
                    Paul Schwartz, Advisor
                  </h3>
                  <h4 className="profile-title">
                    CEBIP Director, Energy Exec/Fin
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
                  <img src="/team-profile-pics/mengye-chen.png" className="profile-img" />
                  <h3 className="profile-name">
                    Mengye Chen, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Civil Engineer, PhD
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
                  <img src="/team-profile-pics/gregory-scott.png" className="profile-img" />
                  <h3 className="profile-name">
                    Gregory Scott, Advisor
                  </h3>
                  <h4 className="profile-title">
                    Civil Engineer, PE
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
                    Eric Chaves, Founder<br />
                    Terrament, LLC <br />
                    67 West St, Suite 401-C11 <br />
                    Brooklyn, NY 11222
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
