import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/global.styles";
import theme from "./constants/theme";

import { useWeb3ModalStore } from "./store/web3Modal.store";

function App() {
  const { isOpen } = useWeb3ModalStore();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer modalOpen={isOpen}>
        <Outlet />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div<{ modalOpen: boolean }>`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* filter: ${({ modalOpen }) => (modalOpen ? "blur(5px)" : "none")}; */
`;
