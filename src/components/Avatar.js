import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export default ({ image, name, title }) => {
  return (
    <TeamContainer>
      <Avatar fluid={image}></Avatar>
      <Name>{name}</Name>
      <JobTitle>{title}</JobTitle>
    </TeamContainer>
  )
}

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  text-align: center;
  margin-bottom: 3rem;
  margin-right: 2rem;
  &:last-of-type {
    margin-bottom: 0pc;
    margin-right: 0;
  }
`

const Avatar = styled(Img)`
  width: 100%;
  border-radius: 50%;
`

const Name = styled.h5`
  margin: 1.5rem 0 0.5rem 0;
  color: #f8820d;
  font-size: 2rem;
`

const JobTitle = styled.h6`
  margin: 0;
  color: darkslategray;
  font-size: 0.8rem;
  font-weight: 300;
`
