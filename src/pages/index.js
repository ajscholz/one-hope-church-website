import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Button from "../components/Button"
import Banner from "../components/Banner"

export const query = graphql`
  {
    pageBackground: file(name: { eq: "index-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeroImage image={data.pageBackground.childImageSharp.fluid} full>
        <Banner>Welcome Home</Banner>
        <Button as={Link} to="/visit">
          Plan A Visit
        </Button>
      </HeroImage>
    </>
  )
}

export default IndexPage
