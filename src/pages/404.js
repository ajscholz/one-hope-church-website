import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"

export const query = graphql`
  {
    hero: file(name: { eq: "404-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const NotFoundPage = ({ data }) => (
  <Layout footer="hide">
    <SEO title="404: Not found" />
    <HeroImage image={data.hero.childImageSharp.fluid} full>
      <Banner>PAGE NOT FOUND</Banner>
      <StyledP>You just hit a route that doesn&#39;t exist... 😢</StyledP>
    </HeroImage>
  </Layout>
)

const Banner = styled.h1`
  padding: 0 3rem;
  text-align: center;
  color: white;
  font-size: 4rem;
`

const StyledP = styled.p`
  color: white;
  font-weight: light;
  font-size: 1.2rem;
`

export default NotFoundPage
