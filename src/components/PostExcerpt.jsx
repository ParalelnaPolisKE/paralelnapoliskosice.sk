import React from 'react';
import PropTypes from 'prop-types';

import css from './Post.module.css';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { PostMeta } from 'components/PostMeta';

export const PostExcerpt = ({
  date,
  children,
  imageSizes,
  title,
  url,
  tags = [],
}) => (
  <article className="col-12 col-md-6 col-lg-4">
    <PostMeta date={date} tags={tags} />
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
