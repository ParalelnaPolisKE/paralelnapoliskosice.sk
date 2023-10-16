import React from 'react';

export const News = ({ posts }) => (
  <div className="flex -mx-2 flex-wrap">
    {posts.map(post => (
      <article key={post.title} className="w-full px-2 mb-4">
        <time
          dateTime={post.date}
          itemProp="datePublished"
          className="text-grey-darker"
        >
          Dátum pridania: {post.dateLocal}
        </time>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    ))}
  </div>
);
