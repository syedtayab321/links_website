import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, InputGroup } from "react-bootstrap";
import BuyerNavbar from "./../DashboardComponents/BuyerNavbar";
import "./../css/linkinsertion.css";

const LinkInsertions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [promotedURL, setPromotedURL] = useState("");
  const [existingPageURL, setExistingPageURL] = useState("");

  const linkInsertionOpportunities = [
    {
      title: "Tech Blog - Link Insertions",
      description: "High-quality site with relevant tech content.",
      price: "$50",
    },
    {
      title: "Health Blog - Link Insertions",
      description: "A trusted source for health-related information.",
      price: "$75",
    },
    {
      title: "Business Insights - Link Insertions",
      description: "Business and finance news platform.",
      price: "$100",
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleURLChange = (e) => {
    setPromotedURL(e.target.value);
  };

  const handleExistingPageURLChange = (e) => {
    setExistingPageURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Link insertion submitted for URL: ${existingPageURL}`);
  };

  return (
    <>
      <BuyerNavbar />
      <Container className="link-insertion-container">
        <h2 className="text-center mb-4">Search Link Insertion Opportunities</h2>

        {/* Search Section */}
        <Row className="mb-4">
          <Col md={6} className="mx-auto">
            <InputGroup>
              <Form.Control
                placeholder="Search link insertion opportunities"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Button variant="primary">Search</Button>
            </InputGroup>
          </Col>
        </Row>

        {/* Link Insertion Opportunities */}
        <Row>
          {linkInsertionOpportunities.map((opportunity, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>{opportunity.title}</h5>
                  <p className="text-muted">{opportunity.description}</p>
                  <p><strong>Price:</strong> {opportunity.price}</p>
                  <Button variant="success">Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Submit Link Insertion Form */}
        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <h3 className="text-center mb-4">Submit a Promoted URL</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="existingPageURL">
                <Form.Label>Existing Page URL</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Enter the URL of the page for link insertion"
                  value={existingPageURL}
                  onChange={handleExistingPageURLChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="promotedURL" className="mt-3">
                <Form.Label>Promoted URL</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Enter the promoted URL"
                  value={promotedURL}
                  onChange={handleURLChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4">
                Submit Link Insertion
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LinkInsertions;
