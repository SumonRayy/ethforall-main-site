import styled from "styled-components";
import { TbCircles } from "react-icons/tb";

function NavBar() {
  return (
    <NavStyles>
      <div className="logo">
        <TbCircles size={45} />
        <span>parichay</span>
      </div>

      <ul>
        <li>
          <a href="#idea">The Idea</a>
        </li>
        <li>
          <a href="#how-to">How To?</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavStyles>
  );
}

export default NavBar;

const NavStyles = styled.nav`
  z-index: 100;
  width: 100%;
  /* border: 2px solid #fff; */
  padding: 2rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.background.whiteLight};
    transition: all 0.3s ease-in-out;

    span {
      font-family: ${({ theme }) => theme.fonts.fontFamilies.tertiary};
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.1rem;
    }

    svg {
      transition: all 0.5s ease-in-out;
    }

    &:hover {
      cursor: pointer;

      svg {
        color: ${({ theme }) => theme.colors.background.white};
        transform: rotate(180deg);
      }

      span {
        color: ${({ theme }) => theme.colors.background.white};
        /* text shadow */
        text-shadow: 1px 1px 10px -2px ${({ theme }) => theme.colors.background.white};
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 50%;

    li {
      transition: all 0.3s ease-in-out;
      border: 2px solid transparent;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      a {
        font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.background.whiteDark};
        transition: all 0.3s ease-in-out;
        text-decoration: none;
      }

      &:hover {
        border: 2px solid ${({ theme }) => theme.colors.background.whiteLight};
        box-shadow: ${({ theme }) => theme.shadows.boxShadow3},
          ${({ theme }) => theme.shadows.boxShadowInset3};

        a {
          color: ${({ theme }) => theme.colors.background.whiteLight};
        }
      }
    }
  }
`;
