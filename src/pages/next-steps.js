import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"

export const query = graphql`
  {
    hero: file(name: { eq: "next-steps-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const NextSteps = ({ data }) => (
  <Layout>
    <HeroImage image={data.hero.childImageSharp.fluid} />
    <SEO title="Next Steps" />
    <h1>Hi from the Next Steps page</h1>
    <p>Welcome to the next steps page</p>
  </Layout>
)

export default NextSteps
