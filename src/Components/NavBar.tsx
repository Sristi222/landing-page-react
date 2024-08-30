import React, { useState } from "react";
import { Link } from 'react-router-dom';
import image from "../assets/LOGO.png"


const Navbar = () => {


  return (
    <nav>
      <div className="nav-logo-container">
      <img src={image} alt="Logo" className="logo" />
        <h1>Task Buddy</h1>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About</Link>
        <Link to="/Features">Features</Link>
        <Link to="/contactus">Contact</Link>
        <Link to="/Signup" className="primary-button">Sign Up</Link>
        <Link to="/login" className="login-button">Log In</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
