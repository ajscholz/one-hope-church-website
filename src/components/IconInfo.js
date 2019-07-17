import React from "react"
import styled from "styled-components"

export default ({ icon, color, title, text, light }) => {
  return (
    <Container>
      <Icon as={icon} color={color}></Icon>
      <InfoContainer>
        {title && <Heading>{title}</Heading>}
        <Description light={light}>{text}</Description>
      </InfoContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  width: 80%;
  margin: 0 1rem 1rem 1rem;
  @media (min-width: 577px) {
    flex-direction: column;
    text-align: center;
    width: 275px;
    align-items: center;
  }
`

const Icon = styled.svg`
  font-size: 2.25rem;
  min-width: 50px;
  margin: 0 1rem 0 0;
  position: relative;
  top: 6px;
  color: ${props => props.color};
  @media (min-width: 577px) {
    min-width: unset;
    margin: 0 0 1rem 0;
    font-size: 2.75rem;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h4`
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  font-size: 1.1rem;
  text-align: left;
  @media (min-width: 577px) {
    text-align: center;
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }
`

const Description = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
  text-align: left;
  margin: 0;
  color: ${props => (props.light ? "white" : "var(--blue)")};
  @media (min-width: 577px) {
    text-align: center;
    font-size: 1rem;
  }
`
