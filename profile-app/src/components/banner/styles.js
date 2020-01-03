import styled, { keyframes } from "styled-components";
import { Container as BSContainer } from "react-bootstrap";

import Colors from "../../assets/theme/colors";

const moveTitle = () => keyframes`
  0% {
    transform: translate(0, -4vh);
    opacity:0.1
  }
  15% {
    transform: translate(0, 0vh);
    opacity:1

  }
  90% {
    transform: translate(0, 0vh);
    opacity:0.8

  }
  95% {
    transform: translate(-3vw, 0vh);
    opacity:0.7

  }
  98% {
    transform: translate(30vw, -0vh);
    opacity:0
  }
  100% {
    transform: translate(0, -4vh);
    opacity:0
  }
`;

export const Container = styled(BSContainer)`
  padding: 5vh 0vh;
`;

export const Banner = styled.header`
  position: relative;
  text-shadow: 1px 1px 2px black;
  background-color: ${Colors.complementary};
  color: ${Colors.text};
`;

export const SlidingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  animation: ${moveTitle} 8s ease-in infinite;
`;

export const MarginLeft = styled.span`
  margin-left: ${props => (props.space ? props.space : "3vh")};
`;

export const CSharpText = styled.p`
  font-family: "consolas";
`;

export const ColorSpan = styled.span`
  color: ${props => props.color};
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 19rem;
  box-shadow: #00000057 2px 2px 2px;
  opacity: 0.9;
`;
