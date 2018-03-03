import React from 'react';
import Link from 'gatsby-link';
import css from './NavButton.css';

export const NavButton = ({ children, to }) => (
  <Link activeClassName={css.activeButton} className={css.button} to={to}>
    {children}
  </Link>
);
