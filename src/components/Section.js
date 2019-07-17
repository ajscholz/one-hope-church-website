import styled from "styled-components"

export default styled.section`
  padding: 4rem 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-of-type(odd) {
    background: ${props => !props.overlay && "#ededed"};
  }
  background: ${props => props.overlay && "rgba(0, 0, 0, 0.6)"};
`
