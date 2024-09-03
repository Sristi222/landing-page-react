import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar"; // Fix the import to match the correct name
import Home from "./Components/Home";
import AboutUs from "./Components/aboutus";
import Login from "./Components/LogIn";
import Features from "./Components/Features";
import Footer from "./Components/footer";
import Dashboard from "./Components/Dashboard";
import "./App.css"

function App() {
  const location = useLocation(); // Get the current location object
  const isDashboard = location.pathname === '/Dashboard'; // Check if the current path is '/dashboard'

  return (
    <div className="App">
      {/* Conditionally render Navbar and Footer */}
      {!isDashboard && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
