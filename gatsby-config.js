module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-8241145315698443`
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `cjoshmartin-2`
      }
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
