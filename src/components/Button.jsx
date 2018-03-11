import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import css from './Button.module.css';

export const Button = ({ children, to }) => (
  <Link className={css.button} to={to}>
    {children}
  </Link>
);

Button.propTypes = {
  to: PropTypes.string.isRequired,
};
