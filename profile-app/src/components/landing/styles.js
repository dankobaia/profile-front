import styled, { keyframes } from "styled-components";
import Colors from "../../assets/theme/colors";
import logo from "../../assets/images/logo.png";

const fade = () => keyframes`
  0% {
    opacity:0.0
  }
  100% {
    opacity:1
  }
`;

const fadeout = () => keyframes`
  0% {
    opacity:1
  }
  100% {
    opacity:0;
    display:none;
  }
`;
const slideup = () => keyframes`
  0% {
    margin-top:0vh
  }
  100% {
    margin-top:-100vh;
  }
`;

export const LandingContainer = styled.div`
  animation: ${props => (props.slideup ? slideup : "")} 1.5s ease;
  display: ${props => (props.hide ? "none" : "block")};
  height: 100vh;
  background-color: ${Colors.background};
`;
export const Landing = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${logo});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 80%;
  @media (min-width: 576px) {
    background-size: 70%;
  }
  @media (min-width: 768px) {
    background-size: 65%;
  }
  @media (min-width: 1024px) {
    background-size: 55%;
  }
  @media (min-width: 1200px) {
    background-size: 40%;
  }
  animation: ${fade} 3s ease;
`;

export const AnimmationContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  position: absolute;
  display: flex;
  overflow: none;
  justify-content: center;
  align-items: center;
  animation: ${props => (props.finished ? fadeout : "")} 0.8s linear;
`;
