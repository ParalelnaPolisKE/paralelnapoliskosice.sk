import React from 'react';
import PropTypes from 'prop-types';

import css from './Posts.module.css';

import { PostExcerpt } from 'components/PostExcerpt';

export const Posts = ({ posts }) => (
  <div className={`${css.posts} container-fluid`}>
    <div className="row">
      {posts.map(article => (
        <PostExcerpt
          key={article.node.frontmatter.title}
          date={article.node.fields.date}
          imageSizes={article.node.frontmatter.cover.childImageSharp.sizes}
          title={article.node.frontmatter.title}
          url={article.node.fields.url}
        >
          {article.node.excerpt}
        </PostExcerpt>
      ))}
    </div>
  </div>
);

Posts.propTypes = {
  articles: PropTypes.array,
};
