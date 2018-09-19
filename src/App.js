import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Identity from './Identity';
import Functions from './Functions';
import AuthFunctions from './AuthFunctions';

const App = () => (
  <Router>
    <Home path="/" />
    <Identity path="/identity" />
    <Functions path="/functions" />
    <AuthFunctions path="/auth-functions" />
  </Router>
);

export default App;
