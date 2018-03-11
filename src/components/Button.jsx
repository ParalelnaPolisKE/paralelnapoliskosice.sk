import React from 'react';
import Link from 'gatsby-link';

import css from './Button.module.css';

export const Button = ({ children, to }) => (
  <Link className={css.button} to={to}>
    {children}
  </Link>
);
