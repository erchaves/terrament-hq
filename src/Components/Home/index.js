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
            <VideoComp
              isBackgroundVideo={true}
              poster={videoPosterBg}
            >
              <source src={videoMp4Bg} type="video/mp4" />
            </VideoComp>

            <ScrollLink
              to="belowfold"
              smooth={true}
              duration={500}
              className="scroll-link"
            >
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
                The threat of climate change has sparked an energy revolution; wind and solar technologies are poised to replace fossil fuels. This transition is urgent, but it will stall without a key ingredient: energy storage.
              </p>
              <p>
                That's why Terrament is building low-cost, high-scale energy storage. Our patent pending design utilizes solid-mass gravity batteries dropped deep underground.
              </p>
              <p className="disclaimer hide-mobile">
                Note: The header video above is merely a collage of relevant technologies and asserts no claims.
              </p>
            </div>

            <div className="content-section"
              id="alphaDesign"
            >
              <h3 className="h3">
                Terrament Alpha Design
              </h3>

              <p>
                Our alpha design is in very early development. This 3D animation is an early draft of our design concept. More details to be revealed post-funding.
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

              <p>
                Our solution is low-risk. We use only well-established mining technologies, and we do not rely on any risky, unproven chemical battery technologies.
              </p>
            </div>

            <div className="content-section related-technologies hide-desktop">
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

            <div className="content-section">
              <h3 className="h3">
                Terrament Pitch Deck
              </h3>

              <div className="media-wrap responsive-google-slides">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vTfgkk0f6_oPzGN7Z8SQY7UgnXlRovqEZaazJiD_NB4VoxocV5tunY8fqbKMtMLAhDvwQiisunZVMg5/embed?start=false&loop=false&delayms=10000"
                  frameBorder={0}
                  width={960}
                  height={569}
                  allowFullScreen={true}>
                </iframe>
              </div>
            </div>

            <div className="content-section">
              <h3 className="h3">
                Learn More
              </h3>

              <p>
                Terrament is a pre-funded startup based in Brooklyn, NY. We are currently seeking our first round of investment.
                <Link className="block-link"
                  to="/about"
                >
                  About Us
                </Link>
              </p>
              <p>
                Our long term strategy includes a type of energy storage called underground pumped hydro storage, or UPHS.
                <Link className="block-link"
                  to="/research"
                >
                  UPHS Research
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
