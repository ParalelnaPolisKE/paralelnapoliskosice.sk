import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const CryptoNodes = () => (
  <ul className="list-reset">
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              nodes {
                BTC {
                  mainnet {
                    url
                    port
                  }
                }
                LTC {
                  mainnet {
                    url
                    port
                  }
                }
                XMR {
                  mainnet {
                    url
                    port
                  }
                }
              }
            }
          }
        }
      `}
    >
      {({
        site: {
          siteMetadata: { nodes },
        },
      }) =>
        Object.entries(nodes).map(([key, node], i) => (
          <li key={`${key}-node-${i}`} style={{ wordBreak: 'break-all' }}>
            <strong>{key} node</strong>: {node.mainnet.url}
            {node.mainnet.port && `:${node.mainnet.port}`}
          </li>
        ))
      }
    </StaticQuery>
  </ul>
);
