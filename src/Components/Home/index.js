import React from 'react';
import Navbar from "../Navbar";
import VideoComp from "../VideoComp";
import Footer from "../Footer";
import MailchimpForm from "../MailchimpForm";
import { Link } from '@reach/router'
import { Link as ScrollLink } from "react-scroll";

import './index.scss';

const videoPosterBg = 'homepage-bg.jpg';
const videoPosterDesign = 'terrament-prototype-R7-cover.png';
const videoMp4Bg = 'homepage-bg.mp4?v2';
const videoMp4 = 'terrament-product-demo-video-compressed.mp4';

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
                  Radically Scalable Energy Storage
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
                Meet Terrament
              </h2>

              <p>
                Terrament is building long-duration energy storage using gravity batteries deployed deep underground.
              </p>
              <p>
                Our patent-pending design achieves high scale and low cost by maximizing the two simple ingredients of gravity storage: height and weight:
              </p>
              <p>
                <ul className="meet-terrament-bullets">
                  <li>
                    First, we maximize height potential by digging a mile deep into bedrock.
                  </li>
                  <li>
                    Second, we maximize density with modules that support their own weight.
                  </li>
                </ul>
              </p>
              <p>
                Our solution is low-risk:
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
              <p>Today, nearly all of our energy storage is pumped hydro, which is a <a
                  href="https://www.energy.gov/sites/prod/files/2018/02/f49/Hydropower-Vision-021518.pdf"
                  title="NREL: Grid-Scale U.S. Storage Capacity Could Grow Five-Fold by 2050"
                  target="_blank" rel="noopener noreferrer">nearly tapped out resource</a>. And Li-ion batteries remain too expensive and impractical to scale up for the entire grid. In fact, researchers are concerned that
                <a
                  href="https://www.spglobal.com/en/research-insights/articles/lithium-supply-is-set-to-triple-by-2025-will-it-be-enough"
                  title="Lithium supply is set to triple by 2025. Will it be enough?"
                  target="_blank" rel="noopener noreferrer"> we may struggle to mine enough Lithium for just electric vehicles</a>, let alone to serve both mobility and grid storage.
              </p>
              <p>
                So we need a new solution. A solution which is low-risk, high-scale, and low-cost.
              </p>
            </div>

            <div className="content-section"
              id="alphaDesign"
            >
              <h3 className="h3">
                Terrament's Gravity Storage
              </h3>

              <p>
                Terrament's gravity storage can solve our massive energy storage demand at an affordable cost.
              </p>
              <p>Our full design is still confidential in early development. However, this early-draft animation illustrates our basic concept. More details to be revealed post-funding.
              </p>

              <div className="media-wrap">
                <VideoComp
                  wrapperClass="captioned-media"
                  poster={videoPosterDesign}
                >
                  <source src={videoMp4} type="video/mp4" />
                </VideoComp>
                <span className="caption">
                  3D animation of Terrament alpha design concept (early draft).
                </span>
              </div>

              <p>
                Terrament’s patent pending design achieves breakthrough efficiency by maximizing the two simple principles of gravity storage: height and weight.
              </p>

              <ol className="list-items">
                <li>
                  Height: We achieve 10 times more height than above-ground solutions. This is solved by digging a mile deep into bedrock (or using abandoned mine shafts).
                </li>

                <li>
                  Weight: We achieve nearly 100% volume capacity with densely packed weight. This is solved with a modular design of self-supporting autonomous units.
                </li>
              </ol>
            </div>

{/* removing to speed up load time */}
{/*            <div className="content-section related-technologies hide-desktop">
              <h3 className="h3">
                Related Technologies
              </h3>
              <div className="media-wrap">
                <VideoComp
                  wrapperClass="captioned-media"
                  poster={videoPosterBg}
                  autoPlay={false}
                >
                  <source src={videoMp4Bg} type="video/mp4" />
                </VideoComp>
                <span className="caption">
                  Video collage of technologies related to Terrament gravity storage. <br/>
                  Note: This video is merely a collage of relevant technologies and asserts no claims.
                </span>
              </div>
            </div>
*/}
            <div className="content-section">
              <h3 className="h3">
                About Us
              </h3>

              <p>
                Terrament is a clean-tech startup based in Brooklyn, NY.
              </p>
              <p>We're a proud member of the <a
                  href="https://www.cebip.org/terrament"
                  target="_blank" rel="noopener noreferrer"
                >CEBIP accelerator program</a> at Stony Brook University.
              And we're grateful to have beeen chosen for the <a
                  href="https://www.newlab.com/articles/founder-fellowship-2023"
                  target="_blank" rel="noopener noreferrer"
                >2023 Founder Fellowship cohort at Newlab</a>.
              </p>
              <p className="brand-logo-section">
                <a className="brand-logo"
                  href="https://www.newlab.com"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img src="/newlab-logo.svg" alt="NEWLAB logo" />
                </a>
                <a className="brand-logo"
                  href="https://www.cebip.org/terrament"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img src="/cebip-logo.png" alt="CEBIP logo" />
                </a>
              </p>
              <p>We are currently building our prototype at <a
                  href="https://www.newlab.com/"
                  target="_blank" rel="noopener noreferrer"
                >Newlab</a>, in the Brooklyn Navy Yard. We have two pending patent applications, and we're seeking our first round of investment.
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
