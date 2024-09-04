// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css"
import Dashboard from "./Dashboard"

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="logo">Task Buddy</div>
      <nav className="menu">
        <ul>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/">Dashboard</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;