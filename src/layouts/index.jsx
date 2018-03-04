import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { Header, Footer } from 'components/layout';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'styles/global.css';

export default ({ children, data }) => {
  const title = data.site.siteMetadata.title;
  const articles = data.allMarkdownRemark.edges;

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      {children()}
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
      <Footer />
    </div>
  );
};

export const query = graphql`
  query Query {
    site {
      siteMetadata {
        title
        social {
          facebook
          github
          instagram
          twitter
        }
      }
    }
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
