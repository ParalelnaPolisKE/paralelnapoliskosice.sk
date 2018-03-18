import React from 'react';
import PropTypes from 'prop-types';

import css from './Container.module.css';

export const Container = ({ children, className }) => (
  <div className={className ? css.container + ' ' + className : css.container}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
};
