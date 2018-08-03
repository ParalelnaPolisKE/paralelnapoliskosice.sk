import React from 'react';
import { graphql } from 'gatsby';

import { Page } from 'components/Page';
import { Social } from 'components/Social';
import css from 'pages/kontakt.module.css';

export default ({
  data: {
    site: {
      siteMetadata: { social },
    },
  },
}) => (
  <Page title="Kontakt">
    <div className={css.email}>
      <a href="mailto:kosice@paralelnapolis.sk">kosice@paralelnapolis.sk</a>
    </div>
    <div>
      <h2>Sociálne siete</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat
        cumque, ratione quidem quod alias, iste, voluptatem explicabo qui
        laudantium impedit quis? Eius odio suscipit explicabo dicta, dolore
        facere maxime.
      </p>
      <ul>
        <li>srgsg</li>
        <li />
        <li />
      </ul>
      <Social data={social} />
    </div>
  </Page>
);

export const query = graphql`
  query ContactsQuery {
    ...SocialFragment
  }
`;
