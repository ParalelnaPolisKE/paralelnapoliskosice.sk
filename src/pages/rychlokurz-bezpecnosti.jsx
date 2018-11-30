import React from 'react';
import { graphql, Link } from 'gatsby';
import { getPosts } from 'utils';

import { Posts } from 'components/Posts';
import { Page } from 'components/Page';

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Page title="Rýchlokurz digitálnej bezpečnosti" showNewsletter={true}>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam
      temporibus quas nemo repellendus ab doloribus, quisquam est dolore maiores
      harum molestiae esse necessitatibus, at eaque? Hic pariatur rem
      cupiditate.
    </p>

    <div className="flex flex-wrap -mx-2">
      {getPosts(posts).map((post, i) => (
        <div className="sm:w-1/2 p-2">
          <div className="bg-grey-lighter p-4">
            <h2>
              <Link to={post.url}>
                <span className="text-grey sm:text-4xl font-bold -mt-3 sm:float-right">
                  {i + 1}.
                </span>{' '}
                {post.title}
              </Link>
            </h2>
            <p className="text-sm m-0">{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  </Page>
);

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: "oznamy" } } }) {
      edges {
        node {
          ...MarkdownMetadataFragment
          ...MarkdownFrontmatterFragment
        }
      }
    }
  }
`;
