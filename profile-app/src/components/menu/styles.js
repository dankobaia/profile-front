import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../assets/theme/colors";

export const Menu = styled.div`
  transition: all 0.5s ease-in-out;
  position: ${props => (props.fixed ? "fixed" : "relative")};
  margin-top: ${props => (props.fixed ? "0vh" : "-10vh")};
  top: 0vh;
  background-color: ${Colors.background};
  width: 100%;
  height: 10vh;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  & > ul {
    display: flex;
    height: 100%;
    list-style: none;
    padding-inline-start: 0;
    & > li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  @media (min-width: 576px) {
    justify-content: space-between;
  }
`;

export const MenuItem = styled(Link)`
  margin-right: 5px;
  border-bottom: solid 0.25rem
    ${props => (props.selected ? Colors.primary : Colors.complementary)};
  transition: all 0.4s ease;
  height: 100%;
  color: ${Colors.text};
  font-size: 1rem;
  width: 6rem;
  @media (min-width: 576px) {
    font-size: 1.2rem;
    width: 8rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    font-size: 1.1rem;
    @media (min-width: 576px) {
      font-size: 1.2rem;
    }
    text-decoration: none;
    color: white;
    border-bottom: solid 0.5rem ${Colors.primary};
  }
`;
