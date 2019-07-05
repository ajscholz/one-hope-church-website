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
import Title from "../components/Title"
import IconInfo from "../components/IconInfo"

import { FaUmbrella, FaCross, FaUsers } from "react-icons/fa"

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
        <Title>Our Values</Title>
        <ValuesContainer>
          <IconInfo icon={FaUmbrella} color="#69995D" title="Better Together" text={`We were made for authentic relationships because someday in your life it will rain, and nobody should be stuck outside without an umbrella.`} />
          <IconInfo icon={FaUsers} color="#CBAC88" title="Never Alone" text={` No one’s life is perfect, but when we embrace the journey together we can support each other, experience wholeness and ultimately find our purpose in Jesus.`}/>
          <IconInfo icon={FaCross} color="#F8820D" title="All for Jesus" text={`We are constantly working toward the common good of our city and world by making Jesus famous by the way we love and serve our neighbors.`} />
        </ValuesContainer>
      </Section>

      <StoryBackground fluid={storyBackgroundImageStack}>
        <Header as={Title}>Our Story</Header>
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
        <Title>Our Team</Title>
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
        <Title>Our Pastor</Title>
        <PastorContainer>
          <Avatar
            image={data.felipe.childImageSharp.fluid}
            name="Felipe Ferreira"
            title="Lead Pastor"
          />
          <PastorDescription>
            <p>
              {`Pastor Felipe has been lead pastor at One Hope Community since 2018 but has been serving here for the past 7 years in the areas of worship & arts, children's ministry, church-planting and discipleship. He has a passion for seeing people come together and finding unity in the midst of brokenness and division. Pastor Felipe attended Mount Vernon Nazarene University and is currently studying at Fuller Theological Seminary.`}
            </p>
            <p>
              {`A native of Brazil, he now calls Columbus home and roots for the Columbus Crew.  He is married to Érika, a nutritionist by training, but also a Sunday school teacher and worship leader. They have one child, Jonathan.`}
            </p>
          </PastorDescription>
        </PastorContainer>
      </Section>

      <Section>
        <Title>Location</Title>
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
        <Title>Contact Us</Title>
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

const ValuesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

const PastorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`

const PastorDescription = styled.div`
  color: black;
  font-size: 0.9rem;
  font-weight: 300;
  margin: 0;
  > p:first-of-type {
    margin-top: -1rem;
  }
`

const Address = styled(StoryDescription)`
  color: darkslategray;
`

const ServiceTime = styled(StoryDescription)`
  color: darkslategray;
`

export default About
