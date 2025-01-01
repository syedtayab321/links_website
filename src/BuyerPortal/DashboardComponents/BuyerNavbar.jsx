import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./../css/buyernavbar.css";
import {Link} from "react-router";

const BuyerNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/buyerdashboard">Buyer Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/buyerdashboard">Home</Nav.Link>
            <Nav.Link href="/buyer-orders">Orders</Nav.Link>
            <Nav.Link href="/link-insertion">Link Insertion</Nav.Link>
            <Nav.Link href="/buyer-listing">Search Listings</Nav.Link>
            <Nav.Link href="/buyer-payments">Manage Payments</Nav.Link>
            <Nav.Link href="/buyer-profile">Profile</Nav.Link>
            <Link to="/" className='btn btn-danger'>logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BuyerNavbar;
