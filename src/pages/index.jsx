import React from 'react';
import Link from 'gatsby-link';

import { Container } from 'components/Container';
import { Button } from 'components/Button';

export default ({ data }) => {
  const articles = data.allMarkdownRemark.edges;

  return (
    <Container>
      <h1>Blog</h1>
      <ul>
        {articles.map(article => (
          <li key={article.node.frontmatter.title}>
            <h2>
              <Link to={article.node.fields.url}>
                {article.node.frontmatter.title}
              </Link>
            </h2>
            {article.node.excerpt}
          </li>
        ))}
      </ul>
      <Button>Vsetky prispevky</Button>
    </Container>
  );
};

export const query = graphql`
  query QueryBlogPosts {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            date
            name
            slug
            url
          }
          frontmatter {
            title
          }
          timeToRead
        }
      }
    }
  }
`;
