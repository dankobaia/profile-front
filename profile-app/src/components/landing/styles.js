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
    opacity:0
  }
`;

export const LandingContainer = styled.div`
  height: 100vh;
  background-color: ${Colors.background};
`;
export const Landing = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${logo});
  background-position: center 30vh;
  background-repeat: no-repeat;
  background-size: 80%;
  @media (min-width: 576px) {
    background-position: center 25vh;
    background-size: 70%;
  }
  @media (min-width: 768px) {
    background-position: center 20vh;
    background-size: 65%;
  }
  @media (min-width: 1024px) {
    background-size: 55%;
  }
  @media (min-width: 1200px) {
    background-size: 40%;
  }
  animation: ${fade} 4s ease;
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
  animation: ${props => (props.finished ? fadeout : "")} 0.5s linear;
`;

export const MoreButton = styled.button`
  margin-top: 80vh;
  color: ${Colors.text};
  font-size: 2rem;
  border-radius: 5%;
  border-width: 0.25rem;
  border-style: solid;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  background-color: transparent;
`;
