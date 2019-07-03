import React from "react"
import styled from "styled-components"
import { links } from "../constants/Links"
import { Link } from "gatsby"

export default ({ siteTitle }) => {
  const navLinks = links.slice(1)
  return (
    <Navbar>
      <Title as={Link} to="/">
        {siteTitle}
      </Title>
      <List>
        {navLinks.map(link => {
          return (
            <StyledLink as={Link} to={link.path} key={link}>
              {link.text}
            </StyledLink>
          )
        })}
      </List>
    </Navbar>
  )
}

const Navbar = styled.nav`
  display: none;
  @media (min-width: 577px) {
    height: 4rem;
    width: 100vw;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 0 2rem;
  }
`

const Title = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`

const List = styled.ul`
  list-style: none;
`

const StyledLink = styled.li`
  color: white;
  padding: 0.5rem;
  font-weight: 300;
`
