import React from 'react';
import PropTypes from 'prop-types';

export const CryptoAddresses = ({ data }) => (
  <ul className="list-reset">
    {Object.keys(data).map(title => (
      <li key={title} style={{ wordBreak: 'break-all' }}>
        <strong>{title}</strong>: {data[title]}
      </li>
    ))}
  </ul>
);

CryptoAddresses.propTypes = {
  data: PropTypes.object.isRequired,
};
