import React from 'react';
import Helmet from 'react-helmet';

import { Page } from 'components/Page';
import { Social } from 'components/Social';

export default () => (
  <Page title="Kontakt">
    <div className="md:flex">
      <div className="md:w-1/2">
        <p>
          <a href="mailto:info@ppke.sk">info@ppke.sk</a>
        </p>

        <h2>Sociálne siete</h2>
        <Social />
      </div>

      <div className="md:w-1/2">
        <Helmet>
          <script src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1&appId=2127644397453206" />
        </Helmet>

        <div
          className="fb-page"
          data-href="https://www.facebook.com/paralelnapoliske/"
          data-tabs="timeline"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/paralelnapoliske/"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/paralelnapoliske/">
              Paralelná Polis Košice
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  </Page>
);
