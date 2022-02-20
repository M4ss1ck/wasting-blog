require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Wasting Blog",
    description: "Ahora también perdemos el tiempo en este blog",
    keywords: "Telegram, Gatsby",
  },
  plugins: [
    "gatsby-plugin-pnpm",
    "gatsby-plugin-dark-mode",
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
        stages: ["DRAFT"],
        fragmentsPath: "fragments",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_NAME,
      },
    },
  ],
};
