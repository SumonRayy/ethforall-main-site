import styled from "styled-components";
import { BiIdCard } from "react-icons/bi";

function NavBar() {
  return (
    <NavStyles>
      <div className="logo">
        <BiIdCard size={45} /> <span>Parichay</span> 
      </div>

      <ul>
        <li>
            <a href="#hero">Get Started</a>
        </li>
        <li>
            <a href="#hero">How to?</a>
        </li>
        <li>
            <a href="#hero">Team</a>
        </li>
        <li>
            <a href="#hero">Contact</a>
        </li>
      </ul>
    </NavStyles>
  );
}

export default NavBar;

const NavStyles = styled.nav`
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
    width: 13%;
    color: ${({theme}) => theme.colors.background.whiteDark};

    span {
        font-family: ${({ theme }) => theme.fonts.fontFamilies.primary};
        font-size: 2rem;
        color: ${({theme}) => theme.colors.palette.quinaryLight}
    }
  }

  ul {
    display: flex;
    list-style: none;

    li{

        a{
            text-transform: none;
        }
    }
  }
`;
