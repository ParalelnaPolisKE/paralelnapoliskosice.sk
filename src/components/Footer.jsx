import React from 'react';
import css from './Footer.module.css';

import { Container } from './Container';
import { CryptoAddresses } from './CryptoAddresses';
import { Logo } from './Logo';
import { Social } from './Social';
import { Newsletter } from 'components/Newsletter';
import InstagramImages from 'components/InstagramImages';

export const Footer = () => (
  <footer role="contentinfo">
    <div className={`${css.top} px-4 pb-8 md:pb-0`}>
      <Container className="md:flex">
        <div className="md:w-2/3 mb-4 md:mb-0 py-4 sm:py-8">
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
        <div className="bg-grey-dark md:w-1/3 px-2 py-1">
          <div className="-ml-1 -mr-1 md:-mr-3 flex flex-wrap">
            <InstagramImages>
              {images =>
                images.map((image, i) => (
                  <div key={i} className={`${css.instaImage} p-1 w-1/3`}>
                    {image}
                  </div>
                ))
              }
            </InstagramImages>
          </div>
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
