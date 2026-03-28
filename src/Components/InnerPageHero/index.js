import React from 'react';

/**
 * Full-bleed hero band for inner pages (About, Mission, etc.).
 * Default image, position, and size live in `shared-styles/_inner-page.scss` (`.inner-page-hero__bg`).
 * Override per route with a modifier class on the section, e.g. `.inner-page-hero--about .inner-page-hero__bg { … }`.
 */
const InnerPageHero = ({ ariaLabel, className = '' }) => {
  const sectionClass = ['inner-page-hero', className].filter(Boolean).join(' ');

  return (
    <section className={sectionClass} aria-label={ariaLabel}>
      <div className="inner-page-hero__bg" aria-hidden="true" />
    </section>
  );
};

export default InnerPageHero;
