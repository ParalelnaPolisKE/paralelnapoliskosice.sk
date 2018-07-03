import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import css from './PostMeta.module.css';

import { Link } from 'gatsby';

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
          <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>,
        ])}
      </li>
    )}
  </ul>
);

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
