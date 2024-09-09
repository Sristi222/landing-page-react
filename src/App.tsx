import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutUs from "./Components/aboutus";
import Login from "./Components/LogIn";
import Features from "./Components/Features";
import Footer from "./Components/footer";
import Dashboard from "./Components/Dashboard";
import DateSelector from "./Components/DateSelector";
import List from "./Components/List";

import "./App.css"

function App() {
  const location = useLocation();

  // Check if the current path is either '/dashboard' or '/DateSelector'
  const isDashboardOrDateSelectorOrList = location.pathname === '/Dashboard' || location.pathname === '/DateSelector' || location.pathname ==='/List'

  return (
    <div className="App">
      {/* Conditionally render NavBar and Footer */}
      {!isDashboardOrDateSelectorOrList && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/DateSelector" element={<DateSelector />} />
        <Route path="/List" element={<List />} />

      </Routes>
      {!isDashboardOrDateSelectorOrList && <Footer />}
    </div>
  );
}

export default App;
