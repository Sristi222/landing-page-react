import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutUs from "./Components/aboutus";
import Login from "./Components/LogIn";
import './App.css';
import Features from "./Components/Features";
import Signup from "./Components/Signup";
import Footer from "./Components/footer"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
