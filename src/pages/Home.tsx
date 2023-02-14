import React from "react";
import NavBar from "../components/nav/NavBar";
import { FaEthereum, FaGithub, FaDiscord } from "react-icons/fa";
import { TbCircles } from "react-icons/tb";
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
          <button>Connect Wallet</button>
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
      <ThirdSection id="how-to">
        <h1>How To?</h1>
        <p>
          Just with these easy steps you can get your own zkSBT (yeah, that's
          what we are calling it right now)
        </p>
        <div className="step-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h2>Connect</h2>
              <p>
                Connect your wallet to the website. We support Metamask, Wallet
                Connect and Portis.
              </p>
            </div>
          </div>
          <div className="step">
            <div
              className="step-content"
              style={{
                alignItems: "flex-end",
              }}
            >
              <h2>Verify</h2>
              <p>Verify your Government Issued ID and Liveness Detection</p>
            </div>
            <div className="step-number">2</div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h2>Collect</h2>
              <p>Collect your Proof of Personhood n' zkSBT</p>
            </div>
          </div>
        </div>
      </ThirdSection>
      <FourthSection id="team">
        <h1>Team</h1>
        <div className="team-container">
          <div className="team-member">
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/38981107?v=4" />
            </div>
            <div className="team-member-name">Abhik</div>
            <div className="team-member-role">Project Lead</div>
            <LinearMandalaWhite />
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/42205351?v=4" />
            </div>
            <div className="team-member-name">Amit</div>
            <div className="team-member-role">Blockchain Developer</div>
            <LinearMandalaWhite />
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/74421964?v=4" />
            </div>
            <div className="team-member-name">Priyanshu</div>
            <div className="team-member-role">Blockchain Developer</div>
            <LinearMandalaWhite />
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/96810668?v=4" />
            </div>
            <div className="team-member-name">Rahul</div>
            <div className="team-member-role">BackEnd Developer</div>
            <LinearMandalaWhite />
          </div>
          <div
            className="team-member"
            onClick={() => window.open("https://github.com/SumonRayy")}
          >
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/53209811?v=4" />
            </div>
            <div className="team-member-name">Sumon</div>
            <div
              className="team-member-role"
              style={{ textAlign: "center", bottom: "25%" }}
            >
              UI/UX + <br /> FrontEnd Developer
            </div>
            <LinearMandalaWhite />
          </div>
        </div>
      </FourthSection>
      <FifthSection id="contact">
        <h1>Contact</h1>
        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <button>Send</button>
          </form>
          <TbCircles size={100} />
          <div className="footer">
            <div className="contact-info">
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              arcu elit, tempor et feugiat ut, ullamcorper in nulla. Mauris ut
              lectus gravida, consequat ex a, pretium mauris. Proin id aliquet
              metus. Aliquam gravida est ut purus rutrum, sed pretium lorem
              placerat. Nunc eu tortor nec neque efficitur pellentesque ac ut
              erat. Duis non sodales dolor. Phasellus vitae enim blandit,
              placerat orci at, posuere metus. Morbi ac auctor felis, nec
              lobortis eros. Duis sagittis sollicitudin arcu ac pulvinar.
              Maecenas interdum euismod lorem, at euismod neque mattis
              fermentum.
              <br />
              Made with ❤️ by GG Team
            </p>
          </div>
        </div>
      </FifthSection>
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
  opacity: 0.8;
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

        width: 10rem;
        height: 10rem;
        margin: 2rem;
        border-radius: 50%;

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
