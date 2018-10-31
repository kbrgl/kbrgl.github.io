module.exports = {
  siteMetadata: {
    socialMedia: [
      {
        name: 'GitHub',
        url: 'https://github.com/kbrgl',
        icon: 'github',
      },
      {
        name: 'Email',
        url: 'mailto:kabirgoel.kg@gmail.com',
        icon: 'envelope',
      },
      {
        name: 'Spotify',
        url: 'https://open.spotify.com/user/12181834510',
        icon: 'spotify',
      },
      {
        name: 'Medium',
        url: 'https://medium.com/@kbrgl',
        icon: 'medium',
      },
      {
        name: 'VSCO',
        url: 'https://vsco.co/kbrgl',
        icon: 'camera',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-flow`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/kabir.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
