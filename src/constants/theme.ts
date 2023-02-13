// color palette : https://coolors.co/ee6352-2e2836-15616d-1b998b-ffc482
// color palette for neumorphic design : https://coolors.co/ff8a7a-5a5460-3c8a9e-3fc1b0-ffd9b0

const theme = {
  colors: {
    palette: {
      primary: "#ee6352",
      secondary: "#2e2836",
      tertiary: "#15616d",
      quaternary: "#1b998b",
      quinary: "#ffc482",

      black: "#010101",
      white: "#f5f5f5",
      gray: "#e5e5e5",

      primaryLight: "#ff8a7a",
      secondaryLight: "#5a5460",
      tertiaryLight: "#3c8a9e",
      quaternaryLight: "#3fc1b0",
      quinaryLight: "#ffd9b0",

      primaryDark: "#b93f2f",
      secondaryDark: "#0e0b11",
      tertiaryDark: "#0f3d4f",
      quaternaryDark: "#0f6a6f",
      quinaryDark: "#c79a4a",
    },
    background: {
      white: "#fff",
      black: "#000",

      whiteLight: "#f5f5f5",
      blackLight: "#010101",

      whiteDark: "#e5e5e5",
      blackDark: "#0e0b11",
    },
    text: {},
    border: {},
  },
  fonts: {
    fontSizes: {},
    fontWeights: {},
    lineHeights: {},
    fontFamilies: {
      primary: "Nunito, sans-serif",
      secondary: "Roboto, sans-serif",
      tertiary: "Montserrat, sans-serif",
    },
  },
  animations: {},
  breakpoints: {},
  shadows: {
    boxShadow1: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    boxShadowInset1: "inset 0 0 10px 0 rgba(0, 0, 0, 0.1)",

    boxShadow2: "10px 10px 20px 0 rgba(0, 0, 0, 0.1)",
    boxShadowInset2: "inset 10px 10px 20px 0 rgba(0, 0, 0, 0.1)",

    boxShadow3: "20px 20px 40px 0 rgba(255, 255, 255, 0.1)",
    boxShadowInset3: "inset 20px 20px 40px 0 rgba(255, 255, 255, 0.1)",
  },
  sizes: {},
  transitions: {
    transition1: "all 0.1s ease-in-out",
    transition3: "all 0.3s ease-in-out",
  },
};

export default theme;
