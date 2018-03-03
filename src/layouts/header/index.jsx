import React from 'react';
import Link from 'gatsby-link';
import { Navigation } from '../../components/navigation';

export const Header = () => (
  <header>
    <Link to="/">home</Link>
    <Navigation />
  </header>
);
