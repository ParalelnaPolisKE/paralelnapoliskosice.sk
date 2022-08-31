import React from 'react';
import { graphql } from 'gatsby';

import { getPosts } from 'utils';

import { Page } from 'components/Page';
import { Posts } from 'components/Posts';
import { Pagination } from 'components/Pagination';

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
  pageContext,
}) => (
  <Page title="Blog" url="/blog">
    <Posts posts={getPosts(posts)} />
    <Pagination
      prefix="/blog"
      pagesCount={pageContext.pagesCount}
      currentPage={pageContext.currentPage}
    />
  </Page>
);

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/pages/blog/" } }
      limit: $limit
      skip: $skip
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
