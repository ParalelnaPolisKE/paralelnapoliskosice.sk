import React from 'react';

import { getPosts } from 'utils';

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
          Tato cas sa nevie na nejaku cast priamo odvolat? Napriklad v sekcii
          o polis bude cast Kosice, toto by tu mohlo z neho automaticky tahat ...
        </p>
        <Button to="/o-paralelnej-polis">Viac info</Button>
      </section>
      <section>
        <h1>Blog</h1>
        <Posts posts={getPosts(posts)} />
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
