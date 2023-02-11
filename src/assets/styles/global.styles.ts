import { createGlobalStyle, StyledComponentProps } from "styled-components";

const GlobalStyles = createGlobalStyle<
  StyledComponentProps<any, any, any, any>
>`
    html {}
    body {}
`;

export default GlobalStyles;
