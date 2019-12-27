import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Banner, ProfilePicture } from "./styles";
import picture from "../../assets/images/profile-picture.jpg";

export default function() {
  return (
    <Banner>
      <Container className="h-100">
        <Row className="h-100">
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
