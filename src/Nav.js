import React from 'react';
import { Link } from '@reach/router';

const Nav = () => (
  <nav style={{ display: 'flex', flexDirection: 'column' }}>
    <Link to="/">Identity</Link>
    <Link to="/functions">Functions</Link>
    <Link to="/auth-functions">Authenticated Functions</Link>
  </nav>
);

export default Nav;
