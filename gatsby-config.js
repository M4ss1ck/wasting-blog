require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Wasting Blog",
    description: "Ahora también perdemos el tiempo en este blog",
    keywords: "Telegram, Gatsby",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    "gatsby-plugin-react-helmet",

    "gatsby-plugin-postcss",

    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
