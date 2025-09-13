import { Container, Row, Col, Card } from "react-bootstrap";
import {
  figma,
  illustrator,
  photoshop,
  html,
  css,
  bootstrap,
  javascript,
  reactjs,
  framer,
} from "../../assets/techstack"; 
import { point } from "../../assets";
import "./style.css";

const techItems = [
  { name: "Figma", icon: figma },
  { name: "Illustrator", icon: illustrator },
  { name: "Photoshop", icon: photoshop },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Javascript", icon: javascript },
  { name: "React Js", icon: reactjs },
  { name: "Framer", icon: framer },
];

const TechStack = () => {
  return (
    <section className="py-5 bg-light techstack-section ">
      <Container>
        <Row className="align-items-center py-md-5">
          {/* Left Side Title */}
          <Col md={4} className="mb-4 mb-md-0">
                 <p className="d-flex  gap-2 fs-5 text-secondary">
              <img src={point} alt="design" /> Tools & Skills
            </p>
            <h1 className="heading-hero fw-normal ">
              My creative toolbox
            </h1>
          </Col>

          {/* Right Side Grid */}
          <Col md={8}>
            <Row className="g-4">
              {techItems.map((item, index) => (
                <Col xs={6} sm={4} md={4} key={index}>
                  <Card className="border-0 shadow-sm h-100 text-center p-3 rounded-4 tech-card">
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        width="40"
                        className="mb-3"
                      />
                      <Card.Text className="fw-medium">{item.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechStack;
