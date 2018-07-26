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
                  resolutions(width: 150, height: 150) {
                    ...GatsbyImageSharpResolutions
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
          <Img resolutions={post.image.childImageSharp.resolutions} />
        </a>
      ));

      return children(images);
    }}
  />
);

export default InstagramImages;
