import { createGlobalStyle, StyledComponentProps } from "styled-components";

const GlobalStyles = createGlobalStyle<StyledComponentProps<any, any, any, any>>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: hsla(0,0%,0%,1);
    background-image: ${({theme}) => theme.colors.background.bgLinearGradient1};
    background-attachment: fixed;
    
    color: #000;

    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
`;

export default GlobalStyles;
