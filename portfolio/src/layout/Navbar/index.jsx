import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BtnV1 } from "../../components/common";
import { logoDark as logo } from "../../assets";
const PortfolioNavbar = () => {
  return (
    <Navbar expand="lg" className="py-3 border-bottom ">
      <Container className="">
        {/* Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logo}
            alt="logo"
            width="120"
            className="d-inline-block align-top me-2 "
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center "
        >
          {/* Navigation Links */}
          <Nav className="mx-auto ">
            <Nav.Link href="#work" className="fw-medium mx-3">
              My Work
            </Nav.Link>
            <Nav.Link href="#about" className="fw-medium mx-3">
              About & Contact
            </Nav.Link>
          </Nav>

          {/* Right Side Email + Button */}
          <div className="d-flex align-items-center ">
           <div className="pe-3 "> <span className="text-muted opacity-75">Email : </span>nimish.tiwari0704@gmail.com</div>
            <BtnV1
              label="Contact Me"
              onClick={() => alert("Contact Me Clicked")}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
