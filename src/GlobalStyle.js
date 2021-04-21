
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: rgb(0, 0, 0, 0.9);
    font-size: 12px;
  }

  * {
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }
`

export default GlobalStyle;