import React from "react";
import { Switch, Route } from "react-router-dom";

export default function() {
  return (
    <Switch>
      <Route exact path="/">
        <p>Home</p>
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
