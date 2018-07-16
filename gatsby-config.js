const metadata = require('./metadata')

module.exports = {
  siteMetadata: {
    ...metadata,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-74242254-3',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'showcase',
        path: `${__dirname}/data/showcase`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/data/blog`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 512,
              linkImagesToOriginal: false,
              showCaptions: true,
              backgroundColor: 'transparent',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
  ],
}
