import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Banner from "../components/Banner"
import Title from "../components/Title"
import ContactForm from "../components/ContactForm"

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

const Visit = ({ data }) => (
  <Layout>
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
        <li>A place to worship and discover Jesus in an age-appropriate way</li>
        <p>** One Hope Kids is available at every gathering</p>
      </ul>
    </Section>
    <Section>
      <Title>Common Questions</Title>
      <ul>
        <li>
          <h3>What is a service like?</h3>
          <p>
            Our gatherings are simple and sacred. Come as you are, connect with
            others, and enjoy some coffee. Each gathering is about one hour and
            a half and includes a meaningful message and some great music.
            Church should be fun, laid back, and authentic.{" "}
          </p>
        </li>
        <li>
          <h3>What do you have for my kids?</h3>
          <p>
            Each Sunday we offer experiences for children from five months
            through fifth grade that are designed specifically for them.
          </p>
          <p>
            For youth and young adults we have hang outs on Thursdays at 6:30pm.
          </p>
        </li>
        <li>
          <h3>Who will be there?</h3>
          <p>
            We are multicultural and multigenerational. Unity in our diversity
            makes us stronger and unique. At One Hope, we have people of all
            ages and all cultures in our gatherings. Currently we have members
            from Brazil, El Salvador, Mexico, Eritrea, United States, United
            Kingdom, Jamaica, Guyana!
          </p>
        </li>
        <li>
          <h3>When should I arrive?</h3>
          <p>
            If you are planning to check your children in to Kids at One Hope
            Kids, you may want to arrive at around 10:15. This will give you
            plenty of time to register your kids and bring them to their room.
            If you aren't checking-in any kids, we would recommend arriving a
            few minutes before 10:30.
          </p>
        </li>
      </ul>
    </Section>
    <Section>
      <Title>Any other questions?</Title>
      <ContactForm />
    </Section>
  </Layout>
)

export default Visit
