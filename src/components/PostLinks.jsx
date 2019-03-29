import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const PostLinks = ({ next, prev }) => (
  <div className="flex py-4 mt-10 relative">
    {prev && (
      <Link to={prev.fields.url} className="flex-1">
        <div className="text-grey-dark text-sm">Predošlý príspevok</div>
        <span>← {prev.frontmatter.title}</span>
      </Link>
    )}
    {next && (
      <Link to={next.fields.url} className="flex-1 text-right">
        <div className="text-grey-dark text-sm">Nasledujúci príspevok</div>
        <span>{next.frontmatter.title} →</span>
      </Link>
    )}
  </div>
);

PostLinks.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};
