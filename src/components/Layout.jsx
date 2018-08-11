import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'css/variables.css';
import 'css/global.css';
import 'css/fontello.css';
import 'css/utilities.css';
import css from './Layout.module.css';

import { Header } from 'components/Header';
import { Instagram } from 'components/Instagram';
import { Footer } from 'components/Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query FooQuery {
        ...SiteFragment
      }
    `}
    // Need to use render property instead of render props https://github.com/gatsbyjs/gatsby/issues/6139
    render={data => {
      const { crypto, social, title } = data.site.siteMetadata;

      return (
        <div className={css.site}>
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
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
          </Helmet>

          <Header />

          <main role="main" className={css.content}>
            {children}
          </main>
          <Instagram />
          <Footer crypto={crypto} social={social} />
        </div>
      );
    }}
  />
);

export default Layout;
