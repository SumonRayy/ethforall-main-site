import React from "react";
import styled from "styled-components";
import HeroSection from "../views/home/hero.section";
import IdeaSection from "../views/home/idea.section";
import HowToSection from "../views/home/howTo.section";
import TeamSection from "../views/home/team.section";
import FooterSection from "../views/home/footer.section";

function Home() {  

  return (
    <HomeStyles>
      <FirstSection>
        <HeroSection />
      </FirstSection>
      <SecondSection id="idea">
        <IdeaSection />
      </SecondSection>
      <ThirdSection id="how-to">
        <HowToSection />
      </ThirdSection>
      <FourthSection id="team">
        <TeamSection />
      </FourthSection>
      <FifthSection id="footer">
        <FooterSection />
      </FifthSection>
    </HomeStyles>
  );
}

export default Home;

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

  border-radius: 3rem 3rem 0 0;
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
    /* opacity: 0.8; */
    text-shadow: 0 0 20px #000000;

    button {
      margin-top: 2rem;
      width: 18rem;
      padding: 1rem 2rem;
      border: 1px solid #fff;
      outline: none;
      border-radius: 2rem;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.fontFamilies.tertiary};
      transition: all 1.2s 0.3s ease-in-out;
      text-shadow: 0 0 20px #fffafa;
      opacity: 1;
      /* box-shadow: 0 0 15px 0 #000000; */
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
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
  background-color: #fff;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgba(255, 255, 255, 1) 5%,
    rgba(255, 255, 255, 1) 15%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 35%,
    rgba(237, 237, 237, 0.8) 50%,
    rgba(237, 237, 237, 0.5) 70%,
    rgba(237, 237, 237, 0.3) 80%,
    rgba(237, 237, 237, 0.001) 100%
  );

  transform: translateY(0rem);
  z-index: 10;

  h1 {
    margin-top: 5rem;
    margin-bottom: 3rem;
    font-size: 5rem;
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
      fill: ${({ theme }) => theme.colors.palette.black};
      opacity: 0.5;
      animation: rotate 100s ease-in-out infinite reverse;
    }

    p {
      flex: 0.7;
      opacity: 0.8;
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

const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  color: ${({ theme }) => theme.colors.palette.white};
  background-color: transparent;

  width: 100%;
  margin-top: 0;
  h1 {
    font-size: 5rem;
    font-family: ${({ theme }) => theme.fonts.fontFamilies.tertiary};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.palette.white};
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  .step-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem 0;

    .step {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      margin: 2rem 0;
      padding: 0 4rem;
      background: rgba(132, 132, 132, 0.2);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);

      border-radius: 30px;
      border: 1px solid rgba(255, 255, 255, 0.18);

      .step-number {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 160px;
        height: 160px;
        margin: 2rem;
        border-radius: 80px;

        font-size: 8rem;
        font-family: ${({ theme }) => theme.fonts.fontFamilies.tertiary};
        color: ${({ theme }) => theme.colors.palette.white};
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

        border: 1px solid ${({ theme }) => theme.colors.palette.white};
        background-color: transparent;
        background: rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);
      }

      .step-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width: 70%;

        h2 {
          font-size: 3rem;
          font-family: ${({ theme }) => theme.fonts.fontFamilies.secondary};
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.palette.white};
        }

        p {
          font-size: 1rem;
          font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
          color: ${({ theme }) => theme.colors.palette.gray};
        }
      }
    }
  }
