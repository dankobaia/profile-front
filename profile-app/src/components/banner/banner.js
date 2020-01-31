import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { Banner, ProfilePicture, Container } from "./styles";
import BIRDS from "vanta/dist/vanta.net.min.js";
import * as THREE from "three";
import picture from "../../assets/images/profile-picture.jpg";

export default function() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    console.log(myRef.current && myRef.current.clientHeight);
    if (!vantaEffect && myRef.current) {
      setVantaEffect(
        BIRDS({
          THREE: THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 408,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 7.0,
          maxDistance: 25.0,
          spacing: 18.0,
          showDots: true,
          backgroundColor: 0x0,
          color: 0x248a3d
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Banner ref={myRef}>
      <Container>
        <Row>
          <Col
            className=" flex-center mb-4 mb-md-0  flex-column text-center text-md-left"
            md={8}
          >
            <h1 className="mb-3">
              Olá eu me chamo Daniel, sou um desenvolvedor fullstack morando no
              Rio de Janeiro
            </h1>
            <p>
              Possuo experiencia com desenvolvimento de APIs, aplicações
              desktops e web, aplicativos Hibridos, integrações, crawlers e
              microserviços
            </p>
          </Col>
          <Col md={4} className=" flex-center mb-4 mb-md-0">
            <picture>
              <ProfilePicture src={picture} alt="profile picture" />
            </picture>
          </Col>
        </Row>
      </Container>
    </Banner>
  );
}
