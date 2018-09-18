import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'css/output.css';
import 'css/global.css';
import 'css/fontello.css';
import 'css/utilities.css';

import { Header } from 'components/Header';
import { Instagram } from 'components/Instagram';
import { Footer } from 'components/Footer';

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        ...SiteFragment
      }
    `}
  >
    {data => {
      const { crypto, social, title } = data.site.siteMetadata;

      return (
        <div className="flex flex-col min-h-screen">
          <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff" />
            <meta name="msapplication-TileColor" content="#ffffff" />
          </Helmet>

          <Header />

          <main role="main" className="flex-1 px-4 py-8 my-10">
            {children}
          </main>
          <Instagram />
          <Footer crypto={crypto} social={social} />
        </div>
      );
    }}
  </StaticQuery>
);
