import React from 'react';
import classnames from 'classnames';
import css from './Footer.module.css';

import { Container } from './Container';
import { CryptoAddresses } from './CryptoAddresses';
import { Social } from './Social';
import { Newsletter } from 'components/Newsletter';
import InstagramImages from 'components/InstagramImages';

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
          <div className="lg:w-2/3 mb-8 lg:my-8">
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
        {/* Instagram */}
        <div
          className={classnames(
            'bg-grey-dark p-1',
            showNewsletter && 'lg:w-1/3 lg:flex'
          )}
        >
          <div
            className={classnames(
              'flex flex-wrap',
              showNewsletter && 'lg:content-center lg:w-full'
            )}
          >
            <InstagramImages>
              {images =>
                images.map((image, i) => (
                  <div
                    key={i}
                    className={classnames(
                      css.instaImage,
                      'p-1 w-1/3 sm:w-1/6',
                      { 'lg:w-1/3': showNewsletter }
                    )}
                  >
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
        <strong className="hidden sm:block sm:text-lg mr-4">Sme na</strong>{' '}
        <Social />
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

          <p>
            <a href="https://romanvesely.com" className="font-light">
              {'</rmnvsl>'}
            </a>
          </p>
        </div>

        <div className="text-grey-dark text-center text-xs md:ml-8">
          vojdi von...
        </div>
      </Container>
    </div>
  </footer>
);
