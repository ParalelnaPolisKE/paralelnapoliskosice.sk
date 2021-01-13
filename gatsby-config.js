require('dotenv').config();

const TailwindExtractor = require('./utils/purgecss-tailwind-extractor');

const siteMetadata = {
  title: 'Paralelná Polis Košice',
  description:
    'Paralelná Polis Košice je zameraná na vzdelávanie, objavovanie, tvorenie lepších systémov, experimentovanie a aplikáciu kryptomien a spojených technológií do bežného života. Je tu pre všetkých, ktorí majú záujem fungovať slobodnejšie a nezávislejšie.',
  siteUrl: 'https://www.paralelnapoliskosice.sk',
  image: '/ppke-temp.jpg',
  email: 'info@ppke.sk',
  social: {
    facebook: 'https://www.facebook.com/paralelnapoliske',
    github: 'https://github.com/ParalelnaPolisKE',
    instagram: 'https://www.instagram.com/paralelnapoliske',
    youtube: 'https://www.youtube.com/channel/UCC90ybnmSHgleXJaWPces9g',
    twitter: 'https://twitter.com/parallelpoliske',
    rss: '/blog/rss.xml',
  },
  crypto: {
    BTC: '1KGB5uxAZrFYrHKsydLvfhwT4VULE1tunA',
    LTC: 'Lha1KBxm5wgtTEJdk1tyBhWgAuxJ2zV9zX',
    XMR:
      '49XCoar5nDSiz3QfSa25jyJ5KJSc95pkpS8YXWVoB3TY8LDVjEjhUoZRRQL5sidfLB6cUWnxH2Tv5VbGKzxxieJqQPPHuea',
    ETH: '0x610825C5DFcbc72E284E5a5F381f4fd728263706',
    ETC: '0x1934945354BDe5b34F0c68E6AA78492050856D38',
  },
  nodes: {
    BTC: {
      mainnet: {
        url: "btc.ppke.sk",
        port: ""
      }
    },
    LTC: {
      mainnet: {
        url: "ltc.ppke.sk",
        port: ""
      }
    },
    XMR: {
      mainnet: {
        url: "xmr.ppke.sk",
        port: "18081"
      }
    },
  },
  facebookAppID: '2127644397453206',
  mailchimpUrl:
    'https://paralelnapoliskosice.us19.list-manage.com/subscribe/post?u=8affbd08463d07e25a8bbcca4&id=b02c302d92',
  joinUsFormAction:
    'https://briskforms.com/go/410d7fbf05f2283f04c8a02e86b531be',
};

const plugins = [
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
                url: `${site.siteMetadata.siteUrl}/blog${node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}/blog${node.fields.slug}`,
                author: node.frontmatter.author.id,
                custom_elements: [
                  {
                    pubDate: new Date(node.fields.date).toUTCString(),
                  },
                ],
              };
            });
          },
          setup: ({
            query: {
              site: { siteMetadata },
            },
          }) => {
            return {
              title: `${siteMetadata.title} - Blog`,
              description: siteMetadata.description,
              feed_url: siteMetadata.siteUrl + `/blog/rss.xml`,
              site_url: siteMetadata.siteUrl,
            };
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
          output: '/blog/rss.xml',
          title: `${siteMetadata.title} - Blog`,
        },
      ],
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
      name: 'assets',
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
  'gatsby-plugin-netlify-cms-paths',
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-plugin-netlify-cms-paths',
        {
          resolve: 'gatsby-remark-images',
          options: {
            linkImagesToOriginal: false,
            maxWidth: 1200,
            quality: 75,
          },
        },
        {
          resolve: 'gatsby-remark-autolink-headers',
          options: {
            removeAccents: true,
          },
        },
      ],
    },
  },
  'gatsby-plugin-catch-links',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-mdx',
    options: {
      defaultLayouts: {
        default: require.resolve('./src/templates/page.jsx'),
      },
    },
  },
  {
    resolve: 'gatsby-plugin-purgecss',
    options: {
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['js', 'jsx'],
        },
      ],
      whitelist: ['___gatsby', 'ol', 'h2', 'h3'],
      whitelistPatterns: [/^icon\-/, /^marker/],
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
  // 'gatsby-plugin-offline', // Disabled as new content need hard refresh
  'gatsby-plugin-remove-serviceworker',
  // Disabled until FB API token resolved
  // {
  //   resolve: `gatsby-source-facebook`,
  //   options: {
  //     places: ['782479115289415'], // Can be either a numeric ID or the URL ID
  //     params: {
  //       fields:
  //         'events { id, name, description, start_time, end_time, place { id, name } }',
  //     },
  //     key: process.env.FACEBOOK_ACCESS_TOKEN,
  //     version: '7.0',
  //   },
  // },
  // Disabled until FB Instagram API works as expected again...
  // {
  //   resolve: 'gatsby-source-instagram',
  //   options: {
  //     username: '7188082683',
  //   },
  // },
  'gatsby-plugin-react-leaflet',
];

const mapping = {
  'MarkdownRemark.frontmatter.author': 'AuthorJson',
};

/**
 * Adds Google Analytics only to live production site
 *
 * `CONTEXT` comes from Netlify build process
 * @see https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
 */
if (process.env.CONTEXT === 'production') {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-124036846-1',
      head: true,
      respectDNT: true,
    },
  });
}

module.exports = {
  pathPrefix: `/blog`,
  siteMetadata,
  plugins,
  mapping,
};
