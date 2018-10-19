import React from 'react';
import Helmet from 'react-helmet';

import { Page } from 'components/Page';

export default () => (
  <Page title="Už sme skoro tam..." showNewsletter={false}>
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>

    <p>Potrebujeme potvrdiť tvoju emailovú adresu.</p>
    <p>
      Na dokončenie prihlásenia, prosím, klikni na odkaz v emaile, ktorý sme ti
      práve poslali.
    </p>
  </Page>
);
