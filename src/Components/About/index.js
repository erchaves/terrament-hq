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
        <Navbar/>

        <div className="page-screen">
          <div className="screen-content screen-content-above-fold-short">
            <img className="img-background"
              src={videoBgShort} alt="Terrament energy storage background image" />
          </div>
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                About our Team
              </h2>
               <p>
                Terrament is a New York based clean-tech startup building long-duration energy storage with gravity batteries deployed deep underground.
              </p>
              <p>
                We have been awarded one US Patent, and we have two more pending patent applications. We are grateful to have been accepted into the following programs:
                <ul className="bullets">
                  <li>
                    <a
                    href="https://www.cebip.org/terrament"
                    target="_blank" rel="noopener noreferrer"
                    >CEBIP accelerator program</a> at Stony Brook University (since 2021).
                  </li>

                  <li>
                    <a
                    href="https://www.newlab.com/articles/founder-fellowship-2023"
                    target="_blank" rel="noopener noreferrer"
                    >Founder Fellowship cohort at Newlab</a> (in 2023, still active).
                  </li>

                  <li>
                    <a
                    href="https://www.plugandplaytechcenter.com/japan/"
                    target="_blank" rel="noopener noreferrer"
                    >Plug and Play Program</a> (Japan - Energy focus, in 2024).
                  </li>
                  <li>
                    <a
                    href="https://www.cleantechopen.org/en/page/northeast-en"
                    target="_blank" rel="noopener noreferrer"
                    >Clean Tech Open Program</a> (Northeast, in 2024).
                  </li>
                </ul>
              </p>
              <p className="brand-logo-section">
                <a className="brand-logo"
                  href="https://www.cebip.org/terrament"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img src="/cebip-logo.png" alt="CEBIP logo" />
                </a>

                <a className="brand-logo"
                  href="https://www.cleantechopen.org/en/page/northeast-en"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img src="/clean-tech-open-logo.png" alt="Cleantech Open Logo" />
                </a>
              </p>
              <p className="brand-logo-section row-2">
                <a className="brand-logo"
                  href="https://www.newlab.com"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img src="/newlab-logo.svg" alt="NEWLAB logo" />
                </a>
               <a className="brand-logo"
                  href="https://www.plugandplaytechcenter.com/japan/"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img src="/plug-and-play-logo-blue.png" alt="Plug and Play logo" />
                </a>
              </p>

            </div>
            <div className="content-section">
              <h2 className="h2">
                Terrament Team
              </h2>
            </div>
            <div className="content-section">
              <h3 className="h3">
                Eric Chaves, CEO/Founder
              </h3>
              <div className="profile-row">
                <div className="profile-wrap full-row">
                  <div className="profile-img-wrap profile-img-wrap-founder">
                    <img src="/team-profile-pics/eric-chaves.png" className="profile-img crop-circle" />

                  </div>
                  <div className="profile-content-wrap">
                    <p>
                      Eric Chaves is a technical entrepreneur with 20 years experience spanning Architecture, Industrial Design, and Software Engineering. Terrament is his third company. His former companies include a media-tech startup called Antenna, and a software and design studio called Syllable. He is a <a href="https://www.newlab.com/blogs/founder-fellowship-2023" title="Newlab 2023 Founder Fellowship" target="_blank" rel="noopener noreferrer">Founder Fellow at Newlab</a>, and a member of the <a href="https://cebip.org/companies/terrament" title="CEBIP accelerator at Stony Brook University" target="_blank" rel="noopener noreferrer">CEBIP accelerator at Stony Brook University</a>. He has won a U.S. patent for Modular Underground Gravity Storage, and has a pending patent for Terrament's novel Linear Drive Conveyance System, a key enabler for gravity storage scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-section">
              <h3 className="h3">
                Advisory Support Team
              </h3>
              <h4 className="h4">
                With funding support from NY State, our advisor team provides broad expertise including Engineering, Finance, and Market Modeling.
              </h4>
              <div className="profile-row">
                <div className="profile-wrap">
                  <img src="/team-profile-pics/wei-li.png" className="profile-img" />
                  <h3 className="profile-name">
                    Dr. Wei Li
                  </h3>
                  <h4 className="profile-title">
                    Geo-scientist, Civil Engineer, PhD <br />
                    Professor, Stony Brook
                  </h4>
                </div>

                 <div className="profile-wrap">
                  <img src="/team-profile-pics/kathryn-gardner.png" className="profile-img" />
                  <h3 className="profile-name">
                    Kathryn Gardner
                  </h3>
                  <h4 className="profile-title">
                    Mining Engineer, P.E., MBA, Esq.
                  </h4>
                </div>


                <div className="profile-wrap">
                  <img src="/team-profile-pics/steven-decarlo.png" className="profile-img" />
                  <h3 className="profile-name">
                    Steven DeCarlo
                  </h3>
                  <h4 className="profile-title">
                    Electrical Engineering, MBA <br />
                    Grid Utilities + Pumped Hydro
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/courtney-reich.png" className="profile-img" />
                  <h3 className="profile-name">
                    Courtney Reich
                  </h3>
                  <h4 className="profile-title">
                    Mechanical Engineering, M.S. <br />
                    Battery Tech, Statistics
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/rich-delmerico.png" className="profile-img" />
                  <h3 className="profile-name">
                    Rich Delmerico
                  </h3>
                  <h4 className="profile-title">
                    Electrical/Industrial Engineering <br />
                    Business M.S.
                  </h4>
                </div>
                <div className="profile-wrap">
                  <img src="/team-profile-pics/isabelle-heye.png" className="profile-img" />
                  <h3 className="profile-name">
                    Isabelle Heye
                  </h3>
                  <h4 className="profile-title">
                    Mechanical Engineer, ME
                  </h4>
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
