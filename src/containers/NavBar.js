import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = (props) => {
  return (
    <div>
      <Navbar className="navbar">
        <div className="logo">Bookstore CMS</div>
        <div className="titles">Books</div>
        <div className="titles">Categories</div>
      </Navbar>
    </div>
  );
};

export default NavBar;
