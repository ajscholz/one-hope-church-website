import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"

export const query = graphql`
  {
    hero: file(name: { eq: "about-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = ({ data }) => (
  <Layout>
    <HeroImage image={data.hero.childImageSharp.fluid} />
    <SEO title="About" />
    <Section>
      <h1>Hi from the About page</h1>
      <p>Welcome to the about page</p>
    </Section>
  </Layout>
)

export default About
