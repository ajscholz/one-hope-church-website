import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { links } from "../utils/Links"
import { Link } from "gatsby"

import { LanguageContext } from "../utils/context/LanguageContext"

export default ({ path }) => {
  const [lang] = useContext(LanguageContext)

  const langLinks =
    lang === "SP" ? links.sp : lang === "PT" ? links.pt : links.en

  return (
    <Navbar homepage={path === "/" ? true : false}>
      <Wrapper>
        {langLinks.map(link => {
          return link.text === "give" ? (
            <StyledLink
              as="a"
              href={link.path}
              key={link.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={link.icon} />
              {link.text}
            </StyledLink>
          ) : (
            <StyledLink to={link.path} key={link.text}>
              <Icon as={link.icon} />
              {link.text}
            </StyledLink>
          )
        })}
      </Wrapper>
    </Navbar>
  )
}

const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  height: 3.5rem;
  width: 100vw;
  padding: 0 10vw;
  background: white;
  display: flex;
  align-items: center;
  z-index: 1;
  transition: all 0.6s;
  box-shadow: 1px 0px 8px;

  ${props =>
    props.homepage &&
    css`
      transition: all 0s;
      opacity: 0;
      animation: fade-in 1s ease 2s 1 normal forwards;
      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}
  @media (min-width: 576px) {
    display: none;
  }
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: 2px;
  display: flex;
  justify-content: space-between;
`
const Icon = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`

const StyledLink = styled(Link)`
  /* keeps nav items evenly spaced despite "next steps" being longer */
  width: 20px;
  white-space: nowrap;
  /*  */
  font-weight: 300;
  text-transform: capitalize;
  font-size: 0.9rem;
  color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: var(--mainTransition);
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &[aria-current="page"] {
    transform: scale(1.15);
    color: var(--primary);
  }
`
