import React from "react"
import styled from "styled-components"

export default ({ icon, color, title, text }) => {
  return (
    <Container>
      <Icon as={icon} color={color}></Icon>
      <Heading>{title}</Heading>
      <Description>{text}</Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1rem;
  color: darkslategrey;
  width: 300px;
  margin: 0 1rem 1rem 1rem;
`

const Icon = styled.svg`
  font-size: 3rem;
  color: ${props => props.color};
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
