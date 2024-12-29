import React from 'react';
import './registration.css';
import { FaUserTie, FaBriefcase } from 'react-icons/fa';

const UserTypeSelection = ({ onSelectUserType }) => {
  return (
    <div className="user-type-container">
      <h2>Select Your Role</h2>
      <div className="role-selection">
        <div
          className="role-card"
          onClick={() => onSelectUserType('buyer')}
        >
          <FaBriefcase className="role-icon" />
          <h3>Buyer</h3>
          <p>
            Hire publishers to grow your business. Post tasks and manage projects easily.
          </p>
        </div>
        <div
          className="role-card"
          onClick={() => onSelectUserType('publisher')}
        >
          <FaUserTie className="role-icon" />
          <h3>Publisher</h3>
          <p>
            List your website, receive tasks, and earn by completing projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
