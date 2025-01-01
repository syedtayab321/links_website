import React, { useState } from "react";
import {Container, Row, Col, Card, Button, Form, InputGroup,} from "react-bootstrap";
import BuyerNavbar from "./../DashboardComponents/BuyerNavbar";
import "./../css/buyersitelisting.css";

const BuyerWebsiteListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({
    seo: "all",
    category: "all",
    priceRange: "all",
  });

  const listings = [
    {
      title: "Tech Blog",
      description: "A high-authority blog with DA 70 and PA 65.",
      category: "Technology",
      price: "$150",
    },
    {
      title: "Health Insights",
      description: "Trusted health blog with DA 60 and PA 55.",
      category: "Health",
      price: "$120",
    },
    {
      title: "Business Weekly",
      description: "Popular business website with DA 80 and PA 75.",
      category: "Business",
      price: "$200",
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <>
      <BuyerNavbar />
      <Container className="listings-container">
        <h2 className="text-center mb-4">Search Guest Post Opportunities</h2>

        <Row className="mb-4">
          <Col md={4}>
            <InputGroup>
              <Form.Control
                placeholder="Search by website name"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Button variant="primary">Search</Button>
            </InputGroup>
          </Col>
          <Col md={2}>
            <Form.Select name="seo" onChange={handleFilterChange}>
              <option value="all">SEO Metrics</option>
              <option value="high">High DA/PA</option>
              <option value="medium">Medium DA/PA</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select name="category" onChange={handleFilterChange}>
              <option value="all">Categories</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Business">Business</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select name="priceRange" onChange={handleFilterChange}>
              <option value="all">Price Range</option>
              <option value="low">$50-$100</option>
              <option value="medium">$101-$150</option>
              <option value="high">$151-$200</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          {listings.map((listing, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>{listing.title}</h5>
                  <p className="text-muted">{listing.description}</p>
                  <p>
                    <strong>Category:</strong> {listing.category}
                  </p>
                  <p>
                    <strong>Price:</strong> {listing.price}
                  </p>
                  <Button variant="success">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BuyerWebsiteListings;
