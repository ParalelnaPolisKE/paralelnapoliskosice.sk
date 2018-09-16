import React from 'react';

import { NavigationButton } from './NavigationButton';

export const Navigation = () => (
  <nav
    role="navigation"
    className="flex flex-col items-end md:items-center md:flex-row"
  >
    <NavigationButton to="/">Domov</NavigationButton>
    <NavigationButton to="/o-paralelnej-polis">
      O Paralelnej Polis
    </NavigationButton>
    <NavigationButton to="/blog">Blog</NavigationButton>
    <NavigationButton to="/kontakt">Kontakt</NavigationButton>
  </nav>
);
