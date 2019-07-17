import styled from "styled-components"

export default styled.section`
  padding: 4rem 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-of-type(odd) {
    background: ${props => !props.overlay && "#ededed"};
  }
  background: ${props =>
    props.overlay &&
    "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), linear-gradient(to bottom,rgba(57,70,72,.8),rgba(190, 83, 0, .7))"};
`
