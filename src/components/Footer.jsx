import React from 'react';

import css from './Footer.module.css';

import { Container } from './Container';
import { CryptoAddresses } from './CryptoAddresses';
import { Social } from './Social';

export const Footer = ({ crypto, social }) => {
  return (
    <footer role="contentinfo" className={css.footer}>
      <Container>
        <p>
          <strong>Podporte nás!</strong>
          <br />
          Budeme vďační za akúkoľvek podporu. Prijímame:
        </p>

        <CryptoAddresses data={crypto} />
        <Social data={social} />

        <p className={css.author}>
          designed by <a href="https://www.matusdesign.com">matusdesign.com</a>
        </p>
      </Container>
    </footer>
  );
};
