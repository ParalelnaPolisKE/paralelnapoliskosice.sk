import React from 'react';

import { Container } from './Container';
import { LogoFull } from './LogoFull';
import { Navigation } from './Navigation';

export const Header = () => (
  <header className="bg-grey-primary p-4">
    <Container>
      <div className="flex">
        <div className="flex-1">
          <LogoFull />
        </div>
        <Navigation />
      </div>
    </Container>
  </header>
);
