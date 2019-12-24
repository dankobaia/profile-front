import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import Body from "./components/body";

export default function() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <Body>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <p>Blog</p>
        </Route>
        <Route path="/contato">
          <p>contato</p>
        </Route>
        <Route exact path="*">
          <p>404</p>
        </Route>
      </Switch>
    </Body>
  );
}
