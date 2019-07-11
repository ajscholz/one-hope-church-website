import React from "react"
import styled from "styled-components"
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
  return (
    <Navbar>
      <Link to="/">
        <StyledImg fluid={image.file.childImageSharp.fluid} open={open} />
      </Link>
      {/* <List open={open}> */}
      <List>
        {links.map(link => {
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 2rem;
  z-index: 10;
  background: transparent;
  display: flex;
  justify-content: space-between;
  height: 7rem;
  overflow: hidden;
  align-items: center;
`

const StyledImg = styled(Img)`
  height: 5rem;
  width: 12rem;
`

const List = styled.ul`
  display: none;
  @media (min-width: 577px) {
    display: block;
    list-style: none;
    transition: all 0.3s ease-in;
    /* transform: ${props => !props.open && "translateX(100%)"}; */
  }
`

const StyledLink = styled.li`
  color: white;
  padding: 0.5rem;
  font-weight: 300;
`
