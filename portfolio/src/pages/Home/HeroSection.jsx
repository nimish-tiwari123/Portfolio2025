import { Container, Row, Col } from "react-bootstrap";
import { point, hero, cursor } from "../../assets";
import { BtnV2 } from "../../components/common";
import "./style.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="mt-md-5 position-relative order-1 order-md-2 text-center"
          >
            <img src={hero} alt="hero img" className="w-100" />
            <img
              src={cursor}
              alt="cursor"
              className="cursor-img"
              width="80px"
            />
          </Col>

          {/* Text Column */}
          <Col xs={12} md={8} className="order-2 order-md-1 mt-5 mt-md-0">
            <p className="d-flex  gap-2">
              <img src={point} alt="design" /> Available for Full-Time Roles
            </p>
            <h1 className="heading-hero fw-normal ">
              I'm Nimish, a <span className="brush-border">UI/UX designer</span>{" "}
              turning ideas into intuitive experiences that feel as good as they
              look.
            </h1>

            <div className=" mt-3">
              <BtnV2
                label="See the Magic I Build"
                onClick={() => navigate("/my-work")}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
