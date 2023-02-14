import { createGlobalStyle, StyledComponentProps } from "styled-components";

const GlobalStyles = createGlobalStyle<
  StyledComponentProps<any, any, any, any>
>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;    
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: hsla(0,0%,0%,1);
    background-image: ${({ theme }) =>
      theme.colors.background.bgLinearGradient1};
    background-attachment: fixed;    
    color: #000;
    width: 100%;
    display: flex;
    align-items: flex-start;    
  }

  #root {    
    width: 100%;
    position: relative;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyles;
