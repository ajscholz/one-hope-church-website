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
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `One Hope Church`,
    //     short_name: `One Hope`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
