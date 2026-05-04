import React from 'react';
import SiteChrome from "../SiteChrome";
import InnerPageHero from '../InnerPageHero';
import MailchimpForm from '../MailchimpForm';
import { FaLinkedin } from 'react-icons/fa';
import './index.scss';

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <SiteChrome pageClassName="page-contact">
        <InnerPageHero ariaLabel="Contact Terrament" title="Contact" />

        <div className="page-screen">
          <div className="screen-content screen-content--surface">
            <div className="content-section">
            <h2 className="h2">
              Contact Us
            </h2>
              <img
                src="/katie-and-eric-at-newlab.jpeg"
                alt="Katie and Eric at Newlab, Brooklyn"
                className="contact-location-photo"
              />
              <a href="mailto:hello@terramenthq.com?subject=Hello" className="contact-method">
                <span className="contact-method__label">Email Us</span>
                <span className="contact-method__action-icon" aria-hidden="true">
                  <span className="icon-mail contact-method__glyph" />
                </span>
              </a>
              <p className="contact-locations-intro">
                Terrament is based in Los Angeles and New York, with home bases at two of the country's leading innovation hubs.
              </p>
              <div className="contact-methods">
                <div className="contact-method contact-method--location">
                  <span className="contact-method__partner-logo" aria-hidden="true">
                    <img src="/partner-logos/la-accel-anon.png" alt="Los Angeles accelerator partner logo" className="contact-method__logo" />
                  </span>
                  <span className="contact-method__label">
                    <strong>Los Angeles</strong> — Coming Soon<br />
                    <span className="contact-method__address">Coming soon, Los Angeles, CA</span>
                  </span>
                </div>
                <div className="contact-method contact-method--location">
                  <span className="contact-method__partner-logo" aria-hidden="true">
                    <img src="/partner-logos/newlab-logo.png" alt="Newlab" className="contact-method__logo" />
                  </span>
                  <span className="contact-method__label">
                    <strong>New York</strong> — Newlab<br />
                    <span className="contact-method__address">19 Morris Ave, Brooklyn, NY 11205</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Newsletter
              </h2>
              <MailchimpForm />
            </div>
          </div>
        </div>
      </SiteChrome>
    );
  }
}

export default Contact;
