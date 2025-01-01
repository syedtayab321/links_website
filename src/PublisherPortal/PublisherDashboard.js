import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import './css/publisherdashboard.css';
import TopBar from "./DashboardComponents/TopBar";
import ListWebsites from "./DashboardPages/ListWebsites";
import ManageTasks from "./DashboardPages/ManageTasks";
import PerformanceAnalytics from "./DashboardPages/PerformanceAnalytics";
import PublisherSidebar from "./DashboardComponents/PublisherSidebar";

export default function PublisherDashboard() {
  const [selectedSection, setSelectedSection] = useState('home');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const id = localStorage.getItem('UserID');
  //   if (!id) {
  //     setOpenSnackbar(true);
  //     setTimeout(() => {
  //       navigate('/login');
  //     }, 1500);
  //   }
  // }, [navigate]);

  const handleSelect = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <div className="publisher-dashboard">
        <div className="publisher-sidebar">
          <PublisherSidebar onselect={handleSelect} />
        </div>
        <div className="publisher-content">
          <TopBar />
          {selectedSection === 'list-websites' && <ListWebsites/>}
          {selectedSection === 'manage-tasks' && <ManageTasks/>}
          {selectedSection === 'performance-analytics' && <PerformanceAnalytics/>}
        </div>
      </div>
      {/*<Snackbar open={openSnackbar} autoHideDuration={2000}*/}
      {/*  message="You need to login first!" onClose={() => setOpenSnackbar(false)}*/}
      {/*/>*/}
    </>
  );
}