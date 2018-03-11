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
