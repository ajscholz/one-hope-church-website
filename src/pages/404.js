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
      <StyledP>You just hit a page that doesn't{"\u00A0"}exist...</StyledP>
      <StyledEmoji>
        <span role="img" aria-label="crying">
          😢
        </span>
      </StyledEmoji>
    </HeroImage>
  </Layout>
)

const StyledP = styled.p`
  text-align: center;
  max-width: 600px;
  color: white;
  font-weight: light;
  font-size: 2rem;
  margin: 1rem 2rem 1rem 2rem;
`

const StyledEmoji = styled.p`
  font-size: 3rem;
  margin: 0;
`
export default NotFoundPage
