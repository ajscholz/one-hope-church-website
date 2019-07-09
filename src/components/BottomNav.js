import React from "react"
import styled, { css } from "styled-components"
import { links } from "../constants/Links"
import { Link } from "gatsby"

export default ({ open }) => {
  return (
    <Navbar open={open}>
      <List>
        {links.map(link => {
          return (
            <StyledLink as={Link} to={link.path} key={link.text}>
              <Icon as={link.icon} />
              {link.text}
            </StyledLink>
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
  z-index: 1;
  transition: all 0.3s ease-in;
  @media (min-width: 576px) {
    display: none;
  }
  /* display: ${props => !props.minimal && "none"}; */

  transform: ${props => !props.open && "translateY(4rem)"};
`

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  justify-content: space-evenly;
`
const Icon = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`

const StyledLink = styled.li`
  font-weight: 300;
  text-transform: capitalize;
  font-size: 0.8rem;
  color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
`
