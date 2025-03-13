import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#282c34', color: 'white' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/archived" style={{ color: 'white', textDecoration: 'none' }}>Archived</Link>
    </nav>
  );
};

export default Header;
