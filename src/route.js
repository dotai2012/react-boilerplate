import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing';

export default function RouteApp() {
  return (
    <Switch>
          <Route path="/" exact component={Landing} />
    </Switch>
  );
}

