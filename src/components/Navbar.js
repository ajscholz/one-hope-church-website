import React from "react"
import styled from "styled-components"
import { links } from "../constants/Links"
import { Link } from "gatsby"

export default ({ siteTitle }) => {
  return (
    <Navbar>
      <Title>{siteTitle}</Title>
      <List>
        {links.map(link => {
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

const Title = styled.h1`
  color: white;
`

const Navbar = styled.nav`
  height: 4rem;
  width: 100vw;
  background: tomato;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
`

const List = styled.ul`
  list-style: none;
`

const StyledLink = styled.li`
  color: white;
  padding: 0.5rem;
`
