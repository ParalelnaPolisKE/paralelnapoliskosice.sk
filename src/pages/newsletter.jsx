import React from 'react';

import { Page } from 'components/Page';
import { Newsletter } from 'components/Newsletter';

export default () => (
  <Page title="Newsletter" showNewsletter={false} url="/newsletter">
    <p>
      Zostaňme v kontakte - prihlás sa na odber newslettera. Z času na čas ťa
      budeme informovať o aktuálnom dianí z prostredia Paralelnej Polis.
    </p>
    <div className="bg-grey-lightest p-8">
      <Newsletter />
    </div>
  </Page>
);
