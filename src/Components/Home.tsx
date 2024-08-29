import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import { Link } from 'react-router-dom';

import Image from "../assets/project.png";
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

          <Link to="/login" className="secondary-button">Get started<FiArrowRight />{" "}</Link> 
        </div>
        <div className="home-image-section">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;




