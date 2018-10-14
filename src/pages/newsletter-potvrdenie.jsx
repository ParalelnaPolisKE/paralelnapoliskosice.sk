import React from 'react';

import { Page } from 'components/Page';

export default () => (
  <Page title="Už sme skoro tam..." showNewsletter={false}>
    <p>Potrebujeme potvrdiť tvoju emailovú adresu.</p>
    <p>
      Na dokončenie prihlásenia, prosím, klikni na link v emaily, ktorý sme ti
      práve poslali.
    </p>
  </Page>
);
