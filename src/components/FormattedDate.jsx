import React from 'react';
import PropTypes from 'prop-types';

export const FormattedDate = ({ children, lang = 'sk' }) => {
  const formattedDate = new Date(children).toLocaleString(lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return <time datetime={children}>{formattedDate}</time>;
};

FormattedDate.propTypes = {
  children: PropTypes.string.isRequired,
};
