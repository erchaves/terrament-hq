import React from 'react'
import './index.scss';

export default () => (
  <div className="mailchimp-form">
    {/* Begin Mailchimp Signup Form */}
    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
    <div id="mc_embed_signup">
      <form action="https://terramenthq.us7.list-manage.com/subscribe/post?u=a601fde40fc75bf8b19ced729&id=7f2d982d5d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <h4>Sign Up for Updates and Announcements</h4>
          <div className="field-group-wrap-name">
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input type="text" defaultValue="" name="FNAME" id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input type="text" defaultValue="" name="LNAME" id="mce-LNAME" />
            </div>
          </div>
          <div className="mc-field-group field-group-email">
            <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
            </label>
            <div className="indicates-required"><span className="asterisk">*</span> required</div>
            <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{"display":"none"}} />
            <div className="response" id="mce-success-response" style={{"display":"none"}} />
          </div>
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div style={{"position":"absolute","left":"-5000px"}} aria-hidden="true"><input type="text" name="b_a601fde40fc75bf8b19ced729_7f2d982d5d" tabIndex={-1} defaultValue /></div>
          <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
        </div>
      </form>
    </div>
    {/*End mc_embed_signup*/}
  </div>
)