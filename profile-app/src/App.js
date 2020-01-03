import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Menu, Landing } from "./components";
import Routes from "./routes";

function App() {
  useEffect(() => {
    window.screen.orientation.lock("portrait-primary");
    console.log("started");
  }, []);

  return (
    <Router>
      <header>
        <Landing />
        <Menu />
      </header>
      <Routes />
    </Router>
  );
}

export default App;
