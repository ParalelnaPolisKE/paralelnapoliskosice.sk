import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const CryptoNodes = () => (
  <>
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
                    }
                  }
                  LTC {
                    mainnet {
                      url
                    }
                  }
                  XMR {
                    mainnet {
                      url
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
            </li>
          ))
        }
      </StaticQuery>
    </ul>
    <ul className="list-reset">
      <li>
        <strong>
          <a href="0387001685e8e80c0b4bced187335b38f90103be0eca541c5fd99bb83db7a30a46@88.212.32.151:9735">
            LN node
          </a>
        </strong>
      </li>
      <li>
        <strong>
          <a href="0387001685e8e80c0b4bced187335b38f90103be0eca541c5fd99bb83db7a30a46@voaignjkisfoogkbewnlwyhvl7752jhgvcmwbq5wjmwjwpgrvt6tsoid.onion:9735">
            LN TOR node
          </a>
        </strong>
      </li>
    </ul>
  </>
);
