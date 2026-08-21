import React from 'react';
import { Link } from '@reach/router';
import SiteChrome from '../SiteChrome';
import './index.scss';

class CareerCtoMechanicalEngineering extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <SiteChrome pageClassName="page-careers" minimal>
        <div className="page-screen">
          <div className="screen-content screen-content--surface">
            <div className="content-section career-posting">
              <p className="career-posting__date">2026-08</p>
              <h1 className="h2 career-posting__title">
                CTO, focus on Mechanical Engineering in Heavy Industry
              </h1>

              <h2 className="h2">About Terrament</h2>
              <p>
                Terrament is building grid-scale energy storage with underground gravity batteries.
              </p>
              <p>
                Founded in 2020, Terrament is tackling one of our most critical climate challenges: Long Duration Energy Storage. Terrament’s patented technology leverages underground gravity batteries to achieve high scale and low cost by maximizing both height and weight. Our low-risk solution is built from only proven technologies like mine shaft drilling and industrial power generators.
              </p>

              <h2 className="h2">Company highlights:</h2>
              <ul className="bullets">
                <li>
                  Accepted into prestigious programs including:{' '}
                  <a href="https://www.newlab.com" target="_blank" rel="noopener noreferrer">Newlab founder fellowship</a>,{' '}
                  <a href="https://www.plugandplaytechcenter.com/japan/" target="_blank" rel="noopener noreferrer">Plug &amp; Play Japan</a>,{' '}
                  <a href="https://www.cleantechopen.org/en/page/northeast-en" target="_blank" rel="noopener noreferrer">CleanTech Open Accelerator</a>,{' '}
                  <a href="https://forclimatetech.org/venture-for-climatetech/" target="_blank" rel="noopener noreferrer">Venture For Climate Tech</a>, and{' '}
                  <a href="https://laincubator.org" target="_blank" rel="noopener noreferrer">LACI</a>.
                </li>
                <li>
                  Won 2 U.S. patents with pro bono legal support from Foley Hoag.
                </li>
                <li>
                  Won many letters of support: Con Edison, National Grid, AERTC, Advisian, Stony Brook University, CEBIP, C-Motive, EPRI, and more.
                </li>
                <li>
                  Won $500k of U.S. DOE research funding to validate our technical + financial modeling.
                </li>
              </ul>

              <h2 className="h2">Role Description:</h2>
              <p>
                Terrament is seeking a CTO with deep experience as a mechanical Engineer in heavy industry.
              </p>
              <p>
                You have 10+ years experience designing and project managing large-scale projects in a heavy industry sector. You’re eager to take on ownership and co-lead the development of our ambitious technology which tackles an emerging $1 trillion global market.
              </p>

              <h2 className="h2">Requirements:</h2>
              <ul className="bullets">
                <li>Masters, or PhD preferred in Mechanical Engineering.</li>
                <li>10+ years mechanical engineering experience; with 5+ years in a leadership role.</li>
                <li>Proven track record in large-scale energy projects or heavy machinery design.</li>
                <li>Extensive experience leading engineering teams to deliver products on time, on budget.</li>
                <li>Experience leading a design project from prototype to commercialization.</li>
                <li>Expertise in CAD, simulation, analysis, testing, and design for manufacturing.</li>
                <li>Deep knowledge of manufacturing processes, and supply chain management.</li>
                <li>Entrepreneurial mindset with a drive to both innovate and to deliver meticulous products.</li>
              </ul>

              <p>
                Compensation will be a mix of salary and equity, to be discussed.
              </p>
              <p>
                Terrament values diversity, and we strive to build teams in which everyone can be their authentic self. We encourage people from underrepresented backgrounds to apply.
              </p>
              <p>
                Learn more at{' '}
                <Link to="/mission">https://www.terramenthq.com/mission</Link>
              </p>
            </div>
          </div>
        </div>
      </SiteChrome>
    );
  }
}

export default CareerCtoMechanicalEngineering;
