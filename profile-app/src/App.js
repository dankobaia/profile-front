import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Menu } from "./components";

import Routes from "./routes";

function App() {
  return (
    <Router>
      <Menu />
      <Container>
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
