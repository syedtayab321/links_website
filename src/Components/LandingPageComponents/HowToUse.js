import React from 'react';
import './../../assets/css/howtose.css'; 

const HowToUse = () => {
  return (
    <div className=" py-5 howtouse">
      <h2 className="text-center text-white mb-4">How to Use LinksMarket</h2>
      <p className="text-center text-white">Follow our simple steps to get started and maximize your benefits.</p>
      
      <div className="row text-center text-white mt-5">
        <div className="col-md-3">
          <div className="mb-3">
            <div className="circle mx-auto">1</div>
          </div>
          <h5>Order a Task</h5>
          <p>When a buyer orders a new task, they initiate the process.</p>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <div className="circle mx-auto">2</div>
          </div>
          <h5>Funds Held</h5>
          <p>The funds are held in escrow until the task is completed and accepted.</p>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <div className="circle mx-auto">3</div>
          </div>
          <h5>Task Completion</h5>
          <p>The publisher completes the task as per the buyer’s requirements.</p>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <div className="circle mx-auto">4</div>
          </div>
          <h5>Release Funds</h5>
          <p>Once the buyer accepts the task, the funds are released to the publisher.</p>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
