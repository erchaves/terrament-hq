import React from 'react';
import './index.scss';

/**
 * @typedef {Object} PartnerMarqueeItem
 * @property {string} href
 * @property {string} src
 * @property {string} alt
 * @property {number} [heightPercent]
 * @property {number} [opacity]
 */

/**
 * One row per file in `public/partner-logos/` — keep this list in sync when adding or removing assets.
 * @type {Array<{ filename: string, href: string, alt: string, heightPercent?: number, opacity?: number }>}
 */
const PARTNER_MARQUEE_MANIFEST = [
  {
    filename: 'cebip-logo.png',
    href: 'https://www.cebip.org/terrament',
    alt: 'CEBIP partner logo',
  },
  {
    filename: 'clean-tech-open-logo.png',
    href: 'https://www.cleantechopen.org/en/page/northeast-en',
    alt: 'Cleantech Open partner logo',
  },
  {
    filename: 'newlab-logo.png',
    href: 'https://www.newlab.com',
    alt: 'Newlab partner logo',
    opacity: 0.8,
  },
  {
    filename: 'nyserda-logo.png',
    href: 'https://www.nyserda.ny.gov/',
    alt: 'NYSERDA partner logo',
    heightPercent: 78,
  },
  {
    filename: 'plug-and-play-logo-blue.png',
    href: 'https://www.plugandplaytechcenter.com/japan/',
    alt: 'Plug and Play partner logo',
    heightPercent: 80,
  },
  {
    filename: 'doe-logo.png',
    href: 'https://www.energy.gov/',
    alt: 'U.S. Department of Energy partner logo',
    heightPercent: 82,
  },
  {
    filename: 'wcet-logo.png',
    href: 'https://www.wcet.washington.edu/',
    alt: 'University of Washington Washington Clean Energy Testbeds partner logo',
    heightPercent: 100,
  },
  {
    filename: 'lhp-engineering-logo.png',
    href: 'https://www.lhpes.com/',
    alt: 'LHP Engineering partner logo',
    heightPercent: 88,
  },
];

const DEFAULT_PARTNER_LOGOS = PARTNER_MARQUEE_MANIFEST.map(({ filename, ...rest }) => ({
  ...rest,
  src: `/partner-logos/${filename}`,
}));

function logoItemStyle(item) {
  const pct = item.heightPercent != null ? item.heightPercent : 100;
  const scale = Math.max(0.25, Math.min(2, pct / 100));
  const style = {
    '--partner-marquee-logo-scale': String(scale),
  };

  if (item.opacity != null) {
    const opacity = Math.max(0.2, Math.min(1, item.opacity));
    style['--partner-marquee-logo-opacity'] = String(opacity);
  }

  return style;
}

/**
 * CSS-only infinite marquee: two identical groups, translate -50% on the track (see CodePen pattern).
 * @param {{ items?: PartnerMarqueeItem[], ariaLabel?: string }} props
 */
function PartnerMarquee({ items = DEFAULT_PARTNER_LOGOS, ariaLabel = 'Partner logos' }) {
  // keySuffix='' → real linked item; any suffix → aria-hidden duplicate
  const renderItem = (item, keySuffix = '') => {
    const isDuplicate = keySuffix !== '';

    return (
      <li className="partner-marquee__item" key={`${item.src}${keySuffix}`}>
        {isDuplicate ? (
          <span className="partner-marquee__dup" style={logoItemStyle(item)}>
            <img src={item.src} alt="" />
          </span>
        ) : (
          <a
            className="partner-marquee__link"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={logoItemStyle(item)}
          >
            <img src={item.src} alt={item.alt} />
          </a>
        )}
      </li>
    );
  };

  return (
    <div className="partner-marquee" role="region" aria-label={ariaLabel}>
      <div className="partner-marquee__viewport">
        {/* Four identical groups so the track always overflows the viewport on any screen width.
            The animation scrolls -25% (one group) before looping seamlessly. */}
        <div className="partner-marquee__track">
          <ul className="partner-marquee__group">
            {items.map((item) => renderItem(item))}
          </ul>
          <ul className="partner-marquee__group" aria-hidden="true">
            {items.map((item) => renderItem(item, '-dup1'))}
          </ul>
          <ul className="partner-marquee__group" aria-hidden="true">
            {items.map((item) => renderItem(item, '-dup2'))}
          </ul>
          <ul className="partner-marquee__group" aria-hidden="true">
            {items.map((item) => renderItem(item, '-dup3'))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PartnerMarquee;
export { PARTNER_MARQUEE_MANIFEST, DEFAULT_PARTNER_LOGOS };
