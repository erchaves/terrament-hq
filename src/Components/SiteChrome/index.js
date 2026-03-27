import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

/**
 * Shared site chrome: header (nav) + main content + footer.
 * Use one `page-*` class per route for page-level styling (see existing `.page-home`, etc.).
 */
const SiteChrome = ({ pageClassName, children }) => (
  <div className={`page ${pageClassName}`}>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default SiteChrome;
