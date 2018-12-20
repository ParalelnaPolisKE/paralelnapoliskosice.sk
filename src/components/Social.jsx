import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const Social = () => (
  <div className="py-4">
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              social {
                facebook
                twitter
                instagram
                youtube
                github
                rss
              }
            }
          }
        }
      `}
    >
      {({
        site: {
          siteMetadata: { social },
        },
      }) =>
        Object.keys(social).map(title => (
          <a
            href={social[title]}
            className={`icon-${title} text-black text-2xl no-underline hover:no-underline`}
            key={title}
          >
            <span className="sr-only">{title}</span>
          </a>
        ))
      }
    </StaticQuery>
  </div>
);
