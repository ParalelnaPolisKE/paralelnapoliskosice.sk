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
      className={classnames(css.top, 'p-4 sm:py-8', {
        'lg:py-0': showNewsletter,
      })}
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
      <Container className="md:flex pt-10 pb-4">
        <div className="md:w-1/2 w-full pb-4 md:pb-0">
          <strong className="text-lg">Naše uzly</strong> (nodes):
          <CryptoNodes />
          <strong className="text-lg">Adresa:</strong> <br />
          <a href="https://www.openstreetmap.org/node/691083797">
            Hlavná 36, 040 01 Košice, Slovensko
          </a>
        </div>
        <div className="md:w-1/2 w-full">
          <p>
            <strong className="text-lg">Podporte nás!</strong>
            <br />
            Budeme vďační za akúkoľvek podporu. Prijímame:
          </p>
          <CryptoAddresses />
        </div>
      </Container>

      <Container className="md:flex">
        <p className="md:w-1/2 w-full text-center md:text-left">
          <a href="https://romanvesely.com" className="font-light">
            {'<rmnvsl />'}
          </a>
        </p>

        <p className="md:w-1/2 w-full text-center md:text-right">
          <a href="https://vojdivon.sk" className="font-bold text-lg">
            vojdi von
          </a>
          !
        </p>
      </Container>
    </div>
  </footer>
);
