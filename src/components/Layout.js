import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import GlobalStyles from "./GlobalStyles"
import Footer from "./Footer"
import styled from "styled-components"
import Navigation from "./Navigation"

export default ({ children, path }) => {
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
    <Layout>
      <GlobalStyles />
      <Navbar siteTitle={data.site.siteMetadata.shortName} />
      <Navigation path={path} />

      <Main>{children}</Main>
      <Footer hide={path === "/" ? true : false}></Footer>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  min-height: 100vh;
  padding-top: 0;
  transition: all 0.3s ease-in;
  flex-grow: 1;
  @media (min-width: 577px) {
    min-height: calc(100vh - 4rem);
  }
`
