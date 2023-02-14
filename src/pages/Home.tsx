import React from "react";
import NavBar from "../components/nav/NavBar";
import { FaEthereum } from "react-icons/fa";

import LinearMandalaWhite from "../assets/images/svgs/linear-mandala";

function Home() {
  return (
    <HomeStyles>
      <FirstSection>
        <NavBar />
        <div className="hero-logo">
          <LinearMandalaWhite />
        </div>
        <h1>
          zk-IDs for EVERYone, on ANY Chain
          <button>Get Started</button>
        </h1>
      </FirstSection>
      <SecondSection id="idea">
        <h1>The Idea</h1>
        <div className="para-section">
          <LinearMandalaWhite />
          <p>
            The Project provides Zero Knowledge Based Identities to everyone and
            offers its representation on any EVM compatible chain. This allows
            for easy tokenization of the fact that a wallet address is not a
            bot. Essentially extending the Sybil Resistance to all EVM
            compatible chains and bringing in Accountability in the mix without
            jeopardizing privacy and anonymity.
            <br />
            <button>Learn More</button>
          </p>
        </div>
      </SecondSection>
    </HomeStyles>
  );
}

export default Home;

import styled from "styled-components";

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 80vw;
  max-height: 90vh;

  color: #fff;

  margin-top: 5rem;
  padding-bottom: 50rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.18);

  overflow: hidden;

  position: relative;

  .hero-logo {
    margin-bottom: 2rem;

    width: 82%;

    transition: all 1.2s ease-in-out;

    svg {
      width: 100%;
      height: 100%;

      fill: #fff;
      opacity: 0.3;

      transition: all 1.2s ease-in-out;
      animation: rotate 200s linear infinite;

      filter: blur(0.08rem);
      /* backdrop-filter: blur(0.5rem); */
      z-index: 1;
    }
  }

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 5rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.fontFamilies.quaternary};

    color: rgba(255, 255, 255, 0.6);

    transition: all 1.2s ease-in-out;

    position: absolute;
    bottom: 21%;

    border: 1px solid transparent;

    z-index: 10;
    width: 100%;
    transform: translateY(10px);

    color: white;
    opacity: 0.8;
    text-shadow: 0 0 20px #000000;

    button {
      margin-top: 2rem;
      width: 15rem;
      padding: 1rem 2rem;
      border: 1px solid #fff;
      outline: none;
      border-radius: 2rem;
      background: transparent;
      color: #fff;
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.fontFamilies.tertiary};
      transition: all 1.2s 0.3s ease-in-out;
      filter: blur(0.08rem);
      opacity: 0.5;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        width: 20rem;
        transition: all 0.6s ease-in-out;
        box-shadow: 0 0 15px 0 rgba(50, 50, 50, 0.5);
      }
    }
  }

  &:hover {
    .hero-logo {
      transform: scale(1.05);

      svg {
        opacity: 0.15;
        /* blur svg */
        filter: blur(0.1rem);
      }
    }

    h1 {
      transform: translateY(0);
      opacity: 1;
      text-shadow: 0 0 10px rgb(255, 255, 255);
      button {
        filter: blur(0rem);
        opacity: 1;
      }
    }
  }
`;

const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.whiteLight};
  transform: translateY(-7rem);
  z-index: 10;

  h1 {
    margin-top: 5rem;
    margin-bottom: 3rem;
    font-size: 10rem;
    font-family: ${({ theme }) => theme.fonts.fontFamilies.tertiary};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.palette.black};
    opacity: 0.7;
  }

  .para-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    margin-bottom: 5rem;

    svg {
      width: 30em;
      height: 30em;
      fill: hsla(359, 62%, 50%, 0.6);

      animation: rotate 100s ease-in-out infinite reverse;
    }

    p {
      flex: 0.7;
      opacity: 0.4;
      font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
      font-size: 1.2rem;

      button {
        font-size: 1.2rem;
        margin: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;

        outline: none;
        background: none;
        /* background-color: transparent; */
        transition: ${({ theme }) => theme.transitions.transition3};
        border: 1px solid ${({ theme }) => theme.colors.background.blackDark};

        &:hover {
          color: ${({ theme }) => theme.colors.palette.white};
          background-color: #0f0f0f;
        }
      }
    }
  }
`;

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
