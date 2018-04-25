import React from 'react';
import PropTypes from 'prop-types';

import css from './CryptoAddresses.module.css';

export const CryptoAddresses = ({ data }) => (
  <ul className={css.addresses}>
    {Object.keys(data).map(title => (
      <li key={title} className={css.address}>
        <strong>{title}</strong>: {data[title]}
      </li>
    ))}
  </ul>
);

CryptoAddresses.propTypes = {
  data: PropTypes.object.isRequired,
};
