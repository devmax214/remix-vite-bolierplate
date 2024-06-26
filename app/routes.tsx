import React from "react";
import { Route } from "remix-json-routes";

export default (
  <Route path="/o/demo" file="demo/index.tsx">
    <Route path="counter" file="demo/counter.tsx" />
    <Route path="counter/:num" file="demo/counter.tsx" />
  </Route>
);
