import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const InstagramImages = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 6) {
          nodes {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            caption
          }
        }
      }
    `}
    render={data => {
      const images = data.allInstaNode.nodes.map(post => (
        <a
          key={post.id}
          href={`https://www.instagram.com/p/${post.id}/`}
          title={post.caption}
        >
          <Img fluid={post.localFile.childImageSharp.fluid} />
        </a>
      ));

      return children(images);
    }}
  />
);

export default InstagramImages;
