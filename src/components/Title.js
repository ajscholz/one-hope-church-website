import styled from "styled-components"

export default styled.h2`
  margin: 0 auto 2rem auto;
  color: ${props => props.primary && "var(--primary)"};
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  @media (min-width: 577px) {
    font-size: 3rem;
  }
`
