import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { PostMeta } from 'components/PostMeta';

export const PostExcerpt = ({
  date,
  dateLocal,
  children,
  imageSizes,
  title,
  url,
  tags = [],
}) => (
  <article className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-8">
    <PostMeta date={date} dateLocal={dateLocal} tags={tags} />
    {imageSizes && (
      <Link to={url}>
        <Img sizes={imageSizes} className="mb-4" />
      </Link>
    )}
    <h2 className="font-medium mb-4">
      <Link to={url}>{title}</Link>
    </h2>
    {children}
  </article>
);

PostExcerpt.propTypes = {
  date: PropTypes.string.isRequired,
  dateLocal: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  imageSizes: PropTypes.object,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
