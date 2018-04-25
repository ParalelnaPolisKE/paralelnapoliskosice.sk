import React from 'react';
import Link from 'gatsby-link';

import css from './NavigationButton.module.css';

export const NavigationButton = ({ exact = false, children, to }) => (
  <Link
    activeClassName={css.activeButton}
    className={css.button}
    to={to}
    exact={exact}
  >
    {children}
  </Link>
);
