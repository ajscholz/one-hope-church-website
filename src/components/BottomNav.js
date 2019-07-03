import React from "react"
import styled from "styled-components"
import { links } from "../constants/Links"
import { Link } from "gatsby"

export default () => {
  return (
    <Navbar>
      <List>
        {links.map(link => {
          return (
            <Container>
              <Icon as={link.icon} />
              <StyledLink as={Link} to={link.path} key={link}>
                {link.text}
              </StyledLink>
            </Container>
          )
        })}
      </List>
    </Navbar>
  )
}

const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  height: 4rem;
  width: 100vw;
  background: white;
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    display: none;
  }
`

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  justify-content: space-evenly;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled.div`
  font-size: 1.1rem;
`

const StyledLink = styled.li`
  font-weight: 300;
  text-transform: capitalize;
  font-size: 0.8rem;
  color: black;
  margin-top: 0.3rem;
`
