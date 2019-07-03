import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"

export const query = graphql`
  {
    hero: file(name: { eq: "visit-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Visit = ({ data }) => (
  <Layout>
    <HeroImage image={data.hero.childImageSharp.fluid} />
    <SEO title="Visit" />
    <Section>
      <h1>Hi from the Visit page</h1>
      <p>Welcome to the visit page</p>
    </Section>
  </Layout>
)

export default Visit
