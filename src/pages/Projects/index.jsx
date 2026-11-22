import { Container, Row, Col } from "react-bootstrap";
import {
  awns,
  awnsManagement,
  balaji,
  grociahub,
  music,
  grocery,
  zioun,
  marbleGalaxy
} from "../../assets/projectPage";
import {pachoo, brevio, linxed, fullteam, ludo} from "../../assets/projects/projectPage";

import { point } from "../../assets";
import { BtnV1 } from "../../components/common";
import "./style.css";
const Projects = () => {
  const projectData = [
    {
  category: "Web & App Design",
  title: "Pachoo Food Delivery Ecosystem",
  description:
    "Pachoo is a hyperlocal food delivery platform connecting customers, restaurants, and delivery partners across 180+ villages through a simple and convenient digital experience.",
  image: pachoo,
  link: "YOUR_PACHOO_FIGMA_LINK",
  type: "pdf",
},
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
  category: "App & Web Design",
  title: "Family Engagement Platform",
  description:
    "A connected educational platform that helps families track student performance, monitor learning progress, and stay engaged through insights and seamless collaboration.",
  image: linxed,
  link: "YOUR_FIGMA_LINK",
  type: "url",
},
{
  category: "App Design",
  title: "Football Team Management Platform",
  description:
    "A smart football management platform that helps coaches and teams plan match strategies, assign player roles, track live matches, and analyze team performance through real-time insights.",
  image: fullteam,
  link: "YOUR_FIGMA_LINK",
  type: "url",
},
{
  category: "App & Web Design",
  title: "Ludo Gaming Platform",
  description:
    "An interactive multiplayer Ludo platform that allows players to connect, compete, and enjoy real-time games with friends through engaging gameplay, multiple features, and a seamless gaming experience.",
  image: ludo,
  link: "YOUR_FIGMA_LINK",
  type: "url",
},
    {
      category: "Web Design",
      title: "Zioun – Smart Meal SaaS Solution",
      description:
        "Zioun is an intelligent meal tracking SaaS product that simplifies nutrition management, monitors daily intake, and offers multiple services to support healthier lifestyle choices.",
      image: zioun,
      link: "https://www.figma.com/proto/xL98aRS4OZqAkmuQaDbExO/Zioun-Project-Preview?node-id=1-3&t=5WaoacgIRLFN1phj-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
      type: "url",
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
      <Container className="py-5 my-lg-5 ">
        <p className="d-flex  gap-2 justify-content-center">
          <img src={point} alt="design" /> My recent works
        </p>
        <h1 className="heading-hero fw-normal display-4 text-center">
          Selected Work
        </h1>
        <Row className="g-4 g-md-5 px-0 mx-0 px-lg-5 mt-2 mt-md-4 mx-lg-4 ">
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
                    <p className="custom-primary fw-medium project-category">
                      {"{"}{" "}
                      <span className="text-dark ">{project.category}</span>{" "}
                      {"}"}
                    </p>
                    <h2 className="fw-normal project-title fw-bold">{project.title}</h2>
                    <p className="mt-2 mt-md-3 opacity-50  custom-line project-desc">
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
