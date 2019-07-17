import styled, { css } from "styled-components"

export default styled.div`
  width: 125%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: center;
  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props => props.maxWidth};
    `}
`
