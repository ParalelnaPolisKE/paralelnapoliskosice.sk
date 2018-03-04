import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => {
  const articles = data.allMarkdownRemark.edges;

  return (
    <div>
      <h1>Hi people</h1>
      Total posts: {data.allMarkdownRemark.totalCount}
      <ul>
        {articles.map(article => (
          <li key={article.node.frontmatter.title}>
            <h2>
              <Link to={article.node.fields.slug}>
                {article.node.frontmatter.title}
              </Link>
            </h2>
            {article.node.excerpt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query QueryBlogPosts {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;
