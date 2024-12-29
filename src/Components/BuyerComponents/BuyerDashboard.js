import React from 'react';
import ViewTasks from './ViewTasks';
import ManageOrders from './ManageOrders';
import TrackEscrow from './TrackEscrow';
import './BuyerDashboard.css';

const BuyerDashboard = () => {
  return (
    <div className="buyer-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
        <p className="dashboard-subtitle">Manage your tasks, orders, and payments effortlessly</p>
      </div>
      <div className="dashboard-sections container">
        <div className="row">
          <div className="col-md-4">
            <ViewTasks />
          </div>
          <div className="col-md-4">
            <ManageOrders />
          </div>
          <div className="col-md-4">
            <TrackEscrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
