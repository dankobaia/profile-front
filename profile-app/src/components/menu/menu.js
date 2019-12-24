import React, { useState, useCallback, useRef } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { Menu, Nav, MenuItem, LinkContainer } from "./styles";

export default function() {
  const location = useLocation();
  const [path, setPath] = useState();
  const [fixed, setFixed] = useState(false);
  const currentFixed = useRef(false);
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

  const sc = useCallback(() => {
    if (
      !currentFixed.current &&
      window.pageYOffset * 0.93 >= document.documentElement.clientHeight
    ) {
      setFixed(true);
      currentFixed.current = true;
      window.scrollTo({
        top: document.documentElement.clientHeight,
        behavior: "smooth"
      });
    }
    if (
      currentFixed.current &&
      window.pageYOffset * 1.1 <= document.documentElement.clientHeight
    ) {
      setFixed(false);
      currentFixed.current = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [setFixed]);

  React.useEffect(() => {
    window.addEventListener("scroll", sc);
    setPath(location.pathname);
  }, [location, sc]);
  return (
    <Menu role="menu" fixed={fixed}>
      <Container className="h-100">
        <LinkContainer>
          <div className="d-none d-sm-block">
            <MenuItem to={"/"} selected={true} logo>
              {/* <MenuLogo src={logo} /> */}
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
