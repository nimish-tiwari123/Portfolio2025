import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  awns,
  awnsManagement,
  balaji,
  brevio,
  delivery,
  grociahub,
  music,
  grocery,
  zioun,
} from "../../assets/projectPage";

import { point } from "../../assets";
import "./style.css";
import { BtnV1 } from "../../components/common";
import BrevioPDF from "../../assets/pdf/Brevio.pdf"
const Projects = () => {
 const projectData = [
  {
    category: "Web & App Design",
    title: "Brevio Storytelling Platform",
    description:
      "Brevio is a storytelling platform that empowers creators and audiences through reels, short films, series, and educational content with community support and donations.",
    image: brevio,
    link: BrevioPDF,
    type: "pdf",
  },
  {
    category: "App Design",
    title: "Delivery Partner App",
    description:
      "The Delivery Partner App enables agents to accept orders, track routes, manage deliveries, and earn seamlessly with real-time updates.",
    image: delivery,
    link: "https://deliverypartnerapp.com",
    type: "url",
  },
  {
    category: "Web Design",
    title: "Zioun – Smart Meal SaaS Solution",
    description:
      "Zioun is an intelligent meal tracking SaaS product that simplifies nutrition management, monitors daily intake, and offers multiple services to support healthier lifestyle choices.",
    image: zioun,
    link: "https://example.com/zioun-project.pdf",
    type: "pdf",
  },
  {
    category: "Web Design",
    title: "GrociaHub Grocery Platform",
    description:
      "GrociaHub is a grocery management platform with an intuitive user website and powerful admin panel, simplifying shopping, tracking, and operations.",
    image: grociahub,
    link: "https://www.figma.com/design/Z85FNRtJNBe1AObu2sYyyC/GrociaHub?node-id=0-1&p=f&t=Yr2yTvPSCBNILi6k-0",
    type: "url",
  },
  {
    category: "App Design",
    title: "GrooSphere Grocery App",
    description:
      "GrooSphere is a smart grocery app that connects users with fresh products, fast delivery, and a seamless shopping experience.",
    image: grocery,
    link: "https://example.com/groosphere-project.pdf",
    type: "pdf",
  },
  {
    category: "Web Design",
    title: "Groova Music Website",
    description:
      "Groova is a music website where you can explore and listen to songs, discover singers, and browse albums with ease.",
    image: music,
    link: "https://groovamusic.com",
    type: "url",
  },
  {
    category: "App Design",
    title: "AWNS Management System",
    description:
      "AWNS Management System simplifies employee management with task tracking, attendance, performance, and collaboration for interns, employees, and admins.",
    image: awnsManagement,
    link: "https://example.com/awns-management.pdf",
    type: "pdf",
  },
  {
    category: "Frontend Development",
    title: "AWNS Portfolio Website",
    description:
      "I built the frontend using Next.js, ensuring fast performance, dynamic routing, and a responsive, modern portfolio design.",
    image: awns,
    link: "https://www.awns.in/",
    type: "url",
  },
  {
    category: "Frontend Development",
    title: "Balaji Hardware E-Commerce Website",
    description:
      "Developed frontend using React.js, RTK Query, and Bootstrap to build a responsive, fast, and user-friendly shopping experience.",
    image: balaji,
    link: "https://www.balajihardwarektg.com/",
    type: "url",
  },
];

  return (
    <div>
      <Container className="py-md-5 my-5">
        <p className="d-flex  gap-2 justify-content-center">
          <img src={point} alt="design" /> Available for Full-Time Roles
        </p>
        <h1 className="heading-hero fw-normal display-4 text-center">
          Selected Work
        </h1>
        <Row className="g-5 px-md-5 mt-4 mx-md-5 mx-0">
          {projectData.map((project, index) => (
            <Col key={index} md={12}>
              <div className="d-flex flex-column">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded-4 project-image"
                />
                <Row className="py-4 ">
                  <Col md={9}>
                    <p className="custom-primary fs-5 fw-medium">
                      {"{"}{" "}
                      <span className="text-dark">{project.category}</span>{" "}
                      {"}"}
                    </p>
                    <h2 className="fs-1 fw-normal ">{project.title}</h2>
                    <p className="fs-5 mt-3 opacity-50 custom-line">
                      {project.description}
                    </p>
                  </Col>

                  <Col
                    md={3}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <BtnV1
                    label="View Project"
                    onClick={() => window.open(project.link, "_blank")}
                  />
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
