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
                About Our Team
              </h2>
               <p>
                Terrament is a New York based clean-tech startup building a patented long-duration energy storage solution that reimagines gravity storage.
              </p>
              <p>
                We have been awarded two U.S. patents with one more pending. We are grateful to have been accepted into the following programs:
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
                Katie Gardner | Co-founder, CEO
              </h3>
              <div className="profile-row">
                <div className="profile-wrap full-row">
                  <div className="profile-img-wrap profile-img-wrap-founder">
                    <img src="/team-profile-pics/kathryn-gardner.png" className="profile-img crop-circle" />
                  </div>
                  <div className="profile-content-wrap">
                    <p>
                      Katie Gardner is a business and technical leader with a unique combination of mining, legal, and project finance experience. She served as Head of Product at Banyan Infrastructure, a ClimateTech SaaS platform specializing in sustainable infrastructure project finance, and she worked as an underground mine engineer at Newmont Mining Corporation's northern Nevada operations, with hands-on experience in deep shaft construction. Katie graduated from the Carey JD/MBA program at the University of Pennsylvania Law School and the Wharton School, and she holds a BS in Mining Engineering from the University of Kentucky. She is a professionally licensed mining engineer in the state of Nevada (ina) as well as a California Bar certified attorney. She brings the technical credibility and business acumen essential for scaling Terrament's underground gravity storage technology with her mining and legal experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-section">
              <h3 className="h3">
                Eric Chaves | Founder, COO
              </h3>
              <div className="profile-row">
                <div className="profile-wrap full-row">
                  <div className="profile-img-wrap profile-img-wrap-founder">
                    <img src="/team-profile-pics/eric-chaves.png" className="profile-img crop-circle" />

                  </div>
                  <div className="profile-content-wrap">
                    <p>
                      Eric Chaves is a technical entrepreneur with 20 years experience spanning Architecture, Industrial Design, and Software Engineering. He was the co-founder of Antenna, a media-tech startup that reached millions and achieved a successful exit, he was a Founder Fellow at Newlab, and he was a member of the CEBIP accelerator at Stony Brook University. He is the author of Terrament's assigned IP, including two awarded U.S. patents for <i>Modular Underground Gravity Storage</i> and a pending patent for our <i>Linear Drive Conveyance System</i>, a key enabler for gravity storage scale.
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
                In part through grants and accelerator programs, we've been fortunate for amazing support from many advisors across a broad range of expertise.
              </h4>
              <br />
              <div className="profile-row">

                <div className="profile-wrap">
                  <img src="/team-profile-pics/wei-li.png" className="profile-img" />
                  <h3 className="profile-name">
                    Wei Li, PhD
                  </h3>
                  <h4 className="profile-title">
                    Geo-scientist, Civil Engineer, PhD <br />
                    Professor, Stony Brook
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/steven-decarlo.png" className="profile-img" />
                  <h3 className="profile-name">
                    Steven DeCarlo
                  </h3>
                  <h4 className="profile-title">
                    Electrical Engineer, MBA<br />
                    Grid Energy Storage, Pumped Hydro
                  </h4>
                </div>

                <div className="profile-wrap">
                  <img src="/team-profile-pics/shruti.png" className="profile-img" />
                  <h3 className="profile-name">
                    Shruti Sharma, PhD
                  </h3>
                  <h4 className="profile-title">
                    Materials Science, Engineering, Clean Tech<br />
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
