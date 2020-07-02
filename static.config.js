import React from 'react';

 const siteRoot = 'https://www.terramenthq.com';
 const stagingSiteRoot = 'http://localhost:3000';

// static.config.js
export default {
  getSiteData: () => ({
    title: 'Terrament',
    siteRoot: siteRoot,
    description: 'Terrament is an energy startup solving our trillion-dollar energy storage crisis. We are using Underground Pumped Hydro Energy Storage which is cheaper and less risky at scale than lithium ion technology.',
    imageUrl: `${siteRoot}/terrament-logo.png`,
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
      path: 'uphs',
      template: 'src/Components/Uphs',
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
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="preload" as="font" href="/fonts/Matter-Regular.woff2" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" as="font" href="/fonts/Matter-Regular.woff" type="font/woff" crossOrigin="anonymous"/>
        <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff2" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff" type="font/woff" crossOrigin="anonymous"/>

        <title>{siteData.title}</title>
        <meta name="title" content={siteData.title} />
        <meta name="description" content={siteData.description} />

        <meta property="og:title" content={siteData.title} />
        <meta property="og:description" content={siteData.description} />
        <meta property="og:image" content={siteData.imageUrl} />
        <meta property="og:type" content={siteData.type} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={siteData.title} />
        <meta property="twitter:description" content={siteData.description} />
        <meta property="twitter:image" content={siteData.imageUrl} />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}