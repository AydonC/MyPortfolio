import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    setIsExpanded(false); // Close the expanded menu after navigation
  };



  return (
    <div 
      className="navbar-container"
    >
        <nav className="navbar">
          <h1 
            className="navbar-logo" 
            style={{ cursor: 'pointer' }} 
            onClick={() => handleClick('/')}
          >
            Home
          </h1>
          <ul className="nav-links">
            <li style={{ cursor: 'pointer' }} onClick={() => handleClick('/AboutMe')}>
              About Me
            </li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleClick('/Projects')}>
              Projects
            </li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleClick('/Contact')}>
              Contact
            </li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleClick('/blog')}>
              Blog
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default Navbar;
