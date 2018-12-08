import { graphql } from 'gatsby';

export const markdownMetadataFragment = graphql`
  fragment MarkdownMetadataFragment on MarkdownRemark {
    fileAbsolutePath
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
      cover {
        childImageSharp {
          fluid(maxWidth: 1240, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tags
      title
      author {
        id
        email
        info
        web
        twitter
      }
    }
  }
`;
