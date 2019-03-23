import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const PlacesProvider = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        allPlacesJson {
          nodes {
            name
            description
            crypto
            lat
            lng
          }
        }
      }
    `}
  >
    {data => children(data.allPlacesJson.nodes)}
  </StaticQuery>
);
