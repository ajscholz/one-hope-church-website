import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"

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

const IndexPage = ({ data }) => (
  <Layout footer="hide">
    <SEO title="Home" />
    <HeroImage image={data.pageBackground.childImageSharp.fluid} home>
      <h1>goodbye</h1>
    </HeroImage>
  </Layout>
)

export default IndexPage
