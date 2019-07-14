import React from "react"
import styled from "styled-components"

export default ({ hide }) => {
  return (
    <Footer hide={hide}>
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
  margin: 0 auto;
  &:first-of-type {
    margin-bottom: 0.35rem;
  }
`

const Footer = styled.footer`
  font-size: 0.9rem;
  background: var(--blue);
  color: white;
  width: 100vw;
  padding: 2rem;
  display: ${props => (props.hide ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & a:visited,
  a:active {
    color: var(--lightGray);
  }
`
