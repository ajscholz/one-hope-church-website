require("regenerator-runtime/runtime")
var proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    name: `One Hope Community Church`,
    shortName: `One Hope Church`,
    description: `A multi-generational, multi-ethnic church in northeast Columbus.`,
    pastor: `Felipe Ferreira`,
    address: `1389 E. Cooke Rd.`,
    city: `Columbus`,
    state: `OH`,
    zip: `43224`,
    phone: "614-294-4717",
    email: "info@onehopecommunity.church",
    ministries: {
      kids: "One Hope Kids",
    },
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `One Hope Church`,
        short_name: `One Hope`,
        start_url: `/`,
        background_color: `#ffb348`,
        theme_color: `#f8820d`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
