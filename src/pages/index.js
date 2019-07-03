import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Button from "../components/Button"

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
  console.log(data)
  return (
    <Layout footer="hide">
      <SEO title="Home" />
      <HeroImage image={data.pageBackground.childImageSharp.fluid} full>
        <Banner>Welcome Home</Banner>
        <Button>Plan A Visit</Button>
      </HeroImage>
    </Layout>
  )
}

const Banner = styled.h1`
  padding: 0 3rem;
  text-align: center;
  color: white;
  font-size: 4rem;
`

export default IndexPage
