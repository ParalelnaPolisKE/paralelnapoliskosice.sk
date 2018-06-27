export const siteFragment = graphql`
  fragment SiteFragment on RootQueryType {
    site {
      siteMetadata {
        title
        social {
          facebook
          twitter
          instagram
          github
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

export const socialFragment = graphql`
  fragment SocialFragment on RootQueryType {
    site {
      siteMetadata {
        social {
          facebook
          twitter
          instagram
          github
        }
      }
    }
  }
`;

export const markdownMetadataFragment = graphql`
  fragment MarkdownMetadataFragment on MarkdownRemark {
    cover: childImageSharp {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    excerpt
    html
    timeToRead
    fields {
      date
      slug
      url
    }
  }
`;

export const markdownFrontmatterFragment = graphql`
  fragment MarkdownFrontmatterFragment on MarkdownRemark {
    frontmatter {
      cover
      tags
      title
    }
  }
`;
