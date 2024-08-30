import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../assets/email_icon.png';
import user_icon from '../assets/user_icon.png';
import lock_icon from '../assets/lock_icon.png';

const Signup = () => {
  const [action, setAction] = useState("Login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });

  const handleActionChange = (newAction) => {
    if (newAction !== action) {
      setAction(newAction);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (action === "Login") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setSignupData({ ...signupData, [name]: value });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={signupData.username}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={action === "Login" ? loginData.email : signupData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <img src={lock_icon} alt="Lock Icon" />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={action === "Login" ? loginData.password : signupData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      {action === "Login" && (
        <div className="forgot-password">
          Forgot password? <a href="/forgot-password">click here</a>
        </div>
      )}
      <div className="submit-container">
        <button
          className={`submit ${action === "Sign Up" ? "gray" : ""}`}
          onClick={() => handleActionChange("Sign Up")}
        >
          Sign Up
        </button>
        <button
          className={`submit ${action === "Login" ? "gray" : ""}`}
          onClick={() => handleActionChange("Login")}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Signup;
