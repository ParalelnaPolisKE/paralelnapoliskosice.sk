import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import css from './PostMeta.module.css';

import { Link } from 'gatsby';

export const PostMeta = ({ date, dateLocal, tags = [] }) => (
  <ul className={css.meta}>
    <li>
      <time dateTime={date}>{dateLocal}</time>
    </li>
    {tags.length > 0 && (
      <li>
        {tags.map((tag, i) => [
          i ? ', ' : '',
          <Link to={`/tag/${slugify(tag)}`} key={tag}>
            {tag}
          </Link>,
        ])}
      </li>
    )}
  </ul>
);

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  dateLocal: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
