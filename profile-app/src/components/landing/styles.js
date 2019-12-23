import styled, { keyframes } from "styled-components";
import logo from "../../assets/images/logo.png";

const fade = () => keyframes`
  0% {
    opacity:0.0
  }
  100% {
    opacity:1
  }
`;

export const LandingContainer = styled.div`
  height: 110vh;
  background-color: black;
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
  animation: ${fade} 3s ease;
`;

export const MoreButton = styled.button`
  margin-top: 85vh;
`;
