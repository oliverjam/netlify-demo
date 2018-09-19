import React from 'react';
import { Router } from '@reach/router';
import Nav from './Nav';
import Identity from './Identity';
import Functions from './Functions';
import AuthFunctions from './AuthFunctions';

const App = () => (
  <div>
    <Nav />
    <Router>
      <Identity path="/" />
      <Functions path="/functions" />
      <AuthFunctions path="/auth-functions" />
    </Router>
  </div>
);

export default App;
