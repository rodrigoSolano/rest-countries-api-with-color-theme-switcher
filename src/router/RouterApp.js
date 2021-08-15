import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { CountryDetail, Home } from "../pages";
import React from "react";
import { Header } from "../containers";

const RouterApp = ({changeTheme,themeIndex}) => {
  return (
    <Router>
      <Header changeTheme={changeTheme} themeIndex={themeIndex} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:name" component={CountryDetail} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
