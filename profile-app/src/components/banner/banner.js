import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Banner, SlidingTextContainer } from "./styles";
import CsharpIntro from "./csharpIntro";

export default function() {
  const [step, setStep] = useState(1);
  const [slide, setSlide] = useState();

  useEffect(() => {
    switch (step) {
      case 1:
        setSlide(<CsharpIntro />);
        break;

      default:
        setStep(1);
        break;
    }
  }, [step]);

  return (
    <Banner>
      <Container className="h-100">
        <Row className="h-100">
          <Col className=" flex-center mb-4 mb-md-0" md={6}></Col>
          <Col md={6} className="flex-center">
            <SlidingTextContainer
              onAnimationIteration={() => {
                setStep(step + 1);
              }}
            >
              {slide}
            </SlidingTextContainer>
          </Col>
        </Row>
      </Container>
    </Banner>
  );
}
