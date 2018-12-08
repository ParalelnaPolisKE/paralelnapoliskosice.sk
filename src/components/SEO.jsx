import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export const SEO = ({ title, description, image, isBlogPost = false }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            facebookAppID
          }
        }
      }
    `}
  >
    {({ site: { siteMetadata } }) => {
      const seo = {
        title: title || siteMetadata.title,
        description: description || siteMetadata.description,
        image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
        facebookAppID: siteMetadata.facebookAppID,
        type: isBlogPost ? 'article' : 'website',
      };

      return (
        <Helmet
          title={title}
          defaultTitle={siteMetadata.title}
          titleTemplate={`%s | ${siteMetadata.title}`}
        >
          <html lang="sk" />

          {/* Primary Meta Tags */}
          <meta name="description" content={seo.description} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content={seo.type} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          <meta property="fb:app_id" content={seo.facebookAppID} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={seo.title} />
          <meta property="twitter:description" content={seo.description} />
          <meta property="twitter:image" content={seo.image} />

          {/* PWA */}
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
      );
    }}
  </StaticQuery>
);
