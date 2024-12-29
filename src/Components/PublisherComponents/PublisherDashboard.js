import React from 'react';
import ManageListings from './ManageListings';
import ManageTasks from './ManageTasks';
import ManagePayments from './ManagePayments';
import './PublisherDashboard.css';

const PublisherDashboard = () => {
  return (
    <div className="publisher-dashboard">
      <h1 className="dashboard-title">Publisher Dashboard</h1>
      <div className="dashboard-sections">
        <ManageListings />
        <ManageTasks />
        <ManagePayments />
      </div>
    </div>
  );
};

export default PublisherDashboard;
