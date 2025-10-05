import { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { BtnV1 } from "../../components/common";
import { logoDark as logo } from "../../assets";
import { menu } from "../../assets/icons";
import "./style.css";
import { useNavigate } from "react-router-dom";

const PortfolioNavbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  return (
    <>
      <Navbar expand="lg" className="py-3 border-bottom">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="logo"
              width="120"
              className="d-inline-block align-top me-2"
            />
          </Navbar.Brand>

          {/* Custom Toggle Button */}
          <div className="d-lg-none" onClick={show ? handleClose : handleShow}>
            <div className="menu-box rounded-circle shadow-sm d-flex justify-content-center align-items-center bg-white">
              <img src={menu} alt="Menu" />
            </div>
          </div>

          {/* Normal desktop nav */}
          <div className="d-none d-lg-flex justify-content-center w-100">
            <Nav className="mx-auto">
              <Nav.Link href="/my-work" className="fw-medium mx-3">
                My Work
              </Nav.Link>
              <Nav.Link href="/about-contact" className="fw-medium mx-3">
                About & Contact
              </Nav.Link>
            </Nav>

            {/* Right Side Email + Button */}
            <div className="d-flex align-items-center">
              <div className="pe-3">
                <span className="text-muted opacity-75">Email : </span>
                <a
                  href="mailto:nimish.tiwari0704@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  nimish.tiwari0704@gmail.com
                </a>
              </div>
              <BtnV1 label="Contact Me" onClick={()=>navigate("/about-contact")} />
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Offcanvas for small screens */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        className="h-50 pb-5"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
               <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} alt="logo" width="100" />
          </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-center">
            <Nav.Link
              href="/my-work"
              className="fw-medium my-2 text-dark"
              onClick={handleClose}
            >
              My Work
            </Nav.Link>
            <Nav.Link
              href="/about-contact"
              className="fw-medium my-2 text-dark"
              onClick={handleClose}
            >
              About & Contact
            </Nav.Link>
          </Nav>

          <div className="text-center mt-5">
            <div className="mb-3">
              <span className="text-muted opacity-75">Email : </span>
              <a
                href="mailto:nimish.tiwari0704@gmail.com"
                className="text-decoration-none text-dark"
              >
                nimish.tiwari0704@gmail.com
              </a>
            </div>
            <BtnV1 label="Contact Me" onClick={()=>navigate("/about-contact")} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PortfolioNavbar;
