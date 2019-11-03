import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./session/signup_container";
import Login from "./session/login_container";
import Navbar from "./navbar/navbar_container";
import Reset from "./session/update_container";
import EditOrganization from "./organizations/edit_organization_container";
import Home from "./home";

const App = () => {
  return (
    <div className="app_container">
      <div className="main-class">
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/organizations/:id" component={EditOrganization} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
