/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import GlobalStyles from "./GlobalStyles"
import Footer from "./Footer"
import styled from "styled-components"

const Layout = ({ children, footer }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          shortName
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Navbar siteTitle={data.site.siteMetadata.shortName} />
      <Main>{children}</Main>
      <Footer hide={footer}></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 960;
  /* padding: 0px 1.0875rem 1.45rem; */
  padding-top: 0;
`

export default Layout
