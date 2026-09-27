import { Container, Row, Col } from "react-bootstrap";
import { cursor, footerhero, logoLight, myImg, point } from "../../assets";
import { arrow } from "../../assets/icons";
import "./style.css";
import { BtnV2 } from "../../components/common";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-custom-dark pt-5 ">
      <Container>
        <Row>
          <Col className="d-flex align-items-center">
            <p className="d-flex gap-2 text-light ">
              <img src={point} alt="design" /> Available for Full-Time Roles
            </p>
          </Col>
          <Col className="d-flex justify-content-end  ">
            <div
              className="d-inline-flex flex-column align-items-center justify-content-center cursor-pointer"
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            >
              <div className="bg-white back-icon rounded-circle d-flex justify-content-center align-items-center">
                <img src={arrow} alt="arrow" />
              </div>
              <p className="text-light text-center mt-2">Back to top</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer-content mt-3">
        <Container className="py-5 mt-md-5">
          <Row>
            <Col xs={12} md={7} className="mt-5 mt-md-0 ">
              <h1 className="footer-heading text-light fw-normal">
                Let’s turn your vision into something truly impactful.
              </h1>
              <div className="fs-4 text-light opacity-50 mb-3">
                Let’s make an impact
              </div>
              <div className=" mt-3">
                <BtnV2
                  label="Contact Me"
                  onClick={() => navigate("/about-contact")}
                />
                <p className="text-light opacity-50 footer-caption fs-5 mt-5 mb-0 fw-light">
                  Contact Me
                </p>
                <p className="text-light fs-3 mt-0">
                  nimish.tiwari0704 <span className="custom-primary">@</span>{" "}
                  gmail.com
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={5}
              className="position-relative text-center px-md-5"
            >
              <img
                src={footerhero}
                alt="hero img"
                className="w-100 my-5 my-md-2"
              />
              <img
                src={cursor}
                alt="cursor"
                className="cursor-img"
                width="80px"
              />
              <div className="text-start mt-md-5 pt-md-5">
                <p className="fs-5 fw-light">
                  <span className="opacity-50 text-light">
                    Crafting user-focused designs and seamless{" "}
                  </span>
                  <span className="text-light">digital experiences</span>
                  <span className="opacity-50 text-light">
                    with creativity and precision.
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="py-4">
        <Row>
          <Col className="text-center text-md-start mb-3 mb-md-0">
            <img src={logoLight} alt="logo" />
          </Col>
          <Col md={6} className="text-center">
            <p className="text-light opacity-50 fw-light pt-2">
              Copyright © UI/UX Design and Frontend Development, 2025
            </p>
          </Col>
          <Col>
            <div className="d-flex gap-2 justify-content-center justify-content-md-end align-items-center my-3 my-md-0">
              <span className="opacity-50 text-light fw-light">Created By</span>
              <img src={myImg} alt="Nimish" width="36px" />
              <span className="text-light">Nimish Tiwari</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
