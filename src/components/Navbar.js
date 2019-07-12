import React from "react"
import styled from "styled-components"
import { links } from "../utils/Links"
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
          return link.text === "give" ? (
            <StyledLink
              as="a"
              href={link.path}
              key={link.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </StyledLink>
          ) : (
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
  z-index: 10;
  background: transparent;
  display: flex;
  justify-content: center;
  height: 4rem;
  overflow: hidden;
  align-items: center;
  @media (min-width: 577px) {
    height: 6rem;
    padding: 1.5rem;
    justify-content: space-between;
  }
`

const StyledImg = styled(Img)`
  height: 100%;
  width: 6rem;
  @media (min-width: 577px) {
    width: 9rem;
  }
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
  margin: 0.5rem;
  font-weight: 300;
  &:hover {
    position: relative;
    display: inline-block;
    color: var(--primaryLight);
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 1px;
      background: var(--primaryLight);
    }
  }
  &[aria-current="page"] {
    color: var(--primary);
    position: relative;
    display: inline-block;
    ::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 1px;
      background: var(--primary);
    }
  }
`
