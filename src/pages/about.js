import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Banner from "../components/Banner"

import { FaUmbrella } from "react-icons/fa"

export const query = graphql`
  {
    hero: file(name: { eq: "about-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    story: file(name: { eq: "story-background" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    geri: file(name: { eq: "team-geri" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = ({ data }) => {
  const storyBackgroundImageStack = [
    data.story.childImageSharp.fluid,
    `linear-gradient(120deg, rgba(57, 70, 72, .8), rgba(57,70,72,.8))`,
  ].reverse()
  return (
    <Layout>
      <SEO title="About" />
      <HeroImage image={data.hero.childImageSharp.fluid}>
        <Banner>About</Banner>
      </HeroImage>
      <Section>
        <Vision>We are multicultural</Vision>
        <Vision>We are intergenerational</Vision>
        <Vision>We are missional</Vision>
        <Vision>We are creating culture</Vision>
        <Vision>We are redeeming vocations</Vision>
        <Vision>We are restoring brokenness in Columbus</Vision>
        <Vision>We are One Hope Church</Vision>
        <H2>Welcome Home</H2>
      </Section>
      <Section>
        <h1>Values</h1>
        <Container>
          <Icon as={FaUmbrella}></Icon>
          <Heading>Better Together</Heading>
          <Description>
            We were made for <Emphasized>authentic relationships</Emphasized>{" "}
            because someday in your life it will rain, and nobody should be
            stuck outside without an <Emphasized>umbrella.</Emphasized>
          </Description>
        </Container>
      </Section>

      <StoryBackground fluid={storyBackgroundImageStack}>
        <Header>Our Story</Header>
        <StoryDescription>
          We are a church that was started over 6 years ago by the South Central
          Ohio District Church of the Nazarene.­ From the beginning we have
          desired to reach and provide a sense of Christian community for the
          diverse cultures and various language groups in Columbus, OH.
        </StoryDescription>
        <StoryDescription>
          Although we’ve been around for 6 years, in many ways we feel like we
          are just beginning the journey that God has for us as a church and
          community. We have a new staff, updated facilities and passionate
          people who are eager to connect with one another and work for the
          common good of the great city of Columbus.
        </StoryDescription>
      </StoryBackground>

      <Section>
        <h1>Team</h1>
        <TeamContainer>
          <Avatar fluid={data.geri.childImageSharp.fluid}></Avatar>
          <Name>Gerri Nugent</Name>
          <JobTitle>Finance And Prime Time Pastor</JobTitle>
        </TeamContainer>
      </Section>
      <Section>
        <h1>Pastor</h1>
      </Section>
      <Section>
        <h1>Location</h1>
        <Header>Address</Header>
        <Address>
          1389 E. Cooke Rd., <br />
          Columbus, OH 43224
        </Address>
        <Header>Service Time</Header>
        <ServiceTime>Sundays | 10:30a</ServiceTime>
        <h1>Map here</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </Layout>
  )
}

const Vision = styled.h3`
  color: #f8820d;
  font-style: italic;
  text-align: center;
`

const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1rem;
  color: darkslategrey;
`

const Icon = styled.svg`
  font-size: 3rem;
`

const Heading = styled.h4`
  margin: 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
`

const Description = styled.p`
  font-weight: 300;
  line-height: 1.25em;
  margin: 0;
`

const Emphasized = styled.span`
  font-weight: bold;
  font-style: italic;
`

const StoryBackground = styled(BackgroundImage)`
  padding: 4rem 10vw;
  text-align: center;
`

const Header = styled.h3`
  color: #f8820d;
  font-size: 1.5rem;
`

const StoryDescription = styled.p`
  font-weight: 300;
  color: white;
`

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: none;
  align-items: center;
`

const Avatar = styled(Img)`
  width: 100%;
  border-radius: 50%;
`

const Name = styled.h5`
  margin: 2rem auto 0.5rem auto;
  color: #f8820d;
  font-size: 2rem;
`

const JobTitle = styled.h6`
  margin: 0;
  color: darkslategray;
  font-size: 0.8rem;
  font-weight: 300;
`

const Address = styled(StoryDescription)`
  color: darkslategray;
`

const ServiceTime = styled(StoryDescription)`
  color: darkslategray;
`

export default About
