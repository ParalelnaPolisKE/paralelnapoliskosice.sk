const TailwindExtractor = require('./utils/purgecss-tailwind-extractor');

module.exports = {
  siteMetadata: {
    title: 'Paralelná Polis Košice',
    description: 'Ostrov slobody a nezávislosti',
    siteUrl: 'https://www.paralelnapoliskosice.sk',
    email: 'info@ppke.sk',
    social: {
      facebook: 'https://www.facebook.com/paralelnapoliske',
      github: 'https://github.com/ParalelnaPolisKE',
      instagram: 'https://www.instagram.com/paralelnapoliske',
      twitter: 'https://twitter.com/parallelpoliske',
    },
    crypto: {
      BTC: '1KGB5uxAZrFYrHKsydLvfhwT4VULE1tunA',
      LTC: 'Lha1KBxm5wgtTEJdk1tyBhWgAuxJ2zV9zX',
      XMR:
        '49XCoar5nDSiz3QfSa25jyJ5KJSc95pkpS8YXWVoB3TY8LDVjEjhUoZRRQL5sidfLB6cUWnxH2Tv5VbGKzxxieJqQPPHuea',
      ETH: '0x610825C5DFcbc72E284E5a5F381f4fd728263706',
      ETC: '0x1934945354BDe5b34F0c68E6AA78492050856D38',
    },
    mailchimpUrl:
      'https://paralelnapoliskosice.us19.list-manage.com/subscribe/post?u=8affbd08463d07e25a8bbcca4&id=b02c302d92',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(({ node }) => {
                return {
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  author: node.frontmatter.author.id,
                  custom_elements: [
                    {
                      pubDate: new Date(node.fields.date).toUTCString(),
                    },
                  ],
                };
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [fields___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      fields {
                        date
                        slug
                      }
                      frontmatter {
                        title
                        author {
                          id
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-124036846-1',
        head: true,
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static/assets',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    // 'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['js', 'jsx'],
          },
        ],
        ignore: ['fontello.css'],
        whitelist: ['___gatsby'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Paralelná Polis Košice',
        short_name: 'PPKE',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorJson',
  },
};
