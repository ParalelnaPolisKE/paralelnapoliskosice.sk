import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import { Link } from 'gatsby';

export const PostMeta = ({ date, dateLocal, tags = [] }) => (
  <div className="mb-4">
    <span className="text-grey-darker">
      <time dateTime={date}>{dateLocal}</time>
    </span>
    {' - '}
    <ul className="inline-block p-0">
      {tags.length > 0 && (
        <li className="inline">
          {tags.map((tag, i) => [
            i ? ', ' : '',
            <Link to={`/tag/${slugify(tag)}`} key={tag}>
              {tag}
            </Link>,
          ])}
        </li>
      )}
    </ul>
  </div>
);

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  dateLocal: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
