import React from "react";
import "./../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white fw-bold">About LinksMarket</h5>
            <p className="text-light">
              LinksMarket helps you connect with the best publishing and buying opportunities. 
              Explore our platform to enhance your business journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white fw-bold">Quick Links</h5>
            <ul className="list-unstyled text-light">
              <li><a href="#!" className="footer-link">Home</a></li>
              <li><a href="#!" className="footer-link">Features</a></li>
              <li><a href="#!" className="footer-link">Pricing</a></li>
              <li><a href="#!" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white fw-bold">Get in Touch</h5>
            <p className="text-light mb-1">
              <i className="bi bi-envelope me-2"></i>info@linksmarket.com
            </p>
            <p className="text-light mb-1">
              <i className="bi bi-telephone me-2"></i>+1 234 567 890
            </p>
            <p className="text-light">
              <i className="bi bi-geo-alt me-2"></i>123 Market Street, New York, NY
            </p>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="#!" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#!" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#!" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#!" className="social-icon"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-light mt-4">
          <p className="mb-0">© 2024 LinksMarket. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
