import React from 'react';
import { Link } from '@reach/router';

const Home = () => (
  <nav style={{ display: 'flex', flexDirection: 'column' }}>
    <Link to="/">Home</Link>
    <Link to="/identity">Identity</Link>
    <Link to="/functions">Functions</Link>
  </nav>
);

export default Home;
