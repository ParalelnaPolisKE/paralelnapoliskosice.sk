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
  },
  plugins: [
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'GOOGLE_ANALYTICS_TRACKING_ID',
        head: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog/`,
      },
    },
  ],
};
