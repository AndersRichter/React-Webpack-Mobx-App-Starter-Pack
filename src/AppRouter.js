import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import StartPage from "./pages/StartPage";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={ history }>
      <Switch>
        <Route path='/' component={ StartPage } />
      </Switch>
    </Router>
  );
};

export default AppRouter;
