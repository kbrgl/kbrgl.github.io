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
      {
        name: 'CodePen',
        url: 'https://codepen.io/kbrgl',
        icon: 'codepen',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-flow`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kabir Goel',
        short_name: 'Kabir Goel',
        start_url: '/',
        background_color: '#3d29f5',
        theme_color: '#3d29f5',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
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
