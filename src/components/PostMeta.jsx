import React from 'react';
import PropTypes from 'prop-types';

import css from './PostMeta.module.css';

import Link from 'gatsby-link';

import { FormattedDate } from 'components/FormattedDate';

export const PostMeta = ({ date, tags = [] }) => (
  <ul className={css.meta}>
    <li>
      <FormattedDate>{date}</FormattedDate>
    </li>
    {tags.length > 0 && (
      <li>
        {tags.map((tag, i) => [
          i ? ', ' : '',
          <Link to={`tag/${tag}`}>{tag}</Link>,
        ])}
      </li>
    )}
  </ul>
);

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
