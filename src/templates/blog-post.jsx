import React from 'react';
import { Container } from 'components/Container';

export default ({ data, pathContext }) => {
  const post = data.markdownRemark;
  const { prev, next } = pathContext;

  return (
    <Container>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Container>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
