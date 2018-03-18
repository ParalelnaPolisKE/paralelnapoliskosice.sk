import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import { Centered } from 'components/Centered';
import { Container } from 'components/Container';
import { Button } from 'components/Button';

export default ({ data }) => {
  const articles = data.allMarkdownRemark.edges;

  return (
    <Container>
      <section>
        <h1>O Paralelnej Polis</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          dolor et ad accusamus quibusdam nostrum ipsam harum consequuntur
          architecto, dolorum ipsa tempora aliquid labore consectetur asperiores
          vel libero maiores distinctio.
        </p>
        <Button to="/o-paralelnej-polis">Viac info</Button>
      </section>
      <section>
        <h1>Blog</h1>
        <ul>
          {articles.map(article => (
            <li key={article.node.frontmatter.title}>
              <h2>
                <Link to={article.node.fields.url}>
                  {article.node.frontmatter.title}
                </Link>
              </h2>
              <Img
                title="Header image"
                alt="Greek food laid out on table"
                sizes={article.node.frontmatter.cover.childImageSharp.sizes}
              />
              {article.node.excerpt}
            </li>
          ))}
        </ul>
        <Centered>
          <Button to="/blog">Všetky príspevky</Button>
        </Centered>
      </section>
    </Container>
  );
};

export const query = graphql`
  query BlogPostsQuery {
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
            cover {
              childImageSharp {
                sizes(maxWidth: 1240) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`;
