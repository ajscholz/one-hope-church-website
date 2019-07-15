import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Banner from "../components/Banner"
import Title from "../components/Title"
import ContactForm from "../components/ContactForm"
import Accordion from "../components/Accordion"

import questions from "../utils/questions"

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

const Visit = ({ data }) => {
  return (
    <>
      <HeroImage image={data.hero.childImageSharp.fluid}>
        <Banner>Plan A Visit</Banner>
      </HeroImage>
      <SEO title="Visit" />
      <Section>
        <Title>Sundays at One Hope</Title>
        <ul>
          <li>A simple, sacred gathering from 10:30 - noon</li>
          <li>Modern and traditional music</li>
          <li>Times of prayer and scripture reading</li>
          <li>Free, hot coffee</li>
          <li>Simultaneous Spanish and Portuguese interpretation</li>
          <li>Smiling faces that love you right where you are</li>
        </ul>
      </Section>
      <Section>
        <Title>One Hope Kids</Title>
        <ul>
          <li>One Hope Nursery for five months through five years</li>
          <li>One Hope Kids for Kindergarten through fifth grade</li>
          <li>Safe and secure with background checked leaders</li>
          <li>Only you can check your child in and out</li>
          <li>Trained, passionate, fun leaders</li>
          <li>
            A place to worship and discover Jesus in an age-appropriate way
          </li>
          <p>** One Hope Kids is available at every gathering</p>
        </ul>
      </Section>
      <Section>
        <Title>Common Questions</Title>
        <Accordion questions={questions} />
      </Section>
      <Section>
        <Title>Any other questions?</Title>
        <ContactForm />
      </Section>
    </>
  )
}

export default Visit
