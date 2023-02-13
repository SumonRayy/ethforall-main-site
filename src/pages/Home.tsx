import React from "react";

function Home() {
  return (
    <HomeStyles>
      <h1>Home</h1>
    </HomeStyles>
  );
}

export default Home;

import styled from "styled-components";

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
