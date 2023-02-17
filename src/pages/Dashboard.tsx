import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import LeftPanel from "../views/dashboard/left.panel";
import RightPanel from "../views/dashboard/right.panel";

function Dashboard() {
  const [currentPanel, setCurrentPanel] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    switch (currentPanel) {
      case 1:
        navigate("/dashboard/home");
        break;
      case 2:
        navigate("/dashboard/manage");
        break;
      case 3:
        navigate("/dashboard/close");
        break;
      default:
        navigate("/dashboard/home");
        break;
    }
  }, [currentPanel]);

  return (
    <StyledDashboard>
      <LeftPanel
        setCurrentPanel={setCurrentPanel}
        currentPanel={currentPanel}
      />
      <RightPanel currentPanel={currentPanel} />
    </StyledDashboard>
  );
}

export default Dashboard;

const StyledDashboard = styled.div`
  display: flex;
  justify-content: space-between;

  min-width: 80vw;
  min-height: 80vh;

  color: #fff;

  margin: 3rem 5rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .left-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    min-height: 30em;
    width: 100%;
    flex: 0.1;

    background: rgba(255, 255, 255, 0.4);

    border-radius: 3rem;
    .left-panel__top {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;

      margin: 0 2rem;
      min-width: 15rem;
      .profile-image {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0 1rem 0;

        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);

        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.18);

        padding: 0.5rem;

        img {
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
        }
      }

      .profile-info {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          margin: 0;
          font-size: 2rem;
          font-weight: 600;
          color: #ffffff;
          font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
          text-transform: uppercase;
        }

        h2 {
          font-size: 1.2rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.text.lightWhite};
        }

        span {
          font-size: 0.6rem;
          color: ${({ theme }) => theme.colors.text.darkWhite};
          font-weight: 400;
        }
      }
    }

    .left-panel__bottom {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      margin: 2rem 0 1rem 0;
      flex: 1;

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 100%;
        list-style: none;

        margin: 1.2rem 0;
        overflow: hidden;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
          padding: 0.5rem 1rem;
          margin: 0.3rem 0;
          text-align: left;
          font-size: 1.2rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.background.white04};

          cursor: pointer;
          transition: all 0.3s 0.1s ease-in-out;

          span {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          svg {
            font-size: 1.5rem;
            margin-left: 1rem;
          }

          &:hover {
            background: ${({ theme }) => theme.colors.background.white03};
            color: ${({ theme }) => theme.colors.background.black03};
            transform: scale(1.05);
          }
        }

        .active {
          background: ${({ theme }) => theme.colors.background.white03};
          color: ${({ theme }) => theme.colors.background.black03};
          transform: scale(1.05);
          cursor: default;
        }
      }
    }
  }

  .right-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    min-height: 30em;
    width: 100%;
    flex: 0.9;

    .right-panel__top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      width: 80%;
      height: 100%;
      flex: 0.8;

      margin: 2rem;
      padding: 2rem;

      background: ${({ theme }) => theme.colors.background.white01};
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);

      border-radius: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.18);

      position: relative;
      overflow: hidden;

      h1 {
        font-size: calc(2.5rem + 1vw);
        font-weight: 400;
        color: ${({ theme }) => theme.colors.background.white};
        font-family: ${({ theme }) => theme.fonts.fontFamilies.quaternary};
        text-transform: uppercase;
        text-align: center;
        text-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.5);
      }

      p {
        font-size: calc(0.7rem + 0.5vw);
        font-weight: 300;
        color: ${({ theme }) => theme.colors.background.white04};
        font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
      }

      svg {
        position: absolute;
        bottom: -43rem;
        font-size: 50rem;
        fill: ${({ theme }) => theme.colors.background.white01};
      }
    }

    .right-panel__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 80%;

      & > div {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);

        border-radius: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.18);

        margin: 0 2rem 4rem 2rem;

        padding: 1rem;

        width: 100%;
        min-height: 15rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.background.white04};
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
        }
        .panel-item {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: flex-end;
        }

        ul {
          flex: 0.5;
          list-style: none;
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            padding: 0 2rem;
            color: ${({ theme }) => theme.colors.background.white};
          }
        }
      }
    }
  }
`;
