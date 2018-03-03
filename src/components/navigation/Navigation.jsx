import React from 'react';
import { NavButton } from './';

export const Navigation = () => (
  <nav role="navigation">
    <NavButton to="/o-paralelnej-polis">O Paralelnej Polis</NavButton>
    <NavButton to="/podporit">Podporiť</NavButton>
    <NavButton to="/kontakt">Kontakt</NavButton>
  </nav>
);
