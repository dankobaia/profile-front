import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Menu, Landing } from "./components";

import Routes from "./routes";

function App() {
  return (
    <Router>
      <Landing />
      <Menu />
      <Routes />
    </Router>
  );
}

export default App;
