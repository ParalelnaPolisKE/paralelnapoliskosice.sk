import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const getDate = (date, dateLocal) => (
  <div className="text-grey text-sm">
    <time dateTime={date}>{dateLocal}</time>
  </div>
);

export const PostLinks = ({ next, prev }) => (
  <div className="flex py-4 mt-10 relative">
    {prev && (
      <Link to={prev.fields.url} className="flex-1">
        ← {prev.frontmatter.title}
        {getDate(prev.fields.date, prev.fields.dateLocal)}
      </Link>
    )}
    {next && (
      <Link to={next.fields.url} className="flex-1 text-right">
        {next.frontmatter.title} →
        {getDate(next.fields.date, next.fields.dateLocal)}
      </Link>
    )}
  </div>
);

PostLinks.propTypes = {
  next: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  prev: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
