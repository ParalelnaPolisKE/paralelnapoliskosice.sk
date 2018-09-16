import { graphql } from 'gatsby';

export const siteFragment = graphql`
  fragment SiteFragment on Query {
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
  fragment SocialFragment on Query {
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
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
    excerpt
    html
    timeToRead
    fields {
      date
      dateLocal: date(formatString: "DD. MMMM YYYY", locale: "sk")
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
