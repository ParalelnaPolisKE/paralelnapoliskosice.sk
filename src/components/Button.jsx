import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// import css from './Button.module.css';

export const Button = ({ children, to }) => (
  <Link
    className="inline-block no-underline text-white hover:text-white lowercase bg-black hover:bg-grey-darkest rounded-full py-4 px-8"
    to={to}
  >
    {children}
  </Link>
);

Button.propTypes = {
  to: PropTypes.string.isRequired,
};
