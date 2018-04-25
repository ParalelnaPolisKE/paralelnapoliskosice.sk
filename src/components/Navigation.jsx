import React from 'react';

import css from './Navigation.module.css';

import { NavigationButton } from './NavigationButton';

export const Navigation = () => (
  <nav role="navigation" className={css.navigation}>
    <NavigationButton to="/" exact>
      Domov
    </NavigationButton>
    <NavigationButton to="/o-paralelnej-polis">
      O Paralelnej Polis
    </NavigationButton>
    <NavigationButton to="/blog">Blog</NavigationButton>
    <NavigationButton to="/kontakt">Kontakt</NavigationButton>
  </nav>
);
