import React from 'react';
import { graphql } from 'gatsby';

import { Page } from 'components/Page';
import { PostLinks } from 'components/PostLinks';
import { PostMeta } from 'components/PostMeta';

export default ({
  data: { markdownRemark: post },
  pageContext: { prev, next },
}) => (
  <Page title={post.frontmatter.title}>
    <PostMeta
      date={post.fields.date}
      dateLocal={post.fields.dateLocal}
      tags={post.frontmatter.tags}
      author={post.frontmatter.author}
    />
    <article>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
    <PostLinks prev={prev} next={next} />
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...MarkdownMetadataFragment
      ...MarkdownFrontmatterFragment
    }
  }
`;
