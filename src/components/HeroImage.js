import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const HeroImage = ({ className, image, children, full }) => {
  const [height, setHeight] = React.useState(window.innerHeight)
  React.useEffect(() => {
    const handleHeightChange = () => {
      setHeight(window.innerHeight)
    }
    if (full) {
      window.addEventListener("resize", handleHeightChange)
    }
    return () => {
      window.removeEventListener("resize", handleHeightChange)
    }
  }, [height])

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

  const imageHeight = full ? `${height}px` : `40vh`

  return (
    <StyledBackgroundImage
      full={full ? "true" : "false"}
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
      style={{ height: `${imageHeight}` }}
    >
      {children}
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  min-height: 300px;
  padding-bottom: ${props => (props.full === "true" ? "3.5rem" : "0")};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 0;
`

export default HeroImage
