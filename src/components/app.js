import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from '../route';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
            <RouteApp />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
