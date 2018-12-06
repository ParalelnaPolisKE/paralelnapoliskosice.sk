import React from 'react';

import { NavigationButton } from './NavigationButton';

export const Navigation = () => (
  <nav
    role="navigation"
    className="flex flex-col items-end md:items-center md:flex-row"
  >
    <NavigationButton to="/" exact>
      Domov
    </NavigationButton>
    <NavigationButton to="/o-paralelnej-polis">
      O Paralelnej Polis
    </NavigationButton>
    <NavigationButton to="/rychlokurz-bezpecnosti">Rýchlokurz</NavigationButton>
    <NavigationButton to="/blog">Blog</NavigationButton>
    <NavigationButton to="/kontakt">Kontakt</NavigationButton>
  </nav>
);
