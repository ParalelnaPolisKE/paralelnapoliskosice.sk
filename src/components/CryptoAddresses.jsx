import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const CryptoAddresses = () => (
  <ul className="list-reset">
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              crypto {
                BTC
                LTC
                XMR
                ETH
                ETC
              }
            }
          }
        }
      `}
    >
      {({
        site: {
          siteMetadata: { crypto },
        },
      }) =>
        Object.keys(crypto).map(title => (
          <li key={title} style={{ wordBreak: 'break-all' }}>
            <strong>{title}</strong>: {crypto[title]}
          </li>
        ))
      }
    </StaticQuery>
  </ul>
);
