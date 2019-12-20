import styled, { keyframes } from "styled-components";
import Colors from "../../assets/theme/colors";

const moveTitle = () => keyframes`
  0% {
    transform: translate(0, -4vh);
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
  padding: 10vh 0;
  background-color: ${Colors.complementary};
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
  color: white;
  animation: ${moveTitle} 8s infinite;
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
