import React from 'react';

import css from './Footer.module.css';

import { Container } from './Container';
import { Social } from './Social';

export const Footer = () => {
  return (
    <footer role="contentinfo" className={css.footer}>
      <Container>
        <p>Podporte nas!</p>
        <p>Budeme vďační za akúkoľvek podporu.</p>
        <Social url={'#'}>github</Social>
        <p>
          designed by <a href="https://www.matusdesign.com">matusdesign.com</a>
        </p>
      </Container>
    </footer>
  );
};
