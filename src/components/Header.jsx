import React from 'react';

import { Container } from './Container';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header = () => (
  <header className="bg-grey-lightest p-4">
    <Container>
      <div className="flex">
        <div className="flex-1 flex items-center justify-center sm:justify-start">
          <Logo />
        </div>
        <Navigation />
      </div>
    </Container>
  </header>
);
