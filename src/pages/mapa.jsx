import React from 'react';
import { graphql } from 'gatsby';

import { Page } from 'components/Page';
import { CryptoMap } from 'components/Map';

export default ({ data }) => (
  <Page title="Mapa miest prijímajúcich krypto">
    <CryptoMap apiKey={data.site.siteMetadata.googleMapsApiKey} />
  </Page>
);

export const query = graphql`
  {
    site {
      siteMetadata {
        googleMapsApiKey
      }
    }
  }
`;
