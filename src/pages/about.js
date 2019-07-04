import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Banner from "../components/Banner"
import Avatar from "../components/Avatar"
import ContactForm from "../components/ContactForm"

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
    jennifer: file(name: { eq: "team-jennifer" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    janet: file(name: { eq: "team-janet" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = ({ data }) => {
  const oneHopeChurch = {
    lat: 40.047241,
    lng: -82.978953,
  }
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
          <Avatar
            image={data.geri.childImageSharp.fluid}
            name="Gerri Nugent"
            title="Finance and Prime Time Pastor"
          />
          <Avatar
            image={data.jennifer.childImageSharp.fluid}
            name="Jennifer Schrappe"
            title="Worship Pastor"
          />
          <Avatar
            image={data.janet.childImageSharp.fluid}
            name="Janet Walker"
            title="Outreach Pastor"
          />
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
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyDBkvXo0CPbEMhEr4I900gRQphzwJaM4EA"
          preventGoogleFontsLoading={true}
        >
          <GoogleMap
            id="circle-example"
            mapContainerStyle={{
              width: "80vw",
              height: "300px",
            }}
            zoom={15}
            center={oneHopeChurch}
            options={{ disableDefaultUI: true, zoomControl: true }}
          >
            <Marker position={oneHopeChurch} />
          </GoogleMap>
        </LoadScript>
      </Section>

      <Section>
        <h1>Contact</h1>
        <ContactForm></ContactForm>
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Address = styled(StoryDescription)`
  color: darkslategray;
`

const ServiceTime = styled(StoryDescription)`
  color: darkslategray;
`

export default About
