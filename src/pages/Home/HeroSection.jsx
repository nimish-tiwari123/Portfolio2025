

import { Container } from "react-bootstrap";
import { point } from "../../assets";
import { BtnV2 } from "../../components/common";
import "./hero.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <Container>
        <div className="hero-content mx-auto text-center w-100">
          <div className="availability-badge d-inline-flex align-items-center gap-2 mb-3 mb-md-4 fw-semibold">
            <img src={point} alt="Available" />
            <span>Available for Full-Time Roles</span>
          </div>

          <h1 className="heading-hero fw-bold ">
            From UI/UX to Branding,
            I Design{" "}<span className="brush-border">Digital Experiences</span>{" "}That Matter.
          </h1>
          <p className="hero-description mx-auto mt-3 mt-md-4 opacity-75">
            I’m Nimish, a UI/UX & Graphic Designer focused on creating intuitive digital products, thoughtful visual identities, and clear, engaging experiences. I’m also exploring motion and video to expand how I bring ideas to life.  </p>

          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-0 gap-md-3">
            <button className="bg-dark text-white border-0 rounded-pill px-4 download-btn mt-4">Download Resume</button>

            <BtnV2
              label="View My Work"
              onClick={() => navigate("/my-work")}
            />
          </div>
          {/* Expertise */}
          <div className="hero-expertise d-flex flex-wrap justify-content-center align-items-center gap-2 gap-md-3 mt-4 opacity-75">
            <span className="expertise-item">UI/UX Design</span>
            <span className="expertise-dot">•</span>
            <span className="expertise-item">Graphic Design</span>
            <span className="expertise-dot">•</span>
            <span className="expertise-item">Branding</span>
            <span className="expertise-dot">•</span>
            <span className="expertise-item">Motion & Video</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
