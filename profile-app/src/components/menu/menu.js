import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { Menu, Nav, MenuItem, LinkContainer } from "./styles";

export default function() {
  const location = useLocation();
  const [path, setPath] = useState();
  const menuItens = [
    {
      title: "=>Profile",
      route: "/"
    },
    {
      title: "=>Blog",
      route: "/blog"
    },
    {
      title: "=>Contato",
      route: "/contato"
    }
  ];

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <Menu role="menu">
      <Container className="h-100">
        <LinkContainer>
          <div className="d-none d-sm-block">
            <MenuItem to={"/"} selected={true}>
              Daniel Porto{" "}
            </MenuItem>
          </div>
          <Nav>
            <ul>
              {menuItens.map((i, index) => (
                <li key={index}>
                  <MenuItem to={i.route} selected={path === i.route}>
                    {i.title}
                  </MenuItem>
                </li>
              ))}
            </ul>
          </Nav>
        </LinkContainer>
      </Container>
    </Menu>
  );
}
