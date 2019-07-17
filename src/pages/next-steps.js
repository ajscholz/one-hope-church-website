import React, { useState } from "react"
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
import NextForm from "../components/Forms/NextForm"
import SmallGroupForm from "../components/Forms/SmallGroupForm"
import FlexContainer from "../components/FlexContainer"
import IconInfo from "../components/IconInfo"
import IconList from "../components/IconList"

import useModal from "../utils/hooks/useModal"
import { FaHeart, FaLink, FaCalendarCheck, FaComments } from "react-icons/fa"

export const query = graphql`
  {
    hero: file(name: { eq: "next-steps-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nextBanner: file(name: { eq: "next-section-banner" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const NextSteps = ({ data }) => {
  const [modalForm, changeModalForm] = useState(null)
  const { isShowing, toggle } = useModal()
  return (
    <>
      <SEO title="Next Steps" />
      <HeroImage image={data.hero.childImageSharp.fluid}>
        <Banner>Next Steps</Banner>
      </HeroImage>
      {/* <Section>
        <Title>Faith Is a Journey</Title>
        <Description>
          It's not just about the big moments. It's about all the small steps
          along the way. What's your next step?
        </Description>
      </Section> */}
      <Section>
        <Title>Small Groups</Title>
        <Description>
          Get the right people in your life. Join a small group today and you'll
          experience:
        </Description>
        <IconList>
          <>Diverse community and authentic relationships</>
          <>A support sytem to do life with</>
          <>Ordinary people together on an extraordinary mission</>
        </IconList>
        <Button
          onClick={() => {
            changeModalForm("groups")
            toggle()
          }}
        >
          Join A Small Group Today
        </Button>
      </Section>
      <BackgroundImage fluid={data.nextBanner.childImageSharp.fluid}>
        <Section as="div" overlay>
          <Title primary>Next Classes</Title>
          <FlexContainer maxWidth="900px">
            <IconInfo
              light={true}
              color={"var(--green)"}
              icon={FaCalendarCheck}
              text={`Conveniently offered throughout the year with spring, summer, fall, and winter sessions available.`}
            />
            <IconInfo
              light={true}
              color={"var(--blue)"}
              icon={FaComments}
              text={`Offered in English, Spanish, or Portuguese, whichever is most comfortable for you.`}
            />
            <IconInfo
              light={true}
              color={"var(--red)"}
              icon={FaHeart}
              text={`Discover the joy in using your God-given passion and talent to give back.`}
            />
            <IconInfo
              light={true}
              color={"var(--brown)"}
              icon={FaLink}
              text={`Connect with people and resources and watch your faith grow.`}
            />
          </FlexContainer>
          <StyledNextButton
            onClick={() => {
              changeModalForm("next")
              toggle()
            }}
          >
            Discover Your Next Spiritual Step
          </StyledNextButton>
        </Section>
      </BackgroundImage>

      <Modal isShowing={isShowing} hide={toggle}>
        {modalForm === "next" ? (
          <NextForm />
        ) : modalForm === "groups" ? (
          <SmallGroupForm />
        ) : null}
      </Modal>
    </>
  )
}

const Description = styled.div`
  margin: -1.5rem 0 2rem 0;
  text-align: center;
  max-width: 500px;
`

const StyledNextButton = styled(Button)`
  margin-top: 1rem;
`

export default NextSteps
