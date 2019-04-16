import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar navbar-dark navbar-expand bg-dark fixed-top">
      <Link className="navbar-brand" to="/">LUSSMS</Link>
    </nav>
  );
}

export default NavBar;