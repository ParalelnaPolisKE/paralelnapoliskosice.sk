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
    {tags &&
      tags.length > 0 && (
        <ul className="list-reset text-xs uppercase m-0">
          {tags.map((tag, i) => (
            <li className="inline">
              {i ? ', ' : ''}
              <Link to={`/tag/${slugify(tag)}`} key={tag}>
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
