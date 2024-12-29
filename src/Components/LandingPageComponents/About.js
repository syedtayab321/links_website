import React from "react";
import "../../assets/css/about.css";
import Image from '../../assets/images/backround.jpg';
const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="fw-bold">About Us</h1>
        <p className="subheading">
          Get to know who we are, what we do, and why we do it.
        </p>
      </div>

      <div className="about-content container">
        <div className="row align-items-center">
          <div className="col-md-6 text-section">
            <h2>Who We Are</h2>
            <p>
              We are a passionate team of innovators and creators, dedicated to
              bridging the gap between publishers and buyers. Our mission is to
              deliver outstanding services and create meaningful partnerships
              that drive success and growth for everyone involved.
            </p>
            <h2>What We Do</h2>
            <p>
              From performance analytics to advanced backlink strategies, we
              empower publishers to achieve their full potential and help
              buyers find the most effective resources to enhance their
              projects.
            </p>
          </div>
          <div className="col-md-6 image-section">
            <img
              src={Image}
              alt="Our Team"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="row mt-5 align-items-center">
          <div className="col-md-6 image-section">
            <img
              src={Image}
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 text-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses by providing tools and
              insights that lead to measurable growth. We focus on transparency,
              creativity, and innovation, helping you achieve your business
              goals effectively.
            </p>
            <h2>Why Choose Us</h2>
            <p>
              We combine cutting-edge technology with a human-centered approach
              to create solutions that make a difference. Partner with us, and
              let's build a brighter future together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
