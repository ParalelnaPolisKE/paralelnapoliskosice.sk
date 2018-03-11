import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

export const Social = ({ children, url }) => <Link to={url}>{children}</Link>;

Social.propTypes = {
  children: PropTypes.any.isRequired,
  url: PropTypes.string.isRequired,
};
