import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../containers/Home";

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
    </div>
  </Router>
);

export default AppRouter;
