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
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1rem;
  width: 300px;
  margin: 0 1rem 1rem 1rem;
`

const Icon = styled.svg`
  font-size: 2.75rem;
  margin: 0 0 1rem 0;
  color: ${props => props.color};
`

const Heading = styled.h4`
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  font-size: 1.2rem;
`

const Description = styled.p`
  font-weight: 300;

  margin: 0;
  color: ${props => (props.light ? "white" : "var(--blue)")};
`
