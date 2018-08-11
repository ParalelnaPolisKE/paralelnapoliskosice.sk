import React from 'react';
import PropTypes from 'prop-types';

import css from './Social.module.css';

export const Social = ({ data }) => (
  <div className={css.social}>
    {Object.keys(data).map(title => (
      <a href={data[title]} className={`${css.link} icon-${title}`} key={title}>
        <span className="sr-only">{title}</span>
      </a>
    ))}
  </div>
);

Social.propTypes = {
  data: PropTypes.object.isRequired,
};
