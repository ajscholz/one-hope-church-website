import React, { useState, useEffect } from "react"
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

  const [scrollPos, handleScroll] = useState(window.pageYOffset)
  const [visible, toggleVisible] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const prevPos = scrollPos
      const curPos = window.pageYOffset
      toggleVisible(prevPos > curPos)
      handleScroll(curPos)
    })
  })

  return (
    <Layout>
      <GlobalStyles />
      <Navbar siteTitle={data.site.siteMetadata.shortName} />
      <Navigation position={scrollPos} visible={visible} path={path} />

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
  height: 100vh;
  padding-top: 0;
  transition: all 0.3s ease-in;
  flex-grow: 1;
  @media (min-width: 577px) {
    min-height: calc(100vh - 4rem);
  }
`
