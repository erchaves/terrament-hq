import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from '@reach/router'
import MailchimpForm from "../MailchimpForm";
import './index.scss';

const videoBgShort = '/video-bg-short.jpg';

class Mission extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={`page page-mission`}>
        <Navbar/>

        <div className="page-screen">
          <div className="screen-content screen-content-above-fold-short">
            <img className="img-background"
              src={videoBgShort} alt="Terrament energy storage background image" />
          </div>
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                Mission Statements
              </h2>
              <p>
                Terrament's mission is building energy technologies that support a more sustainable and abundant energy future.
              </p>

            </div>
            <div className="content-section">
              <h2 className="h2">
                Just Transition
              </h2>
              <p>
                Terrament acknowledges that climate costs are wide-reaching including human costs, environmental costs, and financial costs. It's too expensive to do nothing.
              </p>
              <p>
                To mitigate climate costs, society must transition to a safer, more sustainable energy infrastructure. We believe it's in Terrament's best business interests to support a just climate transition.
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
                  href="mailto:eric@terramenthq.com?subject=Hello"
                  target="_blank" rel="noopener noreferrer"
                >email</a>.)
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Mission;
