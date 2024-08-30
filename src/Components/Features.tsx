import React from 'react';
import Navbar from './NavBar';
import image from "../assets/project.png"


const FeaturesPage = () => {
  return (
      <div className="Feature-box">
        <h2 className="Feature-heading">
          Where devs, marketers, and every team in between get work done
        </h2>
        <div className="feature-container">
          <div className="card">
            <img src={image} alt="This is plan img" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Plan</h2>
                <p className="card-description">This is a plan</p>
              </div>
          </div>

          <div className="card">
            <img src={image} alt="This is plan img" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Plan</h2>
                <p className="card-description">This is a plan</p>
              </div>
          </div>

          <div className="card">
            <img src={image} alt="This is plan img" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Plan</h2>
                <p className="card-description">This is a plan</p>
              </div>
          </div>

          <div className="card">
            <img src={image} alt="This is plan img" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Plan</h2>
                <p className="card-description">This is a plan</p>
              </div>
          </div>
        </div>
      </div>
  );
};


export default FeaturesPage;

