import React from 'react';

import 'css/output.css';
import 'css/global.css';
import 'css/fontello.css';
import 'css/utilities.css';

import { SEO } from 'components/SEO';
import { Header } from 'components/Header';
import { Instagram } from 'components/Instagram';
import { Footer } from 'components/Footer';
import { Newsletter } from 'components/Newsletter';

export const Layout = ({ children, showNewsletter }) => (
  <div className="flex flex-col min-h-screen">
    <SEO />

    <Header />

    <main role="main" className="flex-1 px-4 py-8 md:my-10">
      {children}
    </main>

    {showNewsletter && (
      <div className="bg-grey-lightest p-4 sm:py-8 text-center">
        <div className="container">
          <h2 className="text-grey-darker m-0">Zostaňme v kontakte</h2>
          <p>Prihlás sa na odber newslettera:</p>
          <Newsletter />
          <p className="text-xs text-grey-dark">
            Z času na čas ťa budeme informovať o aktuálnom dianí z prostredia
            Paralelnej Polis.
            <br />
            Žiaden spam - len relevantné informácie.
          </p>
        </div>
      </div>
    )}

    <Instagram />
    <Footer />
  </div>
);
