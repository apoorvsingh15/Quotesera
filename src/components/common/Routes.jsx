import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../containers/Home";
import Dimensions from "../../containers/Dimensions";
import AddText from "../../containers/AddText";
import Quotes from "../../containers/Quotes";

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/dimensions" component={Dimensions} />
      <Route path="/add-text" component={AddText} />
      <Route path="/quotes" component={Quotes} />
    </div>
  </Router>
);

export default AppRouter;
