import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Banner from "../components/Banner"
import Title from "../components/Title"
import ContactForm from "../components/Forms/ContactForm"
import Accordion from "../components/Accordion"
import IconInfo from "../components/IconInfo"
import FlexContainer from "../components/FlexContainer"
import IconList from "../components/IconList"

import questions from "../utils/questions"
import {
  FaClock,
  FaMusic,
  FaBible,
  FaMugHot,
  FaComments,
  FaSmile,
} from "react-icons/fa"

export const query = graphql`
  {
    hero: file(name: { eq: "visit-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kids: file(name: { eq: "visit-kids" }) {
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
        <FlexContainer>
          <IconInfo
            icon={FaClock}
            color="var(--brown)"
            text={`A simple, sacred gathering from 10:30 - noon`}
          />
          <IconInfo
            icon={FaMusic}
            color="var(--blue)"
            text={`Modern and traditional music`}
          />
          <IconInfo
            icon={FaBible}
            color="var(--red)"
            text={`Times of prayer and scripture reading`}
          />
          <IconInfo
            icon={FaMugHot}
            color="var(--primaryDark)"
            text={`Free, hot coffee`}
          />
          <IconInfo
            icon={FaComments}
            color="var(--green)"
            text={`Simultaneous Spanish and Portuguese interpretation`}
          />
          <IconInfo
            icon={FaSmile}
            color="var(--brown)"
            text={`Smiling faces that love you right where you are`}
          />
        </FlexContainer>
      </Section>
      <BackgroundImage fluid={data.kids.childImageSharp.fluid}>
        <Section overlay>
          <Title primary>One Hope Kids</Title>
          <IconList light={true}>
            <>One Hope Nursery for five months through five years</>
            <>One Hope Kids for Kindergarten through fifth grade</>
            <>Safe and secure with background checked leaders</>
            <>Only you can check your child in and out</>
            <>Trained, passionate, fun leaders</>
            <>A place to worship and discover Jesus in an age-appropriate way</>
          </IconList>
          <Note>** One Hope Kids is available at every gathering</Note>
        </Section>
      </BackgroundImage>
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

const Note = styled.h6`
  margin: 0;
  color: white;
  font-weight: 400;
`

export default Visit
