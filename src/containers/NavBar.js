import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => (
  <div>
    <Navbar className="navbar">
      <div className="logo">Bookstore CMS</div>
      <div className="titles">Books</div>
      <div className="titles">Categories</div>
      <div className="icon"><i className="fa fa-user fa-2x icon-in" aria-hidden="true" /></div>
    </Navbar>
  </div>
);

export default NavBar;
