import React from 'react';

const siteRoot = 'https://www.terramenthq.com';
const stagingSiteRoot = 'http://localhost:3000';

// static.config.js
export default {
  getSiteData: () => ({
    title: 'Terrament | Modular Underground Gravity Storage',
    siteRoot: siteRoot,
    description: 'Terrament builds grid-scale energy storage with underground gravity batteries. We maximize gravity storage with a modular design combined with deep mine shafts.',
    imageUrl: `${siteRoot}/terrament-logo.png`,
    imageWideUrl: `${siteRoot}/logo-combined.png`,
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
    },
    {
      path: 'mission',
      template: 'src/Components/Mission',
    },
    {
      path: 'howItWorks',
      template: 'src/Components/HowItWorks',
    },
    {
      path: 'research',
      template: 'src/Components/Research',
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

    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <link rel="preload" as="font" href="/fonts/Matter-Regular.woff2" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-Regular.woff" type="font/woff" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff2" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff" type="font/woff" crossOrigin="anonymous"/>
          <link rel="canonical" href={canonicalUrl} />


          <title>{siteData.title}</title>
          <meta name="title" content={siteData.title} />
          <meta name="description" content={siteData.description} />

          <meta property="og:title" content={siteData.title} />
          <meta property="og:description" content={siteData.description} />
          <meta property="og:image" content={siteData.imageWideUrl} />
          <meta property="og:type" content={siteData.type} />
          <meta property="og:url" content={canonicalUrl} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={siteData.title} />
          <meta property="twitter:description" content={siteData.description} />
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
