/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

require("typeface-raleway")

const React = require("react")
const Layout = require("./src/components/Layout").default
const LanguageProvider = require("./src/utils/context/LanguageContext")
  .LanguageProvider

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    require(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

exports.wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
)
