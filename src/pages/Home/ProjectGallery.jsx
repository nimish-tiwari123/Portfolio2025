import { Container } from "react-bootstrap";
import { BtnV2 } from "../../components/common";
import Marquee from "react-fast-marquee";
import {
  awns,
  awnsmanagement,
  balaji,
  brevio,
  delivery,
  grociahub,
  music,
  fitness,
  groceryapp,
  growease,
  gym,
  lighting,
  lighting2,
  marble,
  ott,
  tour,
  zioun,
} from "../../assets/projectGallery";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ProjectGallery = () => {
  const navigate = useNavigate();
  const images = [
    awns,
    awnsmanagement,
    balaji,
    brevio,
    delivery,
    grociahub,
    music,
    fitness,
    groceryapp,
  ];
  const images2 = [
    growease,
    gym,
    lighting,
    lighting2,
    marble,
    ott,
    tour,
    zioun,
  ];

  return (
    <div className="bg-custom-dark projectgallery-section py-5">
      <Container className="mt-md-5 d-flex flex-column flex-md-row justify-content-between align-items-start">
        {/* Left Content */}
        <div className="mt-3">
          <p className="custom-primary fs-5">
            {"{"} <span className="text-light">My Project Gallery</span> {"}"}
          </p>

          <h1 className="heading-hero text-light fw-normal">
            A Visual Tour of My Work
            <br />
            and Ideas
          </h1>
        </div>

        {/* Right Button */}
        <div className="mt-3">
          <BtnV2
            label="View All Projects"
            onClick={() => navigate("/my-work")}
          />
        </div>
      </Container>

      {/* Image Marquee */}
      <div className="mt-5 position-relative">
        <div className="img-marquee-fade fade-left" />
        <div className="img-marquee-fade fade-right" />
        <Marquee
          pauseOnHover={true}
          gradient={true}
          gradientColor={[0, 0, 0]}
          gradientWidth={0}
          speed={80}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`project-${index}`}
              className="gallery-img"
            />
          ))}
        </Marquee>
      </div>
      <div className="mt-4 position-relative">
        <div className="img-marquee-fade fade-left" />
        <div className="img-marquee-fade fade-right" />
        <Marquee
          pauseOnHover={true}
          gradient={true}
          gradientColor={[0, 0, 0]}
          gradientWidth={0}
          speed={80}
          direction="right"
        >
          {images2.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`project-${index}`}
              className="gallery-img"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ProjectGallery;
