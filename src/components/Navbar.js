import React from "react"
import styled, { css } from "styled-components"
import { links } from "../constants/Links"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const logo = graphql`
  {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ open }) => {
  const image = useStaticQuery(logo)
  const navLinks = links.slice(1)
  return (
    <Navbar>
      <Link to="/">
        <StyledImg fluid={image.file.childImageSharp.fluid} open={open} />
      </Link>
      <List open={open}>
        {navLinks.map(link => {
          return (
            <StyledLink as={Link} to={link.path} key={link.text}>
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
  overflow: hidden;
  @media (min-width: 577px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 7rem;
    width: 100vw;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    z-index: 10;
  }
`

const StyledImg = styled(Img)`
  height: 5rem;
  width: 12rem;
  transition: all 0.3s ease-in;
  transform: ${props => !props.open && "translateX(35vw)"};
`

const List = styled.ul`
  list-style: none;
  transition: all 0.3s ease-in;
  transform: ${props => !props.open && "translateX(40vw)"};
`

const StyledLink = styled.li`
  color: white;
  padding: 0.5rem;
  font-weight: 300;
`
