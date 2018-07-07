module.exports = {
  siteMetadata: {
    title: 'Paralelná Polis Košice',
    description: '',
    siteUrl: '',
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
  },
  plugins: [
    // 'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'XXX',
        head: true,
      },
    },
    // 'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
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
  ],
};
