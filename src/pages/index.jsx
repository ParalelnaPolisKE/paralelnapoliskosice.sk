import React from 'react';

import { Posts } from 'components/Posts';
import { Centered } from 'components/Centered';
import { Container } from 'components/Container';
import { Button } from 'components/Button';

export default ({ data: { allMarkdownRemark: { edges: posts } } }) => {
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
        <Posts posts={posts} />
        <Centered>
          <Button to="/blog">Všetky príspevky</Button>
        </Centered>
      </section>
    </Container>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          ...MarkdownMetadataFragment
          ...MarkdownFrontmatterFragment
        }
      }
    }
  }
`;
