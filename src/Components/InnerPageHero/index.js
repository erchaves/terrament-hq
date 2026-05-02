import React from 'react';

/**
 * Full-bleed hero band for inner pages (About, Mission, etc.).
 * Default image, position, and size live in `shared-styles/_inner-page.scss` (`.inner-page-hero__bg`).
 * Override per route with a modifier class on the section, e.g. `.inner-page-hero--about .inner-page-hero__bg { … }`.
 * Pass `title` to render the page name as an H1 eyebrow label over the hero image.
 */
const InnerPageHero = ({ ariaLabel, title, className = '' }) => {
  const sectionClass = ['inner-page-hero', className].filter(Boolean).join(' ');

  return (
    <section className={sectionClass} aria-label={ariaLabel}>
      <div className="inner-page-hero__bg" aria-hidden="true" />
      {title && (
        <div className="inner-page-hero__label">
          <div className="inner-page-hero__label-inner">
            <h1 className="inner-page-hero__title">{title}</h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default InnerPageHero;
