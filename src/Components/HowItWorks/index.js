import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from '@reach/router'
import MailchimpForm from "../MailchimpForm";
import './index.scss';

// todo #deDup
const videoBgShort = '/video-bg-short.jpg';
const videoVimeoSrc = 'https://player.vimeo.com/video/913860588?h=8ec504d4e6&autoplay=0&loop=1&title=0&byline=0&portrait=0';

class HowItWorks extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={`page page-howItWorks`}>
        <Navbar/>

        <div className="page-screen">
          <div className="screen-content screen-content-above-fold-short">
            <img className="img-background"
              src={videoBgShort} alt="Terrament energy storage background image" />
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
                <p>
                  Watch our video to learn how gravity storage supports our power grid.
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
                    How Terrament's Gravity Storage works (video by <a
                    href="https://www.machinemythology.com/"
                    title="Machine Mythology: High-impact video content for high-tech startups"
                    target="_blank" rel="noopener noreferrer">Machine Mythology</a>)
                  </span>
                </div>
              </div>
              <div className="content-section">
                <h2 className="h2">
                  Why Long Duration Storage?
                </h2>
                <p>
                  While Lithium-ion batteries are good at providing shorter duration storage, in order to support the massive growth of renewable energy, longer duration storage technologies are needed to balance the grid.
                </p>
                <p>
                  Read McKinsey's report on why Long Duration Energy Storage is growing exponentially and why LDES has a potential value creation of $1.3 trillion by 2040.
                </p>
                <p>
                  <a
                  href="https://www.mckinsey.com/business-functions/sustainability/our-insights/net-zero-power-long-duration-energy-storage-for-a-renewable-grid"
                  title="Net-zero power: Long-duration energy storage for a renewable grid"
                  target="_blank" rel="noopener noreferrer">McKinsey – Net-zero power: Long-duration energy storage for a renewable grid</a>
                </p>
              </div>
              <div className="content-section">
                <h2 className="h2">
                  Why Gravity Storage?
                </h2>
                <p>
                  Gravity Storage is reliable, efficient, low-risk, and cheap to scale.
                </p>
                <p>
                  There are many types of energy storage, and they all have unique value propositions. Gravity storage is very good at providing low-cost, efficient energy storage for our power grid. Comparatively, methods like thermal storage, iron air, or power-to-gas-to-power, have far lower round-trip efficiencies - often below 50% – which means they waste half the energy on every cycle.
                </p>
                <p>
                  Terrament's gravity storage is low-cost and low-risk. We don't rely on chemical supply chains, and we project that we'll reach 80-90% round-trip efficiencies.
                </p>
              </div>
              <div className="content-section">
                <h2 className="h2">
                  Learn More
                </h2>
                <p>
                  More details coming soon...
                </p>
              </div>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default HowItWorks;
