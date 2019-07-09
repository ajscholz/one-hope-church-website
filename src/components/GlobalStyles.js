import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --primary: #f8820d;
    /* 
    hsla(30%, 94%, 51%, 1);
    rgba(248, 130, 13, 1);
    */
    --red: #982649;
    /* 
    hsla(342%, 60%, 37%, 1);
    rgba(152, 38, 73, 1);
    */
    --blue: #394648;
    /* 
    hsla(188%, 12%, 25%, 1);
    rgba(57, 70, 72, 1);
    */
    --green: #69995d;
    /* 
    hsla(108%, 24%, 48%, 1);ff
    rgba(105, 153, 93, 1);
     */
    --brown: #cbac88;
    /* 
    hsla(32%, 39%, 66%, 1);
    rgba(203, 172, 136, 1);
    */
    --lightGray: #ededed;
  }
  * {
    font-family: "Raleway";
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--blue);
  }
  a {
    text-decoration: none;
  }
`
