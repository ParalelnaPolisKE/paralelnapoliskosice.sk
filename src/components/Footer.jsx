import React from 'react';
import PropTypes from 'prop-types';

import css from './Footer.module.css';

import { Centered } from './Centered';
import { Container } from './Container';
import { CryptoAddresses } from './CryptoAddresses';
import { Logo } from './Logo';
import { Social } from './Social';

export const Footer = ({ crypto, social }) => (
  <footer role="contentinfo" className={css.footer}>
    <Container className={css.container}>
      <div className={css.content}>
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
      </div>

      <Centered>
        <Logo />
      </Centered>
    </Container>
  </footer>
);

Footer.propTypes = {
  crypto: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
};
