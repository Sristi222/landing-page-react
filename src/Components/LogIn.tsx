import React, { useState } from "react";
import "./LogInForm.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import bg from '../assets/bg.png';
import { Link } from 'react-router-dom';




export default function LogIn() {
  const [action, setAction] = useState('login'); // Default to 'login'

  const showLogin = () => {
    setAction('login');
  };

  const showRegister = () => {
    setAction('register');
  };

  return (
    <div className="wrapper">
      <div className="left-section">
        <img src={bg} alt="Illustration" className="illustration" />
      </div>

      {action === 'login' && (
        <div className="right-section">
          <div className="LogInAccount">
            <h2 className="welcome-text">Welcome back</h2>
            <form action="">
              <h1>LogIn</h1>
              <div className="input-box">
                <input type="text" placeholder="Enter the Username" />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Enter the password" />
                <FaLock className="icon" />
              </div>
              <div className="password-remember">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#" onClick={showRegister}>Forgot password?</a>
              </div>
              <Link to="/Dashboard">
                <button type="submit">LogIn</button>
              </Link>
              <div className="registration">
                <p>
                  Don't have an account? <a href="#" onClick={showRegister}>Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {action === 'register' && (
        <div className="right-section">
          <div className="registration-form">
            <h2 className="welcome-text">Welcome to our community!</h2>
            <form action="">
              <h1>Register</h1>
              <div className="input-box">
                <input type="text" placeholder="Enter the Username" />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input type="email" placeholder="Enter the Email" />
                <FaEnvelope className="icon" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Enter the password" />
                <FaLock className="icon" />
              </div>
              <div className="password-remember">
                <label>
                  <input type="checkbox" />I agree to the terms & conditions
                </label>
              </div>
              <button type="submit">Register</button>
              <div className="registration">
                <p>
                  Already have an account? <a href="#" onClick={showLogin}>LogIn</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
