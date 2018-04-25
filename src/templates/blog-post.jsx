import React from 'react';

import { Container } from 'components/Container';
import { PostLinks } from 'components/PostLinks';

export default ({
  data: { markdownRemark: post },
  pathContext: { prev, next },
}) => (
  <Container>
    <article>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
    <PostLinks prev={prev} next={next} />
  </Container>
);

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...MarkdownMetadataFragment
      ...MarkdownFrontmatterFragment
    }
  }
`;
