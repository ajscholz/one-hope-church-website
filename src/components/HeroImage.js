import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const HeroImage = ({ className, image, children, home }) => {
  console.log("hello")
  // adds overlay
  const backgroundFluidImageStack = [
    image,
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
  ].reverse()

  return (
    <StyledBackgroundImage
      home={home}
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
    >
      {children}
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 0;
  @media (min-width: 577px) {
    height: ${props => (props.home ? "100vh" : "40vh")};
  }
`

export default HeroImage
