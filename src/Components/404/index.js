import React from 'react'
import SiteChrome from '../SiteChrome'
import './index.scss';

export default () => (
  <SiteChrome pageClassName="page-404">
    <div className="page-screen page-404__main">
      <div className="screen-content screen-content--band">
        <div className="content-section page-404__content">
          <h1 className="h1">404</h1>
          <h2 className="h2">Rats, we couldn't find this page :(</h2>
        </div>
      </div>
    </div>
  </SiteChrome>
)
