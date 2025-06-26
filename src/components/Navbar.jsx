import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link to="/research" style={{ marginRight: '1rem' }}>Research</Link>
      <Link to="/teaching" style={{ marginRight: '1rem' }}>Teaching</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;