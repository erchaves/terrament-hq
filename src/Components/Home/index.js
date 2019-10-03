import React from 'react';

import './index.scss';

const hashes = [
  '#home',
  '#about',
  '#contact',
];

const onLoad = () => {
  // alert('test');
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    const initialHash = window.location.hash || hashes[0];
    const hashIndex = hashes.indexOf(initialHash);
    debugger;

    this.currHashIndex = hashIndex >= 0 ? hashIndex : 0;
  }

  componentDidMount() {
    onLoad();
  }

  handleClickMenuLink(e) {
    e.preventDefault();

    let $nextScreen;

    this.currHashIndex++;

    // wrap it if it went over
    if (this.currHashIndex >= this.screens.length) {
      this.currHashIndex = 0;
    }

    $nextScreen = this.screens[this.currHashIndex];

    history.pushState(null, null, this.hashes[this.currHashIndex]);

    smoothScroll($nextScreen[0]);
  }

  onHashChange(e) {
    debugger;
    const hash = window.location.hash;
    const el = $(hash)[0];

    if (!el) {
      return;
    }

    smoothScroll(el);
  }

  render() {
    return (
      <div className={`page page-home`}>
        <div className="menu-main">
          <ul className="menu-ul">
            <li>
              <a href="#home">
                home
              </a>
            </li>
            <li>
              <a href="#about">
                about
              </a>
            </li>
            <li>
              <a href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
        <div id="home" className="page-screen page-screen-1">
          <div className="screen-content">

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
        </div>

        <div id="about" className="page-screen page-screen-2">
          <div className="screen-content">
          </div>
        </div>

        <div id="contact" className="page-screen page-screen-3">
          <div className="screen-content">
            test
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
