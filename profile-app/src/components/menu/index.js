import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { Menu, Nav, MenuItem, LinkContainer } from "./styles";

export default function() {
  const location = useLocation();
  const [path, setPath] = useState();

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <Menu>
      <Container className="h-100">
        <LinkContainer>
          <div className="d-none d-sm-block">
            <MenuItem to={"/"} selected={true}>
              Daniel Porto{" "}
            </MenuItem>
          </div>
          <Nav>
            <ul>
              <li>
                <MenuItem to={"/"} selected={path === "/"}>
                  =>Profile
                </MenuItem>
              </li>
              <li>
                <MenuItem to={"/blog"} selected={path === "/blog"}>
                  =>Blog
                </MenuItem>
              </li>
              <li>
                <MenuItem to={"/contato"} selected={path === "/contato"}>
                  =>Contato
                </MenuItem>
              </li>
            </ul>
          </Nav>
        </LinkContainer>
      </Container>
    </Menu>
  );
}
