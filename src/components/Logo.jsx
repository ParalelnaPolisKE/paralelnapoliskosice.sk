import React from 'react';
import Link from 'gatsby-link';

import css from './Logo.module.css';

export const Logo = () => (
  <Link className={css.logo} to="/">
    home
  </Link>
);
