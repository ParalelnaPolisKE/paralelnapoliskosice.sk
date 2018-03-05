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
              <Link to={article.node.fields.url}>
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
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      totalCount
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
