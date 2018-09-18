import React from 'react';
import PropTypes from 'prop-types';

export const Social = ({ data }) => (
  <div className="py-4">
    {Object.keys(data).map(title => (
      <a
        href={data[title]}
        className={`icon-${title} text-2xl no-underline hover:no-underline`}
        key={title}
      >
        <span className="sr-only">{title}</span>
      </a>
    ))}
  </div>
);

Social.propTypes = {
  data: PropTypes.object.isRequired,
};
