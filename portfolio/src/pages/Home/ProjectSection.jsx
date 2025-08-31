import { Container, Row, Col } from "react-bootstrap";
import { BtnV2 } from "../../components/common";
import "./style.css";
import { brevio, grociahub, delivery,music } from "../../assets/projects";
const ProjectSection = () => {
  return (
    <>
      <div className="bg-custom-dark project-section py-5">
        <Container className="mt-md-5">
          <Row className="">
            <Col
              xs={12}
              md={4}
              className="mt-md-5 position-relative order-1 order-md-2 text-center"
            ></Col>

            {/* Text Column */}
            <Col xs={12} md={7} className="order-2 order-md-1 mt-5 mt-md-0 ">
              <p className="custom-primary fs-5">
                {"{"} <span className="text-light">My Work</span> {"}"}
              </p>

              <h1 className="heading-hero text-light fw-normal">
                Each project isn’t just a task - it’s a chance to learn, grow,
                and evolve.
              </h1>

              <div className=" mt-3">
                <BtnV2
                  label="View All Projects"
                  onClick={() => alert("See My Work Clicked")}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-custom-dark pt-5">
        <Container fluid>
          <Row className="border-custom-top ">
            <Col xs={12} md={6} className="border-custom-bottom pt-5">
              <div className="px-5">
                <p className="custom-primary ms-md-4 mb-2">
                  {"{"} <span className="text-light">Web & App Design</span>{" "}
                  {"}"}
                </p>

                <h2 className="fs-3 fw-normal text-light ms-md-4">
                  Brevio Storytelling Platform
                </h2>
                <p className="text-light opacity-50 ms-md-4 mt-2 ">
                  UI/UX Design
                </p>
              </div>
              <img
                src={brevio}
                alt="Brevio Project"
                className="w-100 mt-4 px-4 pb-4"
              />
            </Col>
            <Col
              xs={12}
              md={6}
              className="border-custom-bottom border-custom-start pt-5"
            >
              <div className="px-5">
                <p className="custom-primary ms-md-4 mb-2">
                  {"{"} <span className="text-light">Web Design</span>{" "}
                  {"}"}
                </p>

                <h2 className="fs-3 fw-normal text-light ms-md-4">
                  GrociaHub Grocery Platform
                </h2>
                <p className="text-light opacity-50 ms-md-4 mt-2 ">
                 UI/UX Design & Development
                </p>
              </div>
              <img
                src={grociahub}
                alt="Grocery Website Project"
                className="w-100 mt-4 px-4 pb-4"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className="pt-5">
              <div className="px-5">
                <p className="custom-primary ms-md-2 mb-2">
                  {"{"} <span className="text-light">App Design</span>{" "}
                  {"}"}
                </p>

                <h2 className="fs-3 fw-normal text-light ms-md-2">
                  Delivery Partner App
                </h2>
                <p className="text-light opacity-50 ms-md-2 mt-2 ">
                  UI/UX Design
                </p>
              </div>
              <img
                src={delivery}
                alt="Food Delivery App Project"
                className="w-100 mt-4 px-4 pb-4"
              />
            </Col>
            <Col xs={12} md={4} className="border-custom-start pt-5">
              <div className="px-5">
                <p className="custom-primary ms-md-2 mb-2">
                  {"{"} <span className="text-light">Web Design</span>{" "}
                  {"}"}
                </p>

                <h2 className="fs-3 fw-normal text-light ms-md-2">
                  Groova Music Web Page
                </h2>
                <p className="text-light opacity-50 ms-md-2 mt-2 ">
                  UI/UX Design
                </p>
              </div>
              <img
                src={music}
                alt="Music Streaming Website Project"
                className="w-100 mt-4 px-4 pb-4"
              />
            </Col>
            <Col
              xs={12}
              md={4}
              className="border-custom-start project-action-card"
            >
              <div className="action-card d-flex justify-content-center align-items-center w-100 h-100">
                <BtnV2
                  label="View All Projects"
                  onClick={() => alert("See My Work Clicked")}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProjectSection;
