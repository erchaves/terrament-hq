import React from 'react';

import './index.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={`page page-home`}>
        <div className="h1-wrap">
          <h1 className="h1">
            Terr
            <span className="bullet" />
            a
            <span className="bullet" />
            ment
          </h1>

          <h2 className="h2">
            Solving our trillion-dollar energy storage crisis
          </h2>
        </div>
        <div className="footer">
          <div className="footer-inner">
            <span>
              Launching soon.
            </span>
            <img src="/logo-white.png" alt="Terrament logo" />
            <span>
              For details, contact <a href="mailto:hello@terramenthq.com">hello@terramenthq.com</a>.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
