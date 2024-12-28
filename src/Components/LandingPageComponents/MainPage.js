import React from "react";
import { Link } from "react-router";
import './../../assets/css/mainpage.css';
import logo from './../../assets/images/logo.png';
const MainPage = () => {
  return (
      <>
          <div className="main-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              className="logo"
            />
            LinksMarket
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center text-light">
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to LinksMarket!</h1>
          <p>Where Publishers Meet Buyers—Effortlessly.</p>
          <p>
            Explore our features and services tailored for publishers and buyers.
          </p>
          <button className="btn btn-primary">Let's Get Started</button>
        </div>
      </div>
    </div>
      </>
  );
};

export default MainPage;
