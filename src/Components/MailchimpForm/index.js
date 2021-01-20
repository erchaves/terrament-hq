import React from 'react'
import './index.scss';

export default () => (
  <div className="mailchimp-form">
    {/* Begin Mailchimp Signup Form */}
    <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
    <div id="mc_embed_signup">
      <form action="https://terramenthq.us7.list-manage.com/subscribe/post?u=a601fde40fc75bf8b19ced729&id=7f2d982d5d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <label className="form-label" htmlFor="mce-EMAIL">Sign Up for Updates and Announcments</label>
          <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div style={{"position":"absolute","left":"-5000px"}} aria-hidden="true"><input type="text" name="b_a601fde40fc75bf8b19ced729_7f2d982d5d" tabIndex={-1} defaultValue /></div>
          <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
        </div>
      </form>
    </div>
    {/*End mc_embed_signup*/}
  </div>
)
