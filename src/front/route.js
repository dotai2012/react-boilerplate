import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Auth from './components/auth';
// import Dashboard from './components/dashboard';
import Home from './pages/Home';

// import { UserIsAuthenticated, UserIsNotAuthenticated } from './service/auth';

export default function RouteApp() {
  return (
    <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/auth" exact component={UserIsNotAuthenticated(Auth)} />
          <Route path="/dashboard" exact component={UserIsAuthenticated(Dashboard)} /> */}
    </Switch>
  );
}
