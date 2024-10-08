import React from "react";
import { Link } from 'react-router-dom';
import image from '../assets/project.png';

import LifecycleVideo from "../Assets/trello.mp4"; // Add your video file here
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            The Ultimate Task Management Tool
          </h1>
          <p className="primary-text">
            Popular social commerce platform that allows users to discover, create, and share experiences.
          </p>
          <Link to="/login" className="secondary-button">
            Get started <FiArrowRight />
          </Link>
        </div>
        <div className="home-image-section">
          <img src={image} alt="" />
        </div>
      </div>

      <h1 className="Feature-heading">
        Where devs, marketers, and every team in between get work done
      </h1>
      <div className="feature-container">
        <div className="card">
          <img src={image} alt="Board" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Board</h2>
            <p className="card-description">
              Task buddy board keeps tasks organized and work moving forward. In a glance, see everything from "things to do" to "aww yeah, we did it!"
            </p>
          </div>
        </div>

        <div className="card">
          <img src={image} alt="List" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">List</h2>
            <p className="card-description">
              The different stages of a task. Start as simple as To Do, Doing, or Done—or build a workflow custom-fit to your team's needs. There’s no wrong way to Task buddy.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={image} alt="Cards" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Cards</h2>
            <p className="card-description">
              Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={image} alt="Calendar" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Calendar</h2>
            <p className="card-description">
              The Calendar view lets you see all your cards with due dates on a calendar. This helps you keep track of deadlines and manage your time more effectively. You can easily drag and drop cards on the calendar to change their due dates.
            </p>
          </div>
        </div>
      </div>

      <div className="lifecycle">
        <video className="lifecycle-video" autoPlay muted loop>
          <source src={LifecycleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="right-text">
          <h1>Life Cycle of Task Buddy</h1>
          <div className="brief-description">
            <p>
              The lifecycle of an issue typically starts when it is created and added to the "To Do" or "Open" stage. The issue is then prioritized and assigned to a team member. Once work begins, the issue moves to the "In Progress" stage. After the work is completed, it may enter a review or testing phase, depending on the workflow. If the work passes all checks, the issue is marked as "Done" or "Closed." If problems arise later, the issue can be reopened and moved back to "In Progress" for further work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
