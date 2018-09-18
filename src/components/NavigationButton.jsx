import React from 'react';
import { Link } from 'gatsby';

const classes = 'uppercase md:text-lg md:p-4';
const activeClasses = `${classes} font-bold`;

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
