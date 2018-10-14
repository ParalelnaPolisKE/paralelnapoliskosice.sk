import React from 'react';
import Helmet from 'react-helmet';

import { Page } from 'components/Page';

export default () => (
  <Page title="Prihlásenie bolo úspešné" showNewsletter={false}>
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>

    <p>Odber newslettera je úspešne potvrdený.</p>
    <p>Ďakujeme</p>
  </Page>
);
