import React from 'react';
import classnames from 'classnames';
import css from './Footer.module.css';

import { Container } from './Container';
import { CryptoAddresses } from './CryptoAddresses';
import { CryptoNodes } from './CryptoNodes';
import { Social } from './Social';
import { Newsletter } from 'components/Newsletter';

export const Footer = ({ showNewsletter }) => (
  <footer role="contentinfo">
    <div
      className={classnames(
        css.top,
        { [css.topStripe]: showNewsletter },
        'p-4 sm:py-8',
        { 'lg:py-0': showNewsletter }
      )}
    >
      <Container className={classnames({ 'lg:flex': showNewsletter })}>
        {/* Newsletter */}
        {showNewsletter && (
          <div className="w-full mb-8 lg:my-8">
            <h2 className="text-grey-darker m-0">Zostaňme v kontakte</h2>
            <p className="mb-2">Prihlás sa na odber newslettera:</p>
            <Newsletter className="flex flex-col sm:flex-row mb-2" />
            <p className="text-xs text-grey-dark m-0">
              Z času na čas ťa budeme informovať o aktuálnom dianí z prostredia
              Paralelnej Polis.
              <br />
              Žiaden spam - len relevantné informácie.
            </p>
          </div>
        )}
      </Container>
    </div>

    <div className="px-4">
      <Container className="py-4 sm:py-8 flex items-center justify-center sm:justify-start">
        <strong className="hidden sm:block sm:text-lg mr-4">Sme na</strong>{' '}
        <Social />
      </Container>
    </div>

    <div className="bg-grey-lightest text-sm px-4">
      <Container className="pt-10 pb-2 md:flex">
        <div className="md:w-1/2 w-full">
          <strong>Naše uzly</strong> (nodes):
          <CryptoNodes />
          <strong>Eshop</strong> (OpenBazaar<span className="text-grey-dark">*</span>): <br />
          <a href="ob://QmXPTqsoreix47kvwG8SYRQyNr7kTJ74LU59YbdEEUG1MS/store">
            ob://QmXPTqsoreix47kvwG8SYRQyNr7kTJ74LU59YbdEEUG1MS/store
          </a>
          <p className="text-xs text-grey-dark m-0 mt-2">
            * V blízkej budúcnosti budeme prechádzať na BTCPayServer.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <p>
            <strong>Podporte nás!</strong>
            <br />
            Budeme vďační za akúkoľvek podporu. Prijímame:
          </p>
          <CryptoAddresses />
        </div>
      </Container>
      <p className="w-full m-0 text-center">
        <a href="https://romanvesely.com" className="font-light">
          {'</rmnvsl>'}
        </a>
      </p>

      <p className="w-full text-grey-dark text-center font-bold text-lg m-0 py-8">
        <a href="https://vojdivon.sk">vojdi von</a>!
      </p>
    </div>
  </footer>
);
