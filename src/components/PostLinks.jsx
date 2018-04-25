import React from 'react';
import PropTypes from 'prop-types';

import css from './PostLinks.module.css';

import { FormattedDate } from 'components/FormattedDate';

const getDate = date => (
  <div className={css.date}>
    <FormattedDate>{date}</FormattedDate>
  </div>
);

export const PostLinks = ({ next, prev }) => (
  <div className={css.wrapper}>
    {prev && (
      <a href={prev.fields.url} className={css.prev}>
        {prev.frontmatter.title}
        {getDate(prev.fields.date)}
      </a>
    )}
    {next && (
      <a href={next.fields.url} className={css.next}>
        {next.frontmatter.title}
        {getDate(next.fields.date)}
      </a>
    )}
  </div>
);

PostLinks.propTypes = {
  next: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  prev: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
