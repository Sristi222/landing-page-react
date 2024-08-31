// src/pages/AboutUs.jsx

import React from 'react';
import TaskColumn from './TaskColumn';


//
const tasks = [
  { title: 'Task 1', description: 'Description 1', percentage: 20 },
  { title: 'Task 2', description: 'Description 2', percentage: 50 },
  { title: 'Task 3', description: 'Description 3', percentage: 80 },
];
function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Welcome to our project management software! At [Your Company Name], we are dedicated to providing you with the most effective and intuitive project management tools available.
        </p>
        <p>
          Our team of experienced developers and project managers worked tirelessly to create a platform that not only meets the demands of modern project management but also exceeds expectations.
        </p>
        <p>
          Our core values are innovation, reliability, and user-centric design. Thank you for choosing [Your Company Name] as your trusted project management partner.
        </p>
        <div>
        <TaskColumn title="My Tasks" tasks={tasks} />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
