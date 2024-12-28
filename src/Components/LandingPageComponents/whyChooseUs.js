import React from "react";
import "./../../assets/css/whycooseus.css";

const WhyChooseUs = () => {
  return (
    <div className=" whychooseus">
      <h2 className="text-center text-white mb-3 fw-bold">Why Choose Us</h2>
      <p className="text-center text-white mb-5">
        Discover the unique offerings that make LinksMarket the best choice for publishers and buyers alike.
      </p>

      <div className="row text-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card p-4 shadow-sm h-100 rounded">
            <h5 className="fw-bold">Performance Analytics</h5>
            <p className="text-muted">
              Detailed performance metrics, including impressions, views, orders, and sales percentages. This transparency
              allows publishers to gauge the effectiveness of their listings and optimize their strategies accordingly.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card p-4 shadow-sm h-100 rounded">
            <h5 className="fw-bold">Backlinks</h5>
            <p className="text-muted">
              Our backlinks process is straightforward and efficient. Publishers can enhance their SEO by providing their
              existing page URL and the promoted URL, making it a quick and easy option for boosting their online presence.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card p-4 shadow-sm h-100 rounded">
            <h5 className="fw-bold">Ranking System</h5>
            <p className="text-muted">
              We are considering implementing a ranking system that will provide indicators (+, -) to show whether a
              website’s rank is improving or declining. This feature will help publishers understand their performance in
              the marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
