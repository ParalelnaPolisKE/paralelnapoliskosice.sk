import React from 'react';

import { Container } from './Container';
import { CryptoAddresses } from './CryptoAddresses';
import { Logo } from './Logo';
import { Social } from './Social';
import { Newsletter } from 'components/Newsletter';
import { Instagram } from 'components/Instagram';

export const Footer = () => (
  <footer role="contentinfo">
    <div
      className="p-4 sm:py-8"
      style={{
        background: 'linear-gradient(to right, #f8fafc 66%, #8795a1 66%)',
      }}
    >
      <Container className="flex">
        <div className="w-2/3">
          <div className="bg-grey-lightest">
            <h2 className="text-grey-darker m-0">Zostaňme v kontakte</h2>
            <p className="mb-2">Prihlás sa na odber newslettera:</p>
            <Newsletter className="flex flex-col sm:flex-row lex-wrap" />
            <p className="text-xs text-grey-dark mt-2">
              Z času na čas ťa budeme informovať o aktuálnom dianí z prostredia
              Paralelnej Polis.
              <br />
              Žiaden spam - len relevantné informácie.
            </p>
          </div>
        </div>
        <div className="w-1/3 bg-grey-dark">
          <Instagram />
        </div>
      </Container>
    </div>

    <div className="px-4">
      <Container className="py-4 sm:py-8 flex items-center justify-center sm:justify-start">
        <strong className="sm:text-lg mr-4">Nájdete nás</strong> <Social />
      </Container>
    </div>

    <div className="bg-grey-lightest text-sm px-4">
      <Container className="py-10 md:flex md:items-center">
        <div className="flex-1">
          <p>
            <strong>Podporte nás!</strong>
            <br />
            Budeme vďační za akúkoľvek podporu. Prijímame:
          </p>

          <CryptoAddresses />

          <p className="font-light">
            designed by{' '}
            <a href="https://www.matusdesign.com">matusdesign.com</a>
          </p>
        </div>

        <div className="text-center">
          <Logo />
        </div>
      </Container>
    </div>
  </footer>
);
