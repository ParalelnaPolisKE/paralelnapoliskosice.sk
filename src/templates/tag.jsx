import React from 'react';

import { Button } from 'components/Button';
import { Centered } from 'components/Centered';
import { Page } from 'components/Page';
import { Posts } from 'components/Posts';
import { getPosts } from 'utils';

export default ({
  data: { allMarkdownRemark: { edges: posts } },
  pathContext: { tag },
}) => (
  <Page title={`Príspevky označené tagom - ${tag}`}>
    <Posts posts={getPosts(posts)} />
    <Centered>
      <Button to="/blog">Všetky príspevky</Button>
    </Centered>
  </Page>
);

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          ...MarkdownMetadataFragment
          ...MarkdownFrontmatterFragment
        }
      }
    }
  }
`;
