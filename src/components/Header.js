import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <header>
        <h1 className="header-head">React reading and library app</h1>
        <nav className="main-nav">
          <NavLink to="/">Add a book</NavLink>
          <NavLink to="/library">View library</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;
