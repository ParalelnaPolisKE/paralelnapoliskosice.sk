import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const Button = ({ children, to }) => (
  <Link
    className="inline-block no-underline text-white hover:text-white bg-black hover:bg-teal-darker rounded-full py-3 px-6"
    to={to}
  >
    {children}
  </Link>
);

Button.propTypes = {
  to: PropTypes.string.isRequired,
};
