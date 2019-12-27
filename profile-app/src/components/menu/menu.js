import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { Menu, Nav, MenuItem, LinkContainer, MenuSpacer } from "./styles";

export default function() {
  const location = useLocation();
  const [path, setPath] = useState();
  const site = useSelector(store => store.site);
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

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  console.log(site);
  return (
    <>
      <MenuSpacer show={site.fixedMenu} />
      <Menu role="menu" fixed={site.fixedMenu}>
        <Container className="h-100">
          <LinkContainer>
            <Nav className="d-none d-sm-block">
              <MenuItem to={"/"} logo="true" />
            </Nav>
            <Nav>
              {menuItens.map((i, index) => (
                <MenuItem key={index} to={i.route} selected={path === i.route}>
                  {i.title}
                </MenuItem>
              ))}
            </Nav>
          </LinkContainer>
        </Container>
      </Menu>
    </>
  );
}
