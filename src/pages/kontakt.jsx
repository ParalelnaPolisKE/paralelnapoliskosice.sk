import React from 'react';

import { Page } from 'components/Page';
import { Social } from 'components/Social';
import css from 'pages/kontakt.module.css';

export default ({ data: { site: { siteMetadata: { social } } } }) => (
  <Page title="Kontakt">
    <div className={css.email}>
      <a href="mailto:kosice@paralelnapolis.sk">kosice@paralelnapolis.sk</a>
    </div>
    <div>
      <h2>Sociálne siete</h2>
      <Social data={social} />
    </div>
  </Page>
);

export const query = graphql`
  query ContactsQuery {
    ...SocialFragment
  }
`;
