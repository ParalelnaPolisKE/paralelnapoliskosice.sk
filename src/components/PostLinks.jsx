import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import css from './PostLinks.module.css';

const getDate = (date, dateLocal) => (
  <div className="text-grey text-sm">
    <time dateTime={date}>{dateLocal}</time>
  </div>
);

export const PostLinks = ({ next, prev }) => (
  <div className="flex py-4 mt-10 relative">
    {prev && (
      <Link to={prev.fields.url} className={css.prev}>
        {prev.frontmatter.title}
        {getDate(prev.fields.date, prev.fields.dateLocal)}
      </Link>
    )}
    {next && (
      <Link to={next.fields.url} className={css.next}>
        {next.frontmatter.title}
        {getDate(next.fields.date, next.fields.dateLocal)}
      </Link>
    )}
  </div>
);

PostLinks.propTypes = {
  next: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  prev: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
