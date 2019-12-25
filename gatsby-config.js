module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Josh Martin's Blog`,
    author: `Josh Martin`,
    description: `This is a blog about my findings in the world`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/cjoshmartin`,
      },
      {
        name: `github`,
        url: `https://github.com/cjoshmartin`,
      },
    ],
  },
}
