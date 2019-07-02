import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    font-family: "Montserrat";
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
