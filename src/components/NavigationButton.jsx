import React from 'react';
import { Link } from 'gatsby';
import css from './NavigationButton.module.css';

const classes = `${css.button} uppercase md:text-lg md:p-4`;
const activeClasses = `${classes} text-grey-darker font-semibold`;

const isActive = ({ isCurrent }) =>
  isCurrent ? { className: activeClasses } : {};

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: activeClasses } : {};

export const NavigationButton = ({ children, to, exact = false }) => (
  <Link
    getProps={exact ? isActive : isPartiallyActive}
    className={classes}
    to={to}
  >
    {children}
  </Link>
);
