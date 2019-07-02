import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const HeroImage = ({ className, image, children, home }) => {
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
  height: ${props => (props.home ? "90vh" : "40vh")};
  /* position: absolute;
  top: -4rem;
  left: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`

export default HeroImage
