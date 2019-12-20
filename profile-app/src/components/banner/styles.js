import styled, { keyframes } from "styled-components";
import Colors from "../../assets/theme/colors";

const moveTitle = () => keyframes`
  0% {
    transform: translate(0, -2vh);
    opacity:0
  }
  45% {
    transform: translate(0, 0vh);
    opacity:1

  }
  90% {
    transform: translate(0, 0vh);
    opacity:0.8

  }
  100% {
    transform: translate(130vh, -0vh);
    opacity:0
  }
`;

const fade = () => keyframes`
  0% {
    opacity:0
  }
  100% {
    opacity:1

  }
`;

export const Banner = styled.div`
  width: 100vw;
  padding: 10vh 0;
  background-color: ${Colors.complementary};
  margin-top: 10vh;
  min-height: 46vh;
`;

export const Picture = styled.img`
  width: 17rem;
  border-radius: 50%;
  animation: ${fade} 0.5s ease;
`;

export const SlidingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  animation: ${moveTitle} 8s infinite;
`;

export const MarginLeft = styled.span`
  margin-left: 3vh;
`;

export const CSharpText = styled.p`
  font-family: "consolas";
`;

export const ColorSpan = styled.span`
  color: ${props => props.color};
`;
