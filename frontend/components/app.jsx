import React from "react";
import { ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import Signup from "./session/signup_container";
import Login from "./session/login_container";
import Navbar from "./navbar/navbar_container";
import Reset from "./session/update_container";
import EditOrganization from "./organizations/edit_organization_container";
import Shifts from "./shifts/shifts_container";
import ForgotPassword from "./password/forgot_password_container";
import ResetPassword from "./password/reset_password_container";
import Home from "./home";

const App = () => {
  return (
    <div className="app_container">
      <div className="main-class">
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot_password" component={ForgotPassword} />
          <Route exact path="/password_resets/:id" component={ResetPassword} />
          <ProtectedRoute exact path="/reset" component={Reset} />
          <ProtectedRoute
            exact
            path="/organizations/:id"
            component={EditOrganization}
          />
          <ProtectedRoute exact path="/shifts/:id" component={Shifts} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
