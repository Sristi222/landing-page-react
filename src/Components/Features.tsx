import React from 'react';
import Navbar from './NavBar';
import image from "../assets/project.png"
import board from "../assets/Board.png"


const FeaturesPage = () => {
  return (
      <div className="Feature-box">
        <h1 className="Feature-heading">
          Where devs, marketers, and every team in between get work done
        </h1>
        <div className="feature-container">
          <div className="card">
            <img src={board} alt="This is plan img" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Board</h2>
                <p className="card-description"> Task buddy board keeps task organized an dwork moving forward. In a glance, see everything from "things to do" to "aww yeah, we didi it!"</p>
              </div>
          </div>

          <div className="card">
            <img src={image} alt="This is plan img" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">List</h2>
                <p className="card-description">The different stages of a task. Start as simple as To Do, Doing or Done-or build a workflow custom fit to your teams;s needs.There;s no erong way to Task buddy</p>
              </div>
          </div>

          <div className="card">
            <img src={image} alt="This is plan img" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Cards</h2>
                <p className="card-description">Cards represents task and ideaas and hold all the information to get the job done. As you make progress, move cards across lists to shoe their status.</p>
              </div>
          </div>

          <div className="card">
            <img src={image} alt="This is plan img" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Calender</h2>
                <p className="card-description">The Calendar view lets you see all your cards with due dates on a calendar. This helps you keep track of deadlines and manage your time more effectively.
You can easily drag and drop cards on the calendar to change their due dates.</p>
              </div>
          </div>
        </div>
      </div>
  );
};


export default FeaturesPage;

