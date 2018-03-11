import React from 'react';
import Link from 'gatsby-link';

import css from './Header.module.css';

import { Container } from './Container';
import { Navigation } from './Navigation';

export const Header = () => (
  <header className={css.header}>
    <Container>
      <Link to="/">home</Link>
      <Navigation />
    </Container>
  </header>
);
