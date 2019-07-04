import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
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
    <Layout footer="hide" minimal={true}>
      <SEO title="Home" />
      <HeroImage image={data.pageBackground.childImageSharp.fluid} full>
        <Banner>Welcome Home</Banner>
        <Button>Plan A Visit</Button>
      </HeroImage>
    </Layout>
  )
}

export default IndexPage
