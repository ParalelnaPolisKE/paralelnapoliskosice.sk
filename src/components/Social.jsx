import React from 'react';
import PropTypes from 'prop-types';

import css from './Social.module.css';

export const Social = ({ data }) => (
  <div className={css.social}>
    {Object.keys(data).map(title => (
      <a href={data[title]} className={css.site} key={title}>
        <img
          className={css.socialIcon}
          src={`/assets/social/${title}.png`}
          alt={title}
        />
      </a>
    ))}
  </div>
);

Social.propTypes = {
  data: PropTypes.object.isRequired,
};
