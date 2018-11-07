import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { PostMeta } from 'components/PostMeta';

export const PostExcerpt = ({
  date,
  dateLocal,
  children,
  images,
  title,
  url,
  tags = [],
  author,
}) => (
  <article className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-8">
    <PostMeta date={date} dateLocal={dateLocal} tags={tags} author={author} />
    {images && (
      <Link to={url}>
        <Img fluid={images} className="mb-4" />
      </Link>
    )}
    <h2 className="font-medium mb-4">
      <Link to={url} className="no-underline hover:underline">
        {title}
      </Link>
    </h2>
    {children}
  </article>
);

PostExcerpt.propTypes = {
  date: PropTypes.string.isRequired,
  dateLocal: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  images: PropTypes.object,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
