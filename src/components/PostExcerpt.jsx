import React from 'react';
import PropTypes from 'prop-types';

import css from './Post.module.css';

import Img from 'gatsby-image';
import Link from 'gatsby-link';

export const PostExcerpt = ({ date, children, imageSizes, title, url }) => {
  const category = 'kategoria';
  return (
    <article className="col-12 col-md-4">
      <ul className={css.meta}>
        <li>
          {new Date(date).toLocaleString('sk', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </li>
        <li>{category}</li>
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
};

PostExcerpt.propTypes = {
  date: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  imageSizes: PropTypes.object,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
