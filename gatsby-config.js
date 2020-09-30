
module.exports = {
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `美味しい食材と食事を探求するサイト`,
    lang: `ja`,
    siteUrl: `https://naughty-brahmagupta-2c75d2.netlify.app`,
    locale: `ja_JP`,
    fbappid: `xxxxxx`
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
