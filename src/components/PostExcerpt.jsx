import React from 'react';
import PropTypes from 'prop-types';

import css from './Post.module.css';

import Img from 'gatsby-image';
import Link from 'gatsby-link';

import { FormattedDate } from 'components/FormattedDate';

export const PostExcerpt = ({
  date,
  children,
  imageSizes,
  title,
  url,
  tags = [],
}) => (
  <article className="col-12 col-md-4">
    <ul className={css.meta}>
      <li>
        <FormattedDate>{date}</FormattedDate>
      </li>
      {tags.length > 0 && <li>{tags.join(', ')}</li>}
    </ul>
    {imageSizes && (
      <a href={url}>
        <Img sizes={imageSizes} className={css.image} />
      </a>
    )}
    <h2 className={css.title}>
      <Link to={url}>{title}</Link>
    </h2>
    {children}
  </article>
);

PostExcerpt.propTypes = {
  date: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  imageSizes: PropTypes.object,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
