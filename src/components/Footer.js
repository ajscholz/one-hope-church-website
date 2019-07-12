import React from "react"
import styled from "styled-components"

export default ({ hide }) => {
  return (
    <Footer hide={hide}>
      © {new Date().getFullYear()}
      {`, Built with 💙 by `}
      <a
        href="https://ajsolutions.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {` AJSolutions`}
      </a>
    </Footer>
  )
}

const Footer = styled.footer`
  background: var(--blue);
  color: white;
  width: 100vw;
  height: 4rem;
  display: ${props => (props.hide ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  & a:visited,
  a:active {
    color: var(--lightGray);
  }
`
