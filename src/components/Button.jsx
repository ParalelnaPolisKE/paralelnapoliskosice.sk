import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const Button = ({ children, to }) => {
  const className =
    'text-xs font-semibold uppercase inline-block no-underline hover:no-underline text-white hover:text-white bg-black hover:bg-grey-darker rounded-full py-3 px-6';

  return to.startsWith('http') ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
};
