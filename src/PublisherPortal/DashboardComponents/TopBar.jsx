import React, { useState } from "react";
import { FaSignOutAlt,FaEnvelope } from "react-icons/fa";
import "./../css/topbar.css";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const navigate = useNavigate();

  const handleshowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const MessageshowModal = () => {
    setShowMessageModal(true);
  };

  const MessageCloseModal = () => {
    setShowMessageModal(false);
  };

  const handleLogoutClick = () => {
    setShowModal(false);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* Main bar */}
      <div className="custom-topbar">
        <div className="custom-topbar-title">
          <h1>Publisher Dashboard</h1>
        </div>
        <div className="custom-topbar-user">
          <img
            src={''}
            alt="Profile"
            className="custom-profile-pic"
          />
          <span className="custom-username">
            Publisher
          </span>
          <button className="custom-message-admin-btn" onClick={MessageshowModal}>
            <FaEnvelope className="custom-message-icon" />
            Message
          </button>
          <button className="custom-logout-btn" onClick={handleshowModal}>
            <FaSignOutAlt className="custom-logout-icon" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
