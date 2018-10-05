import React from 'react';
import { graphql } from 'gatsby';

import { Page } from 'components/Page';
import { Map } from 'components/Map';

export default ({
  data: {
    allBusinessesJson: { edges: data },
  },
}) => (
  <Page title="Mapa krypto-pozitívnych miest">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio provident
      consectetur laudantium, voluptatibus saepe minima similique tenetur
      dignissimos molestiae soluta exercitationem dicta quasi assumenda corporis
      enim doloremque, impedit nisi repellat?
    </p>
    <Map data={data} />
  </Page>
);

export const query = graphql`
  {
    allBusinessesJson {
      edges {
        node {
          id
          name
          description
          crypto
          coordinates {
            lat
            lng
          }
        }
      }
    }
  }
`;
