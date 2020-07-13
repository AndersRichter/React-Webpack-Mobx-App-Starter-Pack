import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { routes } from "constants/routes";

import StartPage from "pages/StartPage";
import SecondPage from "pages/SecondPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ routes.start } component={ StartPage } />
        <Route path={ routes.second } component={ SecondPage } />
        <Redirect to={ routes.start } />
      </Switch>
    </Router>
  );
};

export default AppRouter;
