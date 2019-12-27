import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../assets/theme/colors";
import logo from "../../assets/images/logo.svg";

export const Menu = styled.div`
  transition: all 0.5s ease-in-out;
  position: ${props => (props.fixed ? "fixed" : "relative")};
  top: 0vh;
  background-color: ${Colors.background};
  width: 100%;
  min-height: 70px;
  height: 10vh;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const MenuSpacer = styled.div`
  background-color: ${Colors.background};
  display: ${props => (props.show ? "block" : "none")};
  height: 10vh;
  width: 100vw;
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
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
  background: ${props =>
    props.logo ? `no-repeat center/95% url(${logo})` : "initial"};
  margin-right: 5px;
  border-bottom: solid
    ${props =>
      props.selected
        ? `0.25rem  ${Colors.primary}`
        : `0.0rem ${Colors.complementary}`};
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
    background-size: 100%;
    @media (min-width: 576px) {
      font-size: 1.3rem;
    }
    text-decoration: none;
    color: white;
    border-bottom: solid 0.5rem ${Colors.primary};
  }
`;
