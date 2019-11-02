import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./session/signup_container";
import Home from "./home";

const App = () => {
  return (
    <div className="app_container">
      <div className="main-class">
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
