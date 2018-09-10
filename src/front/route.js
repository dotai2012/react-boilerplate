import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing';
// import Auth from './components/auth';
// import Dashboard from './components/dashboard';

// import { UserIsAuthenticated, UserIsNotAuthenticated } from './service/auth';

export default function RouteApp() {
  return (
    <Switch>
          <Route path="/" exact component={Landing} />
          {/* <Route path="/auth" exact component={UserIsNotAuthenticated(Auth)} />
          <Route path="/dashboard" exact component={UserIsAuthenticated(Dashboard)} /> */}
    </Switch>
  );
}

