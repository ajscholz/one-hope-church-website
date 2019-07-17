import React from "react"
import styled from "styled-components"

export default ({ icon, color, title, text, light }) => {
  return (
    <Container>
      <Icon as={icon} color={color}></Icon>
      {title && <Heading>{title}</Heading>}
      <Description light={light}>{text}</Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  width: 80%;
  margin: 0 1rem 1rem 1rem;
  @media (min-width: 577px) {
    flex-direction: column;
    text-align: center;
    width: 275px;
  }
`

const Icon = styled.svg`
  font-size: 2.75rem;
  min-width: 50px;
  margin: 0 1rem 0 0;
  color: ${props => props.color};
  @media (min-width: 577px) {
    min-width: unset;
    margin: 0 0 1rem 0;
  }
`

const Heading = styled.h4`
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  font-size: 1.2rem;
`

const Description = styled.p`
  font-weight: 300;
  text-align: left;
  margin: 0;
  color: ${props => (props.light ? "white" : "var(--blue)")};
  @media (min-width: 577px) {
    text-align: center;
  }
`
