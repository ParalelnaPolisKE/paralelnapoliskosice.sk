import React from 'react';
import { graphql } from 'gatsby';

import { Page } from 'components/Page';
import { Social } from 'components/Social';

export default ({
  data: {
    site: {
      siteMetadata: { social },
    },
  },
}) => (
  <Page title="Kontakt">
    <p>
      <a href="mailto:kosice@paralelnapolis.sk">kosice@paralelnapolis.sk</a>
    </p>

    <h2>Sociálne siete</h2>
    <Social data={social} />
  </Page>
);

export const query = graphql`
  {
    ...SocialFragment
  }
`;
