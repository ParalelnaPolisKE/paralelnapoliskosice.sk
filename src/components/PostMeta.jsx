import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import { Link } from 'gatsby';

export const PostMeta = ({ date, dateLocal, tags = [], author }) => (
  <div className="mb-4">
    <span className="text-grey-darker">
      <time dateTime={date}>{dateLocal}</time>
    </span>
    {author && <>, {author.id}</>}
    {tags && tags.length > 0 && (
      <ul className="list-reset text-xxs uppercase mt-1 tracking-tight">
        {tags.map(tag => (
          <li className="inline-block mr-1 mb-1" key={tag}>
            <Link
              to={`/tag/${slugify(tag)}`}
              className="text-white bg-grey hover:bg-grey-darker px-1 rounded shadow inline-block"
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  dateLocal: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
