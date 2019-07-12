/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import GlobalStyles from "./GlobalStyles"
import Footer from "./Footer"
import styled, { css } from "styled-components"
import Navigation from "./Navigation"

import { FaPlus } from "react-icons/fa"

export default ({ children, footer, minimal }) => {
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
      <Navigation position={scrollPos} visible={visible} />

      <Main>{children}</Main>
      <Footer hide={footer}></Footer>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`

  min-height: calc(100vh - 8rem);
  padding-top: 0;
  /* z-index: -1; */
  transition: all 0.3s ease-in;
  flex-grow: 1;
  /* @media (max-width: 576px) {
    ${props =>
      props.open === true &&
      css`
        transform: translateY(-4rem);
      `}
  } */
  @media (min-width: 577px) {
    min-height: calc(100vh - 4rem);
  }
`

const ToggleNav = styled.button`
  border: none;
  outline: none;
  border-radius: 50%;
  background: none;
  color: rgba(211, 211, 211, 0.8);
  font-size: 3rem;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
`
const StyledIcon = styled(FaPlus)`
  transition: all 0.3s ease-in;

  animation: plusSign 0.5s ease-in-out 0s infinite alternate;
  @keyframes plusSign {
    from {
      color: lightgray;
    }
    to {
      color: white;
    }
  }
  transform: ${props => props.open && "rotate(-45deg)"};
`
