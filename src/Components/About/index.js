import React from 'react';
import SiteChrome from "../SiteChrome";
import PartnerMarquee from '../PartnerMarquee';
import InnerPageHero from '../InnerPageHero';
import './index.scss';

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <SiteChrome pageClassName="page-about">
        <InnerPageHero ariaLabel="About our team" title="Company" />

        <div className="page-screen">
          <div className="screen-content screen-content--surface screen-content--green-light">
            <div className="content-section">
              <h2 className="h2">
                Terrament Team
              </h2>
              {/* TODO: Replace with your intro copy */}
              <p className="team-intro">
                Terrament's founders bring a rare combination of underground mining engineering, energy project finance, legal and business expertise, and decades of hardware and technical product leadership.
              </p>
            </div>
            <div className="content-section founders-section">
              <div className="founders-row">
                <div className="founder-card">
                  <h3 className="h3 founder-name">Katie Gardner <span className="founder-title">| Co-Founder, CEO</span></h3>
                  <div className="profile-img-wrap">
                    <img src="/team-profile-pics/kathryn-gardner.png" className="profile-img crop-circle" alt="Katie Gardner" />
                  </div>
                  <p>
                    Katie Gardner is a business leader with deep technical roots. Her broad expertise spans mining engineering, infrastructure, and law. She worked underground as a mine engineer at Newmont's Twin Creeks operation in northern Nevada, then served as Head of Product at Banyan Infrastructure, a ClimateTech SaaS platform specializing in sustainable infrastructure project finance. She holds a JD from Penn Law, an MBA from Wharton, and a Professional Engineer license in mining.
                  </p>
                </div>
                <div className="founder-card">
                  <h3 className="h3 founder-name">Eric Chaves <span className="founder-title">| Founder, COO</span></h3>
                  <div className="profile-img-wrap">
                    <img src="/team-profile-pics/eric-chaves.png" className="profile-img crop-circle" alt="Eric Chaves" />
                  </div>
                  <p>
                    Eric Chaves is a technical entrepreneur with 20 years of experience spanning architecture, industrial design, and software engineering. He co-founded Antenna, a media-tech startup that reached millions of users and achieved a successful exit. He was a Founder Fellow at Newlab and a member of the CEBIP accelerator at Stony Brook University. He is the inventor of Terrament's core technology and leads engineering, product, and operations as Founder and COO.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="screen-content screen-content--band">
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

          <PartnerMarquee />
        </div>
      </SiteChrome>
    );
  }
}

export default About;
