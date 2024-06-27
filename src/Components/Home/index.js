
import React from 'react';
import Navbar from "../Navbar";
import VideoComp from "../VideoComp";
import VideoYoutube from "../VideoYoutube";
import Footer from "../Footer";
import MailchimpForm from "../MailchimpForm";
import { Link } from '@reach/router'
import { Link as ScrollLink } from "react-scroll";

import './index.scss';

const videoPosterBg = 'homepage-bg.jpg';
const videoPosterDesign = 'terrament-prototype-R7-cover.png';
const videoMp4Bg = 'homepage-bg.mp4?v2';
const videoMp4 = 'terrament-product-demo-video-compressed.mp4';
const videoYoutubeSrc = 'https://www.youtube.com/embed/RZ5RDMw1my4?si=BGFTinN1o21vN_z7&amp;controls=0';
// todo #deDup
const videoVimeoSrc = 'https://player.vimeo.com/video/913860588?h=8ec504d4e6&autoplay=0&loop=1&title=0&byline=0&portrait=0';

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={`page page-home`}>
        <div className="header-logo">
          <img src="/terrament-logo-white.png" alt="Terrament logo" />
        </div>

        <Navbar/>
        <div className="page-screen">
          <div className="screen-content screen-content-above-fold">
            <ScrollLink
              to="belowfold"
              smooth={true}
              duration={500}
              className="scroll-link"
            >
              <VideoComp
                // blocking the auto-load of the video to save bandwidth.
                // this will result in just the bg image showing... quick fix.
                autoPlay={false}
                isBackgroundVideo={true}
                poster={videoPosterBg}
              >
                <source src={videoMp4Bg} type="video/mp4" />
              </VideoComp>

              <div className="h1-wrap">
                <h1 className="h1">
                  <img src="/terrament-logo-text-white.svg" alt="Terrament logo" />
                </h1>
                <h2 className="h2">
                  Modular Underground Gravity Storage
                </h2>
                <img className="down-caret" src="/down-caret-white.png" alt="down-caret" />
              </div>
            </ScrollLink>
          </div>
        </div>
        <div className="page-screen"
          name="belowfold"
          id="belowfold"
        >
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                Terrament Gravity Storage
              </h2>

              <p>
                Terrament is building long-duration energy storage with gravity batteries deployed deep underground.
              </p>
              <p>
                Our patented design achieves high scale and low cost by maximizing the two simple ingredients of gravity storage: height and weight.
              </p>
              <p>
                <ul className="bullets meet-terrament-bullets">
                  <li>
                    Height: We dig a mile deep into bedrock using existing drilling tech.
                  </li>
                  <li>
                    Weight: We support modular weight with shaft bedrock, not a winch cable.
                  </li>
                </ul>
              </p>

              <div className="media-wrap">
                <div style={{padding:'42.81% 0 0 0', position:'relative'}}>
                  <iframe src={videoVimeoSrc}
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}}
                    title="Terrament Gravity Storage Concept">
                  </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>

                <span className="caption">
                  How Terrament's Gravity Storage works (video by <a
                  href="https://www.extinctionmachine.com"
                  title="Extinction Machine: High-impact video content for high-tech startups"
                  target="_blank" rel="noopener noreferrer">Extinction Machine</a>)
                </span>
              </div>

              <p>
                Terrament's gravity storage solution is low-risk:
              </p>
              <p>
                We don't depend on critical minerals, and we don't use any chemical batteries. Our innovative system uses only well-established technologies: We leverage the same motor/generators used in wind turbines, and we use the same mile-deep mine shafts which have been built by mining companies for over 50 years.
              </p>
            </div>
            <div className="content-section">
              <h3 className="h3">
                Terrament Pitch Deck
              </h3>

              <div className="media-wrap responsive-google-slides">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vSmAH2_biVYfPhQIAx5u20iVjzVy3tzJ2EUBYDYVGLekjvaqqlLcQIrk_l0frg69jSPwGcioM5CrNXm/embed?start=false&loop=false&delayms=10000"
                  frameBorder={0}
                  width={960}
                  height={569}
                  allowFullScreen={true}>
                </iframe>
              </div>
            </div>

            <div className="content-section">
              <h3 className="h3">
                The Energy Storage Problem
              </h3>
              <p>
                The threat of climate change has sparked action to replace fossil fuels with wind and solar energy. But wind and solar are intermittent resources; the wind doesn't always blow, and the sun doesn't always shine. So without energy storage, our urgent transition to renewable energy will stall.
              </p>
              <p>
              According to NREL, energy storage capacity in the U.S. needs to <a
                  href="https://www.nrel.gov/news/program/2021/grid-scale-storage-us-storage-capacity-could-grow-five-fold-by-2050.html"
                  title="NREL: Grid-Scale U.S. Storage Capacity Could Grow Five-Fold by 2050"
                  target="_blank" rel="noopener noreferrer">grow five times larger by 2050</a> to support wind and solar energy.
              </p>
              <p>
                  But we have a big problem: We don't yet have proven, low-cost technologies that can reach this scale.
              </p>
              <p>Today, 90% of the world's energy storage is pumped hydro, which is a <a
                  href="https://www.energy.gov/sites/prod/files/2018/02/f49/Hydropower-Vision-021518.pdf"
                  title="NREL: Grid-Scale U.S. Storage Capacity Could Grow Five-Fold by 2050"
                  target="_blank" rel="noopener noreferrer">nearly tapped out resource</a>. And Lithium-ion batteries are too expensive at long durations.
              </p>
              <p>
                So we need a new solution. A solution which is low-risk, high-scale, and low-cost.
              </p>
            </div>

            <div className="content-section">
              <h3 className="h3">
                About Us
              </h3>

              <p>
                Terrament is a clean-tech startup based in Brooklyn, NY. We are grateful to have been accepted into the following programs:
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

              <p>
                We have been awarded a U.S. Patent, and we have two more pending patent applications. We're seeking our first round of investment.
              </p>
              <p>
                <Link className="block-link"
                  to="/about"
                > Learn More
                </Link>
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
