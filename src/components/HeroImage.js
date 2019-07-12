import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const HeroImage = ({ className, image, children, full }) => {
  // adds overlay

  const backgroundFluidImageStack =
    full === true
      ? [
          image,
          `linear-gradient(to bottom, rgba(15,15,15,.6), rgba(57,70,72,.6))`,
        ].reverse()
      : [
          image,
          `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
        ].reverse()

  return (
    <StyledBackgroundImage
      full={full ? "true" : "false"}
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
    >
      {children}
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  height: ${props => (props.full === "true" ? "100vh" : "40vh")};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 0;
  @media (min-width: 577px) {
    height: ${props => (props.full === "true" ? "100vh" : "40vh")};
  }
`

export default HeroImage
