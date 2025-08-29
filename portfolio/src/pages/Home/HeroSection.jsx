import { Container, Row, Col } from "react-bootstrap";
import { point } from "../../assets";
import "./style.css";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col md={8}>
          <p><img src={point} alt="design" /> Available for Full-Time Roles</p>
            <h1 >
              I'm Nimish, a UI/UX designer turning ideas into intuitive
              experiences that feel as good as they look.
            </h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
