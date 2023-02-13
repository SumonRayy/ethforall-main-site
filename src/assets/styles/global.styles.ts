import { createGlobalStyle, StyledComponentProps } from "styled-components";

const GlobalStyles = createGlobalStyle<
  StyledComponentProps<any, any, any, any>
>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    color: #000;
  }
`;

export default GlobalStyles;
