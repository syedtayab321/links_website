import React, { useState } from "react";
import {FaHome, FaBars, FaUserAlt, FaProjectDiagram, FaStar, FaUsers, FaBoxOpen} from "react-icons/fa";
import '../css/Publishersidebar.css';

const navitems = [
  { text: 'List Websites', icon: <FaHome />, link: "list-websites" },
  { text: 'Manage Tasks', icon: <FaProjectDiagram />, link: "manage-tasks" },
  { text: 'Performance Analytics', icon: <FaUserAlt />, link: "performance-analytics" },
  { text: 'View Requests', icon: <FaUsers />, link: "requests" },
  { text: 'Orders Management', icon: <FaProjectDiagram />, link: "orders" },
  { text: 'Messages', icon: <FaStar />, link: "messages" },
  { text: 'Profile', icon: <FaBars />, link: "profile" },
  { text: 'Reviews', icon: <FaBoxOpen />, link: "reviews" },
];

const PublisherSidebar = ({ onselect }) => {
  const [activeItem, setActiveItem] = useState("list-websites");
  const handleClick = (link) => {
    setActiveItem(link);
    onselect(link);
  };

  return (
    <>
      <div className='publisher-menu'>
        {navitems.map((items, index) => (
          <button
            className={`publisher-menu-items ${activeItem === items.link ? 'activelink' : ''}`}
            key={index}
            onClick={() => handleClick(items.link)}
          >
            <span>{items.icon}</span>
            <span>{items.text}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default PublisherSidebar;
