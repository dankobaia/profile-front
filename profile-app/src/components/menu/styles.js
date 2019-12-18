import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../assets/theme/colors";

export const Menu = styled.div`
  position: fixed;
  background-color: ${Colors.background};
  height: 10vh;
  width: 100vw;
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
  transition: all 0.2s ease;
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
