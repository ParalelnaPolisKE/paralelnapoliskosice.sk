import React from 'react';

import css from './Footer.module.css';

import { Container } from './Container';
import { Social } from './Social';

export const Footer = ({ crypto, social }) => {
  return (
    <footer role="contentinfo" className={css.footer}>
      <Container>
        <p>Podporte nas!</p>
        <p>Budeme vďační za akúkoľvek podporu.</p>
        <ul>
          {Object.keys(crypto).map(title => (
            <li>
              <code>
                <strong>{title}</strong>: {crypto[title]}
              </code>
            </li>
          ))}
        </ul>

        {Object.keys(social).map(title => (
          <Social url={social[title]}>{title}</Social>
        ))}
        <p>
          designed by <a href="https://www.matusdesign.com">matusdesign.com</a>
        </p>
      </Container>
    </footer>
  );
};
