module.exports = {
  siteMetadata: {
    title: "Minecraft Hosting Vergleich",
    description:
      "Finde deinen passenden Minecraft Server genau nach deinen Kriterien.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    // TODO: fix
    /*
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    */
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Minecraft Hosting Vergleich",
        short_name: "MC Vergleich",
        start_url: "/",
        background_color: "#e2e8f0",
        theme_color: "#e2e8f0",
        display: "standalone",
        // TODO: fix
        // icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
    {
      // must be BELOW all plugins which modify the babel config
      resolve: "gatsby-plugin-ts-loader",
      options: {
        tslint: true, // false or exclude to disable tslint
      },
    },
  ],
};
