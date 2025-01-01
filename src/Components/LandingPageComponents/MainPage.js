import React from "react";
import './../../assets/css/mainpage.css';
import {Link} from "react-router";
const MainPage = () => {
  return (
      <>
        <div className="main-container">
      <div className="hero-section text-center text-light">
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to LinksMarket!</h1>
          <p>Where Publishers Meet Buyers—Effortlessly.</p>
          <p>
            Explore our features and services tailored for publishers and buyers.
          </p>
          <Link className="btn btn-primary" to='/publisherdashboard'>Let's Get Started</Link>
        </div>
      </div>
    </div>
      </>
  );
};

export default MainPage;
