import React from "react";
import { Route, Switch } from "react-router-dom";
import Alert from "../layout/Alert";
import Landing from "../landing/Landing";
import StandardMail from "../sendMail/StandardMail";
import CustomMailing from "../sendMail/CustomMail";

export const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/home" component={Landing} />
        <Route exact path="/standard-mailer" component={StandardMail} />
        <Route exact path="/custom-mailer" component={CustomMailing} />
      </Switch>
    </section>
  );
};

export default Routes;
