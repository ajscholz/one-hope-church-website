import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { FaUmbrella, FaCross, FaUsers } from "react-icons/fa"

import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Banner from "../components/Banner"
import TeamCard from "../components/TeamCard"
import ContactForm from "../components/ContactForm"
import Title from "../components/Title"
import IconInfo from "../components/IconInfo"
import ContactForm2 from "../components/ContactForm2"

import staff from "../utils/staff"

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
    gerri: file(name: { eq: "team-geri" }) {
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
    felipe: file(name: { eq: "team-felipe" }) {
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

  // creates new array for team members without felipe
  const teamMembers = (({ pastor, ...staff }) => ({ ...staff }))(staff)
  const { pastor } = staff

  return (
    <>
      <SEO title="About" />
      <HeroImage image={data.hero.childImageSharp.fluid}>
        <Banner>About</Banner>
      </HeroImage>
      <Section>
        <Vision>
          We are <VisionEmph>multicultural</VisionEmph>
        </Vision>
        <Vision>
          We are <VisionEmph>intergenerational</VisionEmph>
        </Vision>
        <Vision>
          We are <VisionEmph>missional</VisionEmph>
        </Vision>
        <Vision>
          We are <VisionEmph>creating culture</VisionEmph>
        </Vision>
        <Vision>
          We are <VisionEmph>redeeming vocations</VisionEmph>
        </Vision>
        <Vision>
          We are <VisionEmph>restoring brokenness</VisionEmph> in Columbus
        </Vision>
        <Vision>
          We are <VisionEmph>One Hope Church</VisionEmph>
        </Vision>
        <H2>Welcome Home</H2>
      </Section>
      <ValuesSection>
        <Title>Our Values</Title>
        <ValuesContainer>
          <IconInfo
            icon={FaUmbrella}
            color="#69995D"
            title="Better Together"
            text={`We were made for authentic relationships because someday in your life it will rain, and nobody should be stuck outside without an umbrella.`}
          />
          <IconInfo
            icon={FaUsers}
            color="#CBAC88"
            title="Never Alone"
            text={` No one’s life is perfect, but when we embrace the journey together we can support each other, experience wholeness and ultimately find our purpose in Jesus.`}
          />
          <IconInfo
            icon={FaCross}
            color="#F8820D"
            title="All for Jesus"
            text={`We are constantly working toward the common good of our city and world by making Jesus famous by the way we love and serve our neighbors.`}
          />
        </ValuesContainer>
      </ValuesSection>

      <StoryBackground fluid={storyBackgroundImageStack}>
        <Title primary>Our Story</Title>
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

      <TeamSection>
        <Title>Our Team</Title>
        <TeamContainer>
          {Object.keys(teamMembers).map(teamMember => {
            return (
              <TeamCard
                key={teamMember}
                name={staff[teamMember].name}
                jobTitle={staff[teamMember].title}
                image={data[teamMember].childImageSharp.fluid}
              />
            )
          })}
        </TeamContainer>
      </TeamSection>
      <Section>
        <Title>Our Pastor</Title>
        <PastorContainer>
          <Avatar fluid={data.felipe.childImageSharp.fluid} />
          <PastorInfo>
            <PastorName>{pastor.name}</PastorName>
            <PastorDescription>
              {pastor.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </PastorDescription>
          </PastorInfo>
        </PastorContainer>
      </Section>

      <Section>
        <Title primary>Our Location</Title>
        <H3>Service Time</H3>
        <ServiceTime>Sundays | 10:30a</ServiceTime>
        <H3>Address</H3>
        <Address>
          1389 E. Cooke Rd., <br />
          Columbus, OH 43224
        </Address>
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
        <Title>Contact Us</Title>
        <ContactForm></ContactForm>
        <ContactForm2></ContactForm2>
      </Section>
    </>
  )
}

const Vision = styled.h3`
  text-align: center;
  margin: 0 0 0.75em 0;
`

const VisionEmph = styled.span`
  color: var(--primary);
  font-style: italic;
`

const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 2rem 0 0 0;
`

const ValuesSection = styled(Section)`
  padding: 4rem 2.5vw 3rem 2.5vw;
`

const ValuesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: center;
`

const StoryBackground = styled(BackgroundImage)`
  padding: 4rem 10vw;
  text-align: center;
`

const StoryDescription = styled.p`
  font-weight: 300;
  color: white;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  &:first-of-type {
  }
`

const TeamSection = styled(Section)`
  padding-bottom: 2.5rem;
`

const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const PastorContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  @media (min-width: 762px) {
    flex-direction: row;
    justify-content: center;
  }
`

const Avatar = styled(Img)`
  width: 100%;
  border-radius: 50%;
  margin: 0 0 2rem 0;
  @media (max-width: 762px) {
    min-width: 225px;
    max-width: 325px;
    flex-grow: 1;
  }

  @media (min-width: 661px) {
    min-width: 225px;
    width: 225px;
    flex-grow: unset;
    margin: 0 2rem 0 0;
  }
`

const PastorInfo = styled.div`
  flex-shrink: 1;
  text-align: center;
  @media (min-width: 661px) {
    text-align: left;
  }
`

const PastorName = styled.h4`
  color: var(--primary);
  margin: 0;
  font-size: 1.5rem;
`

const PastorDescription = styled.div`
  margin-bottom: 0;
  font-size: 0.85rem;
`

const H3 = styled.h3`
  margin: 0;
`

const Address = styled(StoryDescription)`
  color: initial;
  margin-bottom: 1rem;
`

const ServiceTime = styled(StoryDescription)`
  color: initial;
  margin-bottom: 1rem;
`

export default About
