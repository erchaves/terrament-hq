import React from 'react';
import SiteChrome from "../SiteChrome";
import InnerPageHero from '../InnerPageHero';

class Mission extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <SiteChrome pageClassName="page-mission">
        <InnerPageHero ariaLabel="Mission" />

        <div className="page-screen page-inner-shell">
          <div className="screen-content screen-content--band screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                Mission Statement
              </h2>
              <p>
                Terrament's mission is to build energy technologies that unlock a sustainable and abundant energy future while creating durable value for our customers, our partners, and global communities.
              </p>

            </div>
            <div className="content-section">
              <h2 className="h2">
                A Just Transition
              </h2>
              <p>
                We believe that a transition to clean, sustainable energy is also the path of greatest value for businesses, economies, and communities. This must be a just transition, which means addressing the stark disparity between those responsible for the largest share of greenhouse gas emissions and the communities most harmed by climate impacts. It must create real opportunities for all communities as industries change. Workers and communities must be treated fairly. And they should have real opportunities to share in the benefits of new infrastructure.
              </p>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Inclusivity and Excellence
              </h2>
              <p>
                Terrament is committed to fostering an inclusive workplace culture where every person can contribute their best work and advance based on merit and performance. We believe that diverse perspectives, experiences, and approaches strengthen our ability to solve complex problems and achieve our mission of transforming energy storage.
              </p>

            </div>
            <div className="content-section">
              <h2 className="h2">
                Equal Opportunity Employer
              </h2>
              <p>
                Terrament values diversity, and we strive to build teams in which everyone can be their authentic self. We encourage people from underrepresented backgrounds to apply.
              </p>
              <p>
                Terrament is an equal opportunity employer and seeks to recruit, hire, and provide opportunities for advancement without regard to race, color, creed, religion, sex, gender, pregnancy, age, disability, or any other characteristics and traits protected under applicable law. Please reach out with any questions or concerns.
              </p>
              <p>
                (We currently have no job openings. But feel free to drop us an <a
                  href="mailto:hello@terramenthq.com?subject=Hello"
                  target="_blank" rel="noopener noreferrer"
                >email</a>.)
              </p>
            </div>
          </div>
        </div>
      </SiteChrome>
    );
  }
}

export default Mission;