`;

const FourthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.palette.white};
  background-color: transparent;

  width: 100%;
  margin-top: 0;
  background-color: #fff;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgba(255, 255, 255, 1) 5%,
    rgba(255, 255, 255, 1) 15%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 35%,
    rgba(237, 237, 237, 0.8) 50%,
    rgba(237, 237, 237, 0.5) 70%,
    rgba(237, 237, 237, 0.3) 80%,
    rgba(237, 237, 237, 0.001) 100%
  );

  h1 {
    padding: 2rem 0;
    font-size: 5rem;
    font-family: ${({ theme }) => theme.fonts.fontFamilies.tertiary};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.palette.black};
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    opacity: 0.6;
  }

  .team-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    width: 100%;
    padding: 2rem;
    padding-top: 3rem;
    gap: 8rem;

    .team-member {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 20rem;
      height: 20rem;
      padding: 1rem;
      border-radius: 50%;

      transition: all 0.3s ease-in-out;
      position: relative;
      cursor: pointer;
      svg {
        width: 120%;
        height: 120%;
        opacity: 0.2;
        transition: all 0.3s ease-in-out;
        animation: rotate 50s linear infinite;
        border-radius: 50%;
        fill: rgba(0, 0, 0, 0.3);
        position: absolute;
        z-index: 2;
      }

      .team-member-image {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4;
        width: 100%;
        height: 100%;
        margin: 2rem;
        padding: 1.25rem;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 50%;
        background-color: transparent;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      .team-member-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 5;
        position: absolute;

        width: 100%;
        height: 100%;
        padding: 2rem;

        font-size: 2.35rem;
        letter-spacing: 0.1rem;
        font-family: ${({ theme }) => theme.fonts.fontFamilies.quaternary};
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.palette.white};
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.837);
      }

      .team-member-role {
        position: absolute;
        bottom: 35%;
        z-index: 5;
        font-size: 1.2rem;
        font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
        color: ${({ theme }) => theme.colors.palette.white};
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.933);
        transition: all 0.3s ease-in-out;
        opacity: 0;
      }

      &:hover {
        transform: scale(1.2);

        svg {
          opacity: 0.8;
        }

        .team-member-role {
          opacity: 1;
        }
      }
    }
  }
`;

const FifthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.palette.white};
  background-color: rgba(0, 0, 0, 0.5);

  width: 100%;
  margin-top: 5rem;

  h1 {
    padding: 2rem 0;
    font-size: 4rem;
    font-family: ${({ theme }) => theme.fonts.fontFamilies.tertiary};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.palette.white};

    opacity: 0.6;
  }

  .contact-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    .contact-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      width: 50%;
      padding: 1rem;
      margin: 1rem;
      gap: 2rem;

      input {
        width: 70%;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.palette.white};
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.palette.white};
        transition: all 0.3s ease-in-out;

        &:focus {
          width: 80%;
          border-bottom: 1px solid ${({ theme }) => theme.colors.palette.white};
        }

        &::placeholder {
          color: ${({ theme }) => theme.colors.palette.white};
          opacity: 0.5;
        }

        &:focus::placeholder {
          opacity: 0;
        }

        &:hover {
          border-bottom: 2px solid ${({ theme }) => theme.colors.palette.white};
        }
      }

      textarea {
        width: 70%;
        height: 10rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.palette.white};
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.palette.white};
        transition: all 0.3s ease-in-out;

        &:focus {
          width: 80%;
          border-bottom: 1px solid ${({ theme }) => theme.colors.palette.white};
        }

        &::placeholder {
          color: ${({ theme }) => theme.colors.palette.white};
          opacity: 0.5;
        }

        &:focus::placeholder {
          opacity: 0;
        }

        &:hover {
          border-bottom: 4px solid ${({ theme }) => theme.colors.palette.white};
        }
      }

      button {
        width: 70%;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.palette.white};
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        border: 1px solid ${({ theme }) => theme.colors.palette.white};
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: ${({ theme }) => theme.colors.palette.white};
          color: ${({ theme }) => theme.colors.palette.black};
        }
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      width: 50%;
      gap: 2rem;
      .contact-info {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 80%;

        flex-wrap: wrap;
        gap: 2rem;
        .contact-info-item {
          display: flex;
          align-items: center;
          justify-content: center;

          background-color: rgba(0, 0, 0, 0.45);
          border-radius: 10rem;
          padding: 1rem;
          gap: 1rem;
        }
      }

      p {
        font-size: 1rem;
        width: 80%;
        text-align: center;
        font-family: ${({ theme }) => theme.fonts.fontFamilies.secondary};
        color: ${({ theme }) => theme.colors.background.whiteDark};
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
