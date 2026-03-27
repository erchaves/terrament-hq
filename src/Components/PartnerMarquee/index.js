import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './index.scss';

// useLayoutEffect warns on SSR/static export; measurement only needed in the browser.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * @typedef {Object} PartnerMarqueeItem
 * @property {string} href
 * @property {string} src
 * @property {string} alt
 * @property {number} [heightPercent] — Percent of `$partner-marquee-logo-height` / `$partner-marquee-logo-max-height` (default 100). Lower for wide marks that read small.
 * @property {number} [opacity] — Visual weight from 0 to 1 (default 1). Values below 1 soften marks that read too dark or heavy vs. the strip.
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
    const o = Math.max(0.2, Math.min(1, item.opacity));
    style['--partner-marquee-logo-opacity'] = String(o);
  }
  return style;
}

/**
 * Distance to shift so the duplicate group lines up with the first (one full loop).
 * With flex gap between the two groups, translateX(-50%) is wrong (total width is 2W + gap).
 */
function measureLoopShiftPx(firstGroupEl, secondGroupEl) {
  if (!firstGroupEl || !secondGroupEl) return null;
  const dx = secondGroupEl.offsetLeft - firstGroupEl.offsetLeft;
  return dx > 0 ? -dx : null;
}

/**
 * Full-bleed horizontal logo strip: two identical groups + CSS var for exact loop distance.
 * @param {{ items?: PartnerMarqueeItem[], ariaLabel?: string }} props
 */
function PartnerMarquee({ items = DEFAULT_PARTNER_LOGOS, ariaLabel = 'Partner logos' }) {
  const trackRef = useRef(null);
  const firstGroupRef = useRef(null);
  const secondGroupRef = useRef(null);
  const [loopShiftPx, setLoopShiftPx] = useState(null);

  useIsomorphicLayoutEffect(() => {
    const g1 = firstGroupRef.current;
    const g2 = secondGroupRef.current;
    const track = trackRef.current;
    if (!g1 || !g2 || !track) return undefined;

    const update = () => {
      setLoopShiftPx(measureLoopShiftPx(g1, g2));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(g1);
    ro.observe(g2);
    ro.observe(track);
    return () => ro.disconnect();
  }, [items]);

  const trackStyle =
    loopShiftPx != null ? { '--partner-marquee-shift': `${loopShiftPx}px` } : undefined;

  return (
    <div className="partner-marquee" role="region" aria-label={ariaLabel}>
      <div className="partner-marquee__viewport">
        <div className="partner-marquee__track" ref={trackRef} style={trackStyle}>
          <div className="partner-marquee__group" ref={firstGroupRef}>
            {items.map((item) => (
              <a
                key={item.src}
                className="partner-marquee__link"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={logoItemStyle(item)}
              >
                <img src={item.src} alt={item.alt} />
              </a>
            ))}
          </div>
          <div
            className="partner-marquee__group"
            ref={secondGroupRef}
            aria-hidden="true"
          >
            {items.map((item) => (
              <span
                key={`marquee-dup-${item.src}`}
                className="partner-marquee__dup"
                style={logoItemStyle(item)}
              >
                <img src={item.src} alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerMarquee;
export { PARTNER_MARQUEE_MANIFEST, DEFAULT_PARTNER_LOGOS };
