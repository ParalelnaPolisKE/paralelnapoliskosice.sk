module.exports = {
  siteMetadata: {
    title: 'Paralelná Polis Košice',
    description: '',
    siteUrl: '',
    social: {
      github: 'https://github.com/ParalelnaPolisKE',
      twitter: 'https://twitter.com/parallelpoliske',
      instagram: 'https://www.instagram.com/paralelnapoliske',
    },
  },
  plugins: [
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        head: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sitemap',
  ],
};
