import React from "react";
import NavBar from "../components/nav/NavBar";
import { FaEthereum } from "react-icons/fa";

function Home() {
  return (
    <HomeStyles>
      <NavBar />
      <div className="hero-logo">
        <FaEthereum size={100} />
      </div>
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
  /* justify-content: center; */

  width: 80vw;
  height: 100vh;
  color: #fff;

  margin-top: 10rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .hero-logo {
    svg {
      color: rgba(255, 255, 255, 0.1);
            
      /* -webkit-backdrop-filter: blur(9px); */
    }
  }
`;
