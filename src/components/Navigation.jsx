import React from 'react';

import { NavigationButton } from './NavigationButton';

export const Navigation = () => (
  <nav role="navigation">
    <NavigationButton to="/o-paralelnej-polis">
      O Paralelnej Polis
    </NavigationButton>
    <NavigationButton to="/blog">Blog</NavigationButton>
    <NavigationButton to="/kontakt">Kontakt</NavigationButton>
  </nav>
);
