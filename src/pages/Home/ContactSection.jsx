import { Container, Row, Col, Card } from "react-bootstrap";
import { akararrow, behance, linkedin } from "../../assets/icons";
import { point } from "../../assets";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();
  return (
    <section className="contact-section techstack-section py-5 bg-light">
      <Container className="py-md-5">
        {/* Section Title */}
        <div className="mb-5">
          <p className="d-flex  gap-2 fs-5 text-secondary">
            <img src={point} alt="design" /> Contact Me
          </p>
          <h1 className="heading-hero fw-normal ">Always open to connect</h1>
        </div>

        {/* Contact Cards */}
        <Row className="g-4">
          {/* LinkedIn */}
          <Col xs={12} md={4}>
            <Card className="contact-card h-100 shadow-sm border-0 rounded-4 p-3" onClick={() => window.open("https://www.linkedin.com/in/nimish-tiwari-542146274/", "_blank")}>
              <Card.Body>
                <p className="fw-medium fs-4">Linkedin</p>
                <div className="d-flex justify-content-end mt-4">
                  <div className="contact-icon rounded-circle">
                    <img src={linkedin} alt="Linkedin" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Behance */}
          <Col xs={12} md={4}>
            <Card className="contact-card h-100 shadow-sm border-0 rounded-4 p-3" onClick={() => window.open("https://www.behance.net/nimishtiwari2", "_blank")}>
              <Card.Body>
                <p className="fw-medium fs-4">Behance</p>
                <div className="d-flex justify-content-end mt-4">
                  <div className="contact-icon rounded-circle">
                    <img src={behance} alt="Behance" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Get in Touch */}
          <Col xs={12} md={4}>
            <Card
              className="contact-card contact-card-action h-100 shadow-sm border-0 rounded-4 p-3"
              onClick={() => navigate("/about-contact")}
            >
              <Card.Body>
                <p className="fw-medium fs-4">Get in touch</p>
                <div className="d-flex justify-content-end mt-4">
                  <div className="contact-icon rounded-circle">
                    <img src={akararrow} alt="arrow" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
