import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Identity from './Identity';
import Functions from './Functions';

const App = () => (
  <Router>
    <Home path="/" />
    <Identity path="/identity" />
    <Functions path="/functions" />
  </Router>
);

export default App;
