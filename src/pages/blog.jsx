import React from 'react';

import { getPosts } from 'utils';

import { Button } from 'components/Button';
import { Centered } from 'components/Centered';
import { Page } from 'components/Page';
import { Posts } from 'components/Posts';

export default ({ data: { allMarkdownRemark: { edges: posts } } }) => (
  <Page title="Blog">
    <Posts posts={getPosts(posts)} />
  </Page>
);

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          ...MarkdownMetadataFragment
          ...MarkdownFrontmatterFragment
        }
      }
    }
  }
`;
