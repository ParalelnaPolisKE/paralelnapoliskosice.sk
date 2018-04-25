import React from 'react';
import PropTypes from 'prop-types';

import css from './Posts.module.css';

import { PostExcerpt } from 'components/PostExcerpt';

export const Posts = ({ posts }) => (
  <div className={`${css.posts} container-fluid`}>
    <div className="row">
      {posts.map(post => (
        <PostExcerpt
          key={post.title}
          date={post.date}
          imageSizes={post.imageSizes}
          title={post.title}
          url={post.url}
        >
          {post.excerpt}
        </PostExcerpt>
      ))}
    </div>
  </div>
);

Posts.propTypes = {
  articles: PropTypes.array,
};
