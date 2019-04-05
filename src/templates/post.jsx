import React from 'react';
import { graphql } from 'gatsby';

import { getPost } from 'utils';

import { Button } from 'components/Button';
import { Page } from 'components/Page';
import { PostLinks } from 'components/PostLinks';
import { PostMeta } from 'components/PostMeta';
import { Author } from 'components/Author';

export default ({ data: { markdownRemark }, pageContext: { prev, next } }) => {
  const post = getPost(markdownRemark);

  return (
    <Page
      title={post.title}
      description={post.excerpt}
      image={post.images.src}
      url={post.url}
      isArticle={true}
    >
      <PostMeta
        date={post.date}
        dateLocal={post.dateLocal}
        tags={post.tags}
        author={post.author}
      />

      <article className="max-w-md m-auto md:my-20">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Author {...post.author} />
      </article>

      <p className="text-xs mt-4 text-grey-darker text-center">
        Máme v článku chybu alebo chceš niečo doplniť?{' '}
        <a href={post.source}>Navrhni zmeny</a> cez GitHub. Všetky články môžes
        odoberať aj pomocou
        <a
          href="/blog/rss.xml"
          className="icon-rss no-underline hover:no-underline"
        >
          RSS
        </a>
        .
      </p>

      <PostLinks prev={prev} next={next} />
      <div className="text-center">
        <Button to="/blog">Všetky príspevky</Button>
      </div>
    </Page>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...MarkdownMetadataFragment
      ...MarkdownFrontmatterFragment
    }
  }
`;
