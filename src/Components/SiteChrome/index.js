import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

/**
 * Shared site chrome: header (nav) + main content + footer.
 * Use one `page-*` class per route for page-level styling (see existing `.page-home`, etc.).
 */
const SiteChrome = ({ pageClassName, children }) => (
  <div className={`page ${pageClassName}`}>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <Navbar />
    <main id="main-content">
      {children}
    </main>
    <Footer />
  </div>
);

export default SiteChrome;
