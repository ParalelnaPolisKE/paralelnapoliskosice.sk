import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const InstagramImages = ({ children }) => (
  <StaticQuery
    query={graphql`
      query InstagramPostsQuery {
        allInstagramJson {
          edges {
            node {
              id
              link
              time
              image {
                childImageSharp {
                  fluid(maxWidth: 150, maxHeight: 150, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const images = data.allInstagramJson.edges.map(({ node: post }) => (
        <a key={post.id} href={post.link} title={post.time}>
          <Img fluid={post.image.childImageSharp.fluid} />
        </a>
      ));

      return children(images);
    }}
  />
);

export default InstagramImages;
