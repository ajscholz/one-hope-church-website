import React from "react"
import styled from "styled-components"

export default () => {
  return (
    <Footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Footer>
  )
}

const Footer = styled.footer`
  background: black;
  color: white;
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`
