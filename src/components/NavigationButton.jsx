import React from 'react';
import { Link } from 'gatsby';
import css from './NavigationButton.module.css';

const classes = `lowercase md:mr-4 md:text-lg lg:mr-0 lg:ml-4 lg:text-right ${
  css.button
}`;
const activeClasses = `${classes} ${css.buttonActive}`;

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
