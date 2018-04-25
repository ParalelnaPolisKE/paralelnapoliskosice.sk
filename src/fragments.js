export const siteFragment = graphql`
  fragment SiteFragment on RootQueryType {
    site {
      siteMetadata {
        title
        social {
          facebook
          github
          instagram
          twitter
        }
        crypto {
          BTC
          LTC
          XMR
          ETH
          ETC
        }
      }
    }
  }
`;

export const markdownMetadataFragment = graphql`
  fragment MarkdownMetadataFragment on MarkdownRemark {
    excerpt
    html
    timeToRead
    fields {
      date
      name
      slug
      url
    }
  }
`;

export const markdownFrontmatterFragment = graphql`
  fragment MarkdownFrontmatterFragment on MarkdownRemark {
    frontmatter {
      title
      cover {
        childImageSharp {
          sizes(maxWidth: 1240) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;
