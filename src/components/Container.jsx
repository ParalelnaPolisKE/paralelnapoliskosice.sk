import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ children, className = '' }) => (
  <div className={`container px-8 ${className}`}>{children}</div>
);

Container.propTypes = {
  className: PropTypes.string,
};
