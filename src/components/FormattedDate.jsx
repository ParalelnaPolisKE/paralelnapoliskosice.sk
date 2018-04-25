import React from 'react';
import PropTypes from 'prop-types';

export const FormattedDate = ({ children, lang = 'sk' }) => {
  const formattedDate = new Date(children).toLocaleString(lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return <span>{formattedDate}</span>;
};

FormattedDate.propTypes = {
  children: PropTypes.string.isRequired,
};
