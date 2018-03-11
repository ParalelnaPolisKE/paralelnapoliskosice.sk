import React from 'react';
import Link from 'gatsby-link';

import css from './Header.module.css';

import { Container } from './Container';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header = () => (
  <header className={css.header}>
    <Container>
      <Logo />
      <Navigation />
    </Container>
  </header>
);
