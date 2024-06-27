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
        <Link className="header-logo"
          to="/"
        >
          <img src="/terrament-logo-white.png" alt="Terrament logo" />
        </Link>

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
                Terrament's mission is building high-impact solutions to mitigate climate damage.
              </p>
              <p>
                Terrament was born out of an urgent call to action: that society can, and must, mitigate the catastrophic costs of <a
                  href="https://www.climate.gov/news-features/climate-qa/what-evidence-exists-earth-warming-and-humans-are-main-cause"
                  target="_blank" rel="noopener noreferrer"
                >human-caused</a> climate damage, and that we must do so justly.
              </p>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Just Transition
              </h2>
              <p>
                Terrament acknowledges that climate costs are wide-reaching including human costs, environmental costs, and financial costs. Society cannot afford to ignore climate threats.
              </p>
              <p>
                We acknowledge that climate damage impacts society unjustly; populations who cause more climate damage often feel less impacts, and vice versa.
              </p>
              <p>
                To mitigate climate damage, society must transition to a safer, more sustainable, and more just energy infrastructure. A just transition requires that no one is left behind to endure unjust hardship, and that no one is disenfranchised from the energy transition’s wealth of opportunity.
              </p>
              <p>
                We believe that a healthy economy and a clean environment can and should co-exist. We believe this is possible without costing workers or community residents their health, environment, jobs, or economic assets. And we understand that a just transition is only possible if the organizations working towards it are also just and inclusive.
              </p>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Terrament's Commitment to DEI+
              </h2>
              <p>
                Terrament is committed to upholding principles of DEI+ in all of our business practices, both internal and external. These principles include Diversity, Equity, Inclusion, Justice, Belonging, and Accessibility.
              </p>
              <p>
                <strong>Diversity:</strong> Fostering an organization whose differences include a broad spectrum of insights, ideas, perspectives, values, and cultural understandings.
              </p>
              <p>
                <strong>Equity:</strong> Guaranteeing fair treatment, access, opportunity and advancement for all people. Ensuring that we identify and eliminate barriers which prevent the full participation of marginalized groups.
              </p>
              <p>
                <strong>Inclusion:</strong> Ensuring that new populations and identities are actively welcomed and are given pathways to contribute meaningfully in a positive, mutually beneficial way.
              </p>
              <p>
                <strong>Justice:</strong> Ensuring that everyone receives equitable economic, political, and social rights and opportunities.
              </p>
              <p>
                <strong>Belonging:</strong> Ensuring that everyone has full membership in the organization including rewarded participation and decision-making.
              </p>
              <p>
                <strong>Accessibility:</strong> Ensuring that everyone has equal ability to access our systems, products, services, and built environments, both internally and externally.
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
                Terrament is an equal opportunity employer, and seeks to recruit, hire, and provide opportunities for advancement without regard to race, color, creed, religion, sex, gender, pregnancy, age, disability, or any other characteristics and traits protected under applicable law. Please reach out with any questions or concerns.
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
