import React from 'react';
import { Link } from 'gatsby';

import css from './NavigationButton.module.css';

export const NavigationButton = ({ children, to }) => (
  <Link activeClassName={css.activeButton} className={css.button} to={to}>
    {children}
  </Link>
);
