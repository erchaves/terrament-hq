import React from 'react';

function normalizeSiteRoot(url) {
  if (!url || typeof url !== 'string') return '';
  return url.trim().replace(/\/$/, '');
}

const defaultProdRoot = 'https://www.terramenthq.com';
// SITE_ROOT: explicit override (any host). URL: set by Netlify to the site's primary URL.
const siteRoot =
  normalizeSiteRoot(process.env.SITE_ROOT) ||
  normalizeSiteRoot(process.env.URL) ||
  defaultProdRoot;

const stagingSiteRoot = process.env.STAGING_SITE_ROOT
  ? normalizeSiteRoot(process.env.STAGING_SITE_ROOT)
  : process.env.SITE_ROOT || process.env.URL
    ? siteRoot
    : 'http://localhost:3000';

// static.config.js
export default {
  getSiteData: () => ({
    title: 'Terrament | Modular Underground Gravity Storage',
    siteRoot: siteRoot,
    description: 'Terrament is a clean-tech company building a patented long-duration energy storage solution that reimagines gravity storage.',
    imageUrl: `${siteRoot}/terrament-logo-2026.svg`,
    imageWideUrl: `${siteRoot}/terrament-logo-2026.svg`,
    type: 'website',
  }),
  plugins: ["react-static-plugin-sass"],
  siteRoot: siteRoot,
  stagingSiteRoot: stagingSiteRoot,
  getRoutes: async ({ dev }) => [
    {
      path: '/',
      template: 'src/Components/Home',
    },
    {
      path: 'about',
      template: 'src/Components/About',
      getData: () => ({
        pageMeta: {
          title: 'Team | Terrament',
          description: 'Meet the Terrament team — founders and advisors bringing mining engineering, energy finance, and deep technology expertise to long-duration energy storage.',
        },
      }),
    },
    {
      path: 'mission',
      template: 'src/Components/Mission',
      getData: () => ({
        pageMeta: {
          title: 'Mission + Values | Terrament',
          description: 'Terrament\'s mission is to build energy technologies that unlock a sustainable and abundant energy future while creating durable value for our customers, partners, and global communities.',
        },
      }),
    },
    {
      path: 'howitworks',
      template: 'src/Components/HowItWorks',
      getData: () => ({
        pageMeta: {
          title: 'How It Works | Terrament Gravity Storage',
          description: 'Terrament\'s patented underground gravity storage achieves 20x more energy density, over 80% round-trip efficiency, and levelized costs under 8¢/kWh unsubsidized.',
        },
      }),
    },
    {
      path: 'research',
      template: 'src/Components/Research',
      getData: () => ({
        pageMeta: {
          title: 'Research | Terrament',
          description: 'Terrament\'s research into modular underground gravity storage, supported by U.S. DOE EnergyWERX grant funding and inspired by underground pumped hydro storage.',
        },
      }),
    },
    {
      path: 'contact',
      template: 'src/Components/Contact',
      getData: () => ({
        pageMeta: {
          title: 'Contact | Terrament',
          description: 'Get in touch with the Terrament team, based in Los Angeles and New York at leading clean-tech innovation hubs.',
        },
      }),
    },
    {
      path: '404',
      template: 'src/Components/404',
    },
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, routeInfo},
  }) => {
    // note: routeInfo will be undefined during local dev
    const path = routeInfo && routeInfo.path || '/';
    const canonicalUrl = `${siteRoot}/${path === '/' ? '' : path}`;

    // Per-page overrides from getData(); fall back to global siteData.
    const pageMeta = (routeInfo && routeInfo.data && routeInfo.data.pageMeta) || {};
    const title = pageMeta.title || siteData.title;
    const description = pageMeta.description || siteData.description;

    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="icon" href="/favicon/terrament-logo-favicon.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="/favicon/android-chrome-192x192.png" sizes="192x192" type="image/png" />
          <link rel="icon" href="/favicon/android-chrome-512x512.png" sizes="512x512" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          {/* Preload only woff2 — all modern browsers support it; woff is a fallback loaded by @font-face only when needed. */}
          <link rel="preload" as="font" href="/fonts/Matter-Regular.woff2" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff2" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="canonical" href={canonicalUrl} />

          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={siteData.imageWideUrl} />
          <meta property="og:type" content={siteData.type} />
          <meta property="og:url" content={canonicalUrl} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={siteData.imageWideUrl} />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-00TLPXE24D"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-00TLPXE24D');
          `}}></script>
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  },
}
