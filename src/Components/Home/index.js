import React from 'react';
import Navbar from "../Navbar";
import VideoComp from "../VideoComp";
import VideoYoutube from "../VideoYoutube";
import Footer from "../Footer";
import MailchimpForm from "../MailchimpForm";
import AnnouncementBanner from "../AnnouncementBanner";
import { Link } from '@reach/router'
import { Link as ScrollLink } from "react-scroll";

import './index.scss';

const videoPosterBg = 'homepage-bg.jpg';
const videoPosterDesign = 'terrament-prototype-R7-cover.png';
const videoMp4Bg = 'homepage-bg.mp4?v2';
const videoMp4 = 'terrament-product-demo-video-compressed.mp4';
// todo #deDup
const videoVimeoSrc = 'https://player.vimeo.com/video/913860588?h=8ec504d4e6&autoplay=0&loop=1&title=0&byline=0&portrait=0';

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={`page page-home`}>
        <AnnouncementBanner />
        <Navbar/>
        <div className="screen-content screen-content-above-fold-short">
          <img className="background-image" src={videoPosterBg} alt="Terrament background image" />
        </div>
        <div className="page-screen">
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                Terrament Gravity Storage
              </h2>

              <p>
                Terrament is a New York based clean-tech startup building a patented long-duration energy storage solution that reimagines gravity storage.
              </p>
              <p>Our technology maximizes height and weight to achieve 20x more energy density than other gravity-based energy storage solutions.
              </p>
              <p>
                <ul className="bullets meet-terrament-bullets">
                  <li>
                    More Height: 20x duration from a mile of height using proven drilling tech.
                  </li>
                  <li>
                    More Weight: 10x power from our cable-free, shaft wall mounted rail design.
                  </li>
                </ul>
              </p>

              <div className="media-wrap">
                <div style={{padding:'42.81% 0 0 0', position:'relative'}}>
                  <iframe src={videoVimeoSrc}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}}
                    title="Terrament Gravity Storage Concept">
                  </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>

                <span className="caption">
                  How Terrament's gravity storage works (video by <a
                  href="https://www.machinemythology.com/"
                  title="Machine Mythology: High-impact video content for high-tech startups"
                  target="_blank" rel="noopener noreferrer">Machine Mythology</a>)
                </span>
              </div>
              <p>
                Terrament's gravity storage solution is low-risk: we don't depend on critical minerals, and we don't use any chemical batteries.
              </p>
              <p>
                Our innovative system uses only well-established technologies: we leverage the same motor/generators used in wind turbines, and we use the same deep mine shafts which have been built by mining companies for over 50 years.
              </p>
            </div>
            <div className="content-section">
              <h3 className="h3">
                Terrament Pitch Deck
              </h3>

              <div className="media-wrap responsive-google-slides">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vQt5SE1m4VDN-bBcPQ5efZW7g-PE-0KEDKscu0r0D_1aCQTWqZyQBQfeiFJe5QyKA/pubembed?start=false&loop=false&delayms=10000"
                  frameBorder={0}
                  width={960}
                  height={569}
                  allowFullScreen={true}
                  mozallowfullscreen={true}
                  webkitallowfullscreen={true}
                  >
                </iframe>
              </div>
            </div>

            <div className="content-section">
              <h3 className="h3">
                The Energy Storage Problem
              </h3>
              <p>
               Artificial intelligence is driving explosive growth in data centers, with AI servers using up to 10 times the power of standard servers. If data centers were a country, they're projected to be the fourth largest electricity user by 2035. The biggest cloud service providers want to run entirely off green energy, especially useful in off-grid systems, which are favored due to long interconnection queue timelines.  However, wind and solar are intermittent resources; the wind doesn't always blow, and the sun doesn't always shine.
              </p>
              <p>Today, 90% of the world's energy storage is pumped hydro, which is a <a
                  href="https://www.energy.gov/sites/prod/files/2018/02/f49/Hydropower-Vision-021518.pdf"
                  title="NREL: Grid-Scale U.S. Storage Capacity Could Grow Five-Fold by 2050"
                  target="_blank" rel="noopener noreferrer">nearly tapped out resource</a>. And lithium-ion batteries are too expensive at long durations.
              </p>
              <p>Terrament replicates pumped hydro's capabilities, but without the large footprint, water usage, or need for hills.
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Grant-Funded Research Validation
              </h3>

              <p>
                Terrament is based out of Newlab in Brooklyn, NY. We have been awarded two U.S. Patents, with further patents pending. We are grateful to receive pro bono legal support from <a
                  href="https://foleyhoag.com" target="_blank" rel="noopener noreferrer"
                    >Foley Hoag LLP</a>
              </p>
              <ul className="energywerx-list">
                <li>
                  <img src="doe-logo.jpg" />
                  <span>We recently won U.S. federal grant funding to support outside research validation of our breakthrough technology. We won two <a
                  href="https://www.energy.gov/technologytransitions/articles/doe-announces-20-million-vouchers-support-over-170-organizations" target="_blank" rel="noopener noreferrer"
                    >EnergyWERX awards from the DOE</a> valued at around $300,000.
                  </span>
                </li>
                <li>
                  <img src="wcet-logo.png" />
                  <span>Our research partner <a href="https://www.wcet.washington.edu/" target="_blank" rel="noopener noreferrer">University of Washington, Washington Clean Energy Testbeds</a> developed and validated our techno-economic model to conclude that Terrament's lifetime cost (levelized cost, or LCOS) is under 10¢/kWh for a 1GWh facility, and approaches 5¢/kWh at larger scales. This is cheaper than any competitors in our target market.
                  </span>
                </li>
                <li>
                  <img src="lhp-engineering-logo.png" />
                  <span>Our research partner <a href="https://www.lhpes.com/" target="_blank" rel="noopener noreferrer">LHP Engineering</a> conducted extensive mechanical/electrical modeling and physics simulations to conclude that Terrament's round trip efficiency (RTE) is over 80%. This is as good or better than any competitors in our target market.
                  </span>
                </li>
              </ul>
            </div>
            <div className="content-section">
              <h3 className="h3">
                Accelerators and Partners
              </h3>
              <p>
                We are grateful to have been accepted into the following programs:
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
                    >Cleantech Open Program</a> (Northeast, in 2024).
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

              <p>
                Please reach out to us about investment opportunities.
                &nbsp;
                <a className=""
                  href="mailto:eric@terramenthq.com?subject=Hello"
                  target="_blank" rel="noopener noreferrer"
                >Email Us</a>
              </p>
            </div>
            <div className="content-section">
              <h3 className="h3">
                Stay in Touch
              </h3>
              <MailchimpForm />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
