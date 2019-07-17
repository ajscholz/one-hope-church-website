import React from "react"
import styled from "styled-components"

import SocialIcons from "./SocialIcons"

export default ({ hide }) => {
  return (
    <Footer hide={hide}>
      <SocialIcons />
      <StyledP>
        © {new Date().getFullYear()}&nbsp;&nbsp;|&nbsp;&nbsp;One Hope Community
        Church
      </StyledP>
      <StyledP>
        {`Built with 💙 by `}
        <span>
          <a
            href="https://ajsolutions.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`AJSolutions`}
          </a>
        </span>
      </StyledP>
    </Footer>
  )
}

const StyledP = styled.p`
  font-size: 0.8rem;
  margin: 0 auto;
  text-align: center;
  &:first-of-type {
    margin: 1.35rem 0 0.35rem 0;
  }
  & a:visited,
  a:active {
    color: var(--lightGray);
  }
  @media (min-width: 576px) {
    font-size: 0.9rem;
  }
`

const Footer = styled.footer`
  margin-bottom: 3.5rem;
  font-size: 0.9rem;
  background: var(--blue);
  color: white;
  width: 100vw;
  padding: 2rem;
  display: ${props => (props.hide ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 577px) {
    margin-bottom: 0;
  }
`
