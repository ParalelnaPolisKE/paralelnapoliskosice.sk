import { graphql } from 'gatsby';

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
      author {
        id
      }
    }
  }
`;
