import React from 'react';
import { graphql } from 'gatsby';

import { getPosts } from 'utils';

import { Page } from 'components/Page';
import { Posts } from 'components/Posts';

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Page title="Blog">
    <Posts posts={getPosts(posts)} />
  </Page>
);

export const query = graphql`
  {
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
