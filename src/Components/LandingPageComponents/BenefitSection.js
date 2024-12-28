import React from "react";
import "./../../assets/css/benefit.css";

const BenefitsSection = () => {
  return (
    <div className="benefits-section py-5">
      <div className="container text-center">
        {/* Title Section */}
        <h2 className="fw-bold text-white">Benefits of Using LinksMarket</h2>
        <p className="text-light">
          Discover how our platform can enhance your publishing and buying experience.
        </p>

        {/* Benefits Grid */}
        <div className="row mt-4">
          {/* Card 1 */}
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Bulk Uploading</h5>
                <p className="card-text">
                  Easily update multiple websites at once, saving you lots of time and effort.
                </p>
              </div>
            </div>

          {/* Card 2 */}
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Flexible Payment Options</h5>
                <p className="card-text">
                  Quickly switch payment accounts to ensure uninterrupted service.
                </p>
              </div>
            </div>
        </div>
        <div className="row mt-4">
               
          {/* Card 3 */}
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Manual SEO Metrics Entry</h5>
                <p className="card-text">
                  Maintain control over your SEO data until automated solutions are available.
                </p>
              </div>
            </div>

          {/* Card 4 */}
          <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Automated Notifications</h5>
                <p className="card-text">
                  Stay informed with automatic email notifications for task assignments and
                  completions.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
