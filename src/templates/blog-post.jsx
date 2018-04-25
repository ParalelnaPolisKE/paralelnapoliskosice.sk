import React from 'react';
import Helmet from 'react-helmet';

import { Page } from 'components/Page';
import { PostLinks } from 'components/PostLinks';

export default ({
  data: { markdownRemark: post },
  pathContext: { prev, next },
}) => (
  <Page title={post.frontmatter.title}>
    <article>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
    <PostLinks prev={prev} next={next} />
  </Page>
);

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...MarkdownMetadataFragment
      ...MarkdownFrontmatterFragment
    }
  }
`;
