import React from 'react';

import css from './Header.module.css';

import { Container } from './Container';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header = () => (
  <header className={css.header}>
    <Container>
      <div className={css.container}>
        <div className={css.logo}>
          <Logo />
        </div>
        <Navigation />
      </div>
    </Container>
  </header>
);
