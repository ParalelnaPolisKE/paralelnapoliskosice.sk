import React from 'react';
import PropTypes from 'prop-types';

export const Social = ({ children, url }) => (
  <a href={url} style={{ marginRight: '1em' }}>
    {children}
  </a>
);

Social.propTypes = {
  children: PropTypes.any.isRequired,
  url: PropTypes.string.isRequired,
};
