import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages";

export default function() {
  return (
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
      <Route path="*">
        <p>404</p>
      </Route>
    </Switch>
  );
}
