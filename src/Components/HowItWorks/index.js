import React from 'react';
import SiteChrome from "../SiteChrome";
import InnerPageHero from '../InnerPageHero';
const videoVimeoSrc = 'https://player.vimeo.com/video/913860588?h=8ec504d4e6&autoplay=0&loop=1&title=0&byline=0&portrait=0';

class HowItWorks extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <SiteChrome pageClassName="page-howItWorks">
        <InnerPageHero ariaLabel="How Terrament gravity storage works" title="How it Works" />

        <div className="page-screen">
          <div
            className="screen-content screen-content--band"
            id="belowfold"
          >
            <div className="content-section">
              <h2 className="h2">
                Terrament Gravity Storage
              </h2>

              <p>
                Terrament is a clean-tech company building a patented long-duration energy storage solution that reimagines gravity storage.
              </p>
              <p>Our technology maximizes height and weight to achieve 20x more energy density than other gravity-based energy storage solutions.
              </p>
              <ul className="bullets meet-terrament-bullets">
                <li>
                  More Height: 20x duration from a mile of height using proven drilling tech.
                </li>
                <li>
                  More Weight: 10x power from our cable-free, shaft wall mounted rail design.
                </li>
              </ul>

              <p>
                Watch our video to learn how gravity storage supports our power grid.
              </p>

              <div className="media-wrap">
                <div className="media-frame-42">
                  <iframe src={videoVimeoSrc}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="media-frame-fill"
                    title="Terrament Gravity Storage Concept">
                  </iframe>
                </div>
                <span className="caption">
                  How Terrament's Gravity Storage works (video by <a
                  href="https://www.machinemythology.com/"
                  title="Machine Mythology: High-impact video content for high-tech startups"
                  target="_blank" rel="noopener noreferrer">Machine Mythology</a>)
                </span>
              </div>
            </div>
          </div>

          <div className="screen-content screen-content--surface screen-content--green-light">
            <div className="content-section">
              <h2 className="h2">
                Why Long-duration Storage?
              </h2>
              <p>
                While lithium-ion batteries are good at providing shorter duration storage, longer duration storage technologies are needed to balance the grid in order to support the massive growth of energy required by AI data centers.
              </p>
              <p>
                Read McKinsey's report on why long-duration energy storage is growing exponentially and why LDES has a potential value creation of $1.3 trillion by 2040.
              </p>
              <p>
                <a
                href="https://www.mckinsey.com/business-functions/sustainability/our-insights/net-zero-power-long-duration-energy-storage-for-a-renewable-grid"
                title="Net-zero power: Long-duration energy storage for a renewable grid"
                target="_blank" rel="noopener noreferrer">McKinsey – Net-zero power: Long-duration energy storage for a renewable grid</a>
              </p>
            </div>
          </div>

          <div className="screen-content screen-content--green-light">
            <div className="content-section">
              <h2 className="h2">
                Why Gravity Storage?
              </h2>
              <p>
                Gravity storage is reliable, efficient, low-risk, and cheap to scale.
              </p>
              <p>
                There are many types of energy storage, and they all have unique value propositions. Gravity storage is very good at providing low-cost, efficient energy storage for our power grid. Comparatively, methods like thermal storage, iron air, or power-to-gas-to-power, have far lower round-trip efficiencies - often below 50% – which means they waste half the energy on every cycle.
              </p>
              <p>
                Terrament's gravity storage is low-cost and low-risk. We don't rely on chemical supply chains, and we project that we'll reach 80-85% round-trip efficiencies.
              </p>
            </div>
          </div>

          <div className="screen-content screen-content--green-light">
            <div className="content-section" id="pitch-deck">
              <h2 className="h2">
                Terrament's Trillion Dollar Market Opportunity
              </h2>
              <div className="deck-embed">
                <div className="media-wrap responsive-google-slides">
                  {/* 1EbLyt91aSLyVuLdi_kpaMuDMgJOImDZv */}
                  <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vSUpn16oFOiqe7cHDAl0NRLu0iiz-xES6hejmZ0PyHGv6M6soQosjcqDkmZQFVWqg/pubembed?start=false&loop=false&delayms=10000"
                    width={960}
                    height={569}
                    allowFullScreen={true}
                    title="Terrament pitch deck"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </SiteChrome>
    );
  }
}

export default HowItWorks;
