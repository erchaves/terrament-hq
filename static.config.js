import React from 'react';

 const siteRoot = 'https://www.terramenthq.com';
 const stagingSiteRoot = 'http://localhost:3000';

// static.config.js
export default {
  getSiteData: () => ({
    title: 'Terrament',
    siteRoot: siteRoot,
    description: 'Terrament is solving our multi-trillion dollar energy storage crisis.',
    imageUrl: `${siteRoot}/terrament-logo.png`,
    type: 'website',
  }),
  getData: resolvedRoute => {
    console.log(resolvedRoute);
    return {};
  },
  plugins: ["react-static-plugin-sass"],
  siteRoot: siteRoot,
  stagingSiteRoot: stagingSiteRoot,
  getRoutes: async ({ dev }) => [
    {
      path: '/',
      component: 'src/Components/Home',
    },
    {
      path: '404',
      component: 'src/Components/404',
    },
  ],
  Document: ({ Html, Head, Body, children, siteData, renderMeta, routeInfo }) => {
    // ugg, why is this not working...
    // console.log(routeInfo)
    // const path = routeInfo ? routeInfo.path : '';
    // console.log(path);

    return (
      <Html>
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

          {/* this isn't working yet... */}
          {/*
            <meta property="og:url" content={`${siteData.siteRoot}/${path}`} />
            <meta property="twitter:url" content={`${siteData.siteRoot}/${path}`} />
            <link rel="canonical" href={`${siteData.siteRoot}/${path}`} />
          */}
        </Head>
        <Body>
          {children}
         </Body>
      </Html>
    );
  },
}