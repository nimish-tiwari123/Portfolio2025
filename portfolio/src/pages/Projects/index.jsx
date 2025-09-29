import { Container, Row, Col } from "react-bootstrap";
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
  marbleGalaxy
} from "../../assets/projectPage";

import { point } from "../../assets";
import { BtnV1 } from "../../components/common";

const Projects = () => {
  const projectData = [
    {
      category: "Web & App Design",
      title: "Brevio Storytelling Platform",
      description:
        "Brevio is a storytelling platform that empowers creators and audiences through reels, short films, series, and educational content with community support and donations.",
      image: brevio,
      link: "https://www.figma.com/proto/hHlE82fUJyNg5Ar1ziLkzk/Brevio-Project?node-id=1-3&t=E8HWrUxwnTB9TsKC-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      type: "pdf",
    },
    {
      category: "App Design",
      title: "Delivery Partner App",
      description:
        "The Delivery Partner App enables agents to accept orders, track routes, manage deliveries, and earn seamlessly with real-time updates.",
      image: delivery,
      link: "https://www.figma.com/proto/AgDyPyyj1cifIrYS6i2ekx/Delivery-Partner-App?node-id=1-3&t=Vqj9Lvkh3chNAc1Q-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
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
      category: "Web Design",
      title: "Groova Music Website",
      description:
        "Groova is a music website where you can explore and listen to songs, discover singers, and browse albums with ease.",
      image: music,
      link: "https://www.figma.com/proto/Ux7BnDAwDkhl2NN140QY8m/Music-Website?node-id=4-1329&t=SOMSNHAoOOvKAc7F-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
      type: "url",
    },
    {
      category: "App Design",
      title: "AWNS Management System",
      description:
        "AWNS Management System simplifies employee management with task tracking, attendance, performance, and collaboration for interns, employees, and admins.",
      image: awnsManagement,
      link: "https://www.figma.com/design/sCj9wFDYhHJUdx2rAUqM3q/AWNS-Management-System--Copy-?node-id=0-1&p=f&t=7xPVQkfyy8ny8nkD-0",
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
    {
      category: "Web Design",
      title: "Marble Galaxy Website",
      description:
        "Marble Galaxy is a website designed in Figma where users can explore marble & granite products while the admin manages items, categories, and more.",
      image: marbleGalaxy,
      link: "https://www.figma.com/design/HSFnwLK18NcbTkktcPZqTa/Marbel-galaxy?node-id=0-1&p=f&t=H7InvG7UcZCwa31l-0",
      type: "url",
    },
    {
      category: "App Design",
      title: "GrooSphere Grocery App",
      description:
        "GrooSphere is a smart grocery app that connects users with fresh products, fast delivery, and a seamless shopping experience.",
      image: grocery,
      link: "", // in progress
      type: "pdf",
    },
    
  ];

  return (
    <div>
      <Container className="py-5 my-lg-5">
        <p className="d-flex  gap-2 justify-content-center">
          <img src={point} alt="design" /> My recent works
        </p>
        <h1 className="heading-hero fw-normal display-4 text-center">
          Selected Work
        </h1>
        <Row className="g-4 g-md-5 px-0 mx-0 px-lg-5 mt-2 mt-md-4 mx-lg-5">
          {projectData.map((project, index) => (
            <Col key={index} md={12} className="p-2">
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
                    <p className="fs-5 mt-2 mt-md-3 opacity-50 custom-line">
                      {project.description}
                    </p>
                  </Col>

                  <Col
                    md={3}
                    className="d-flex justify-content-md-end justify-content-start align-items-center"
                  >
                    {project.link ? (
                      <BtnV1
                        label="View Project"
                        onClick={() => window.open(project.link, "_blank")}
                      />
                    ) : (
                      <span className="text-muted fw-medium fs-5">
                        🚧 In Progress
                      </span>
                    )}
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
