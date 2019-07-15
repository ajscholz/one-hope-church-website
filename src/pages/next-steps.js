import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Banner from "../components/Banner"
import Title from "../components/Title"
import Button from "../components/Button"
import Modal from "../components/Modal"
import NextForm from "../components/NextForm"
import ContactForm from "../components/ContactForm"

import useModal from "../utils/hooks/useModal"

export const query = graphql`
  {
    hero: file(name: { eq: "next-steps-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sectionImage: file(name: { eq: "next-steps-section" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const NextSteps = ({ data }) => {
  const { isShowing, toggle } = useModal()
  return (
    <>
      <SEO title="Next Steps" />
      <HeroImage image={data.hero.childImageSharp.fluid}>
        <Banner>Next Steps</Banner>
      </HeroImage>
      <Section>
        <Title>Take your next step at One Hope and you'll find...</Title>
        <ul>
          <li>Diverse community and authentic relationships</li>
          <li>Opportunities to take steps and grow in your faith</li>
          <li>A chance to make a difference that echoes into eternity</li>
          <li>A spiritual family where you truly belong</li>
        </ul>
      </Section>
      <BackgroundImageSection>
        <BackgroundImage fluid={data.sectionImage.childImageSharp.fluid}>
          <Spacer></Spacer>
        </BackgroundImage>
      </BackgroundImageSection>
      <Section>
        <Title>Don't do life alone</Title>
        <p>
          Small Groups have one simple purpose: to bring people together, but
          those relationships can be hard to find. Take your next step and join
          a Small Group today and you’ll experience:
        </p>
        <ul>
          <li>Diverse community and authentic relationships</li>
          <li>A support sytem to do life with</li>
          <li>Ordinary people together on an extraordinary mission</li>
        </ul>
        <Button
          id="groups-button"
          data-form="ContactForm"
          onClick={e => {
            console.log(`${e.target}`)
          }}
        >
          Join A Small Group Today
        </Button>
      </Section>
      <Section>
        <Title>Next</Title>
        <h3>Discover your next spiritual step</h3>
        <ul>
          <li>
            Conveniently offered throughout the year, with spring, summer, fall,
            and winter sessions available.
          </li>
          <li>
            Classes offered in English, Spanish, or Portuguese, whichever is
            most comfortable for you.
          </li>
          <li>
            Discover the joy in using your God-given passion and talent to give
            back.
          </li>
          <li>Connect with people and resources and watch your faith grow.</li>
        </ul>
        <Button onClick={toggle}>Sign up for Next</Button>
      </Section>
      <Modal isShowing={isShowing} hide={toggle}>
        <NextForm />
      </Modal>
    </>
  )
}

const BackgroundImageSection = styled(Section)`
  display: block;
  padding: 0;
`

const Spacer = styled.div`
  width: 100%;
  height: 250px;
`

export default NextSteps
