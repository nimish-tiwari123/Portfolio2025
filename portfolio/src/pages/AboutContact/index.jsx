import { Container, Row, Col, Form } from "react-bootstrap";
import { cursor, hero } from "../../assets";
import { call, email } from "../../assets/icons";
import { BtnV1 } from "../../components/common";
const AboutContact = () => {
  return (
    <div>
      <Container className="py-5 my-lg-5">
        <Row >
          <Col xs={12} md={6} className="mt-md-5  text-center">
            <Row>
              <Col lg={9} className="position-relative">
                <img src={hero} alt="hero img" className="w-100" />
                <img
                  src={cursor}
                  alt="cursor"
                  className="cursor-img"
                  width="80px"
                />
              </Col>
            </Row>
            <div className="d-flex gap-3 mt-4 mt-md-5 pt-4 ">
              <div>
                <img src={email} alt="email" />
              </div>
              <div className="text-start">
                <p className="fs-5 opacity-50 m-0">Email Address</p>
                <p className="fs-4 fw-medium m-0">
                  nimish.tiwari0704<span className="custom-primary">@</span>
                  gmail.com
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 mt-4">
              <div>
                <img src={call} alt="call" />
              </div>
              <div className="text-start">
                <p className="fs-5 opacity-50 m-0">Contact No.</p>
                <p className="fs-4 fw-medium m-0">+91 99264 91887</p>
              </div>
            </div>
          </Col>

          {/* Text Column */}
          <Col xs={12} md={6} className="overflow-auto h-100 mt-5 mt-md-0">
            <p className="fs-4 fw-medium">Hi, I’m Nimish Tiwari</p>
            <p className="fs-5 fw-medium line36">
              I’m a dedicated UI/UX & front-end designer with a passion for
              crafting beautiful, responsive, and user-friendly digital
              experiences. Skilled in Figma, React.js, Next.js, and modern
              front-end technologies, I build interfaces that are both visually
              appealing and easy to use across devices.
            </p>

            <p className="fs-5 opacity-50 line36">
              From case studies to dynamic web portals, I combine design and
              development to create engaging digital products for startups and
              creators.
            </p>
            <p className="fs-5 fw-medium">
              Let’s connect and make your vision come to life.
            </p>

            <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm mt-4">
              <h5 className="mb-3 fs-3">Let's get in touch</h5>
              <Form className="mt-4">
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Name" className="bg-light p-3 border-0"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email" className="bg-light p-3 border-0"/>
                </Form.Group >
                <Form.Group className="mb-4">
                  <Form.Control as="textarea" rows={4} placeholder="Message" className="bg-light p-3 border-0"/>
                </Form.Group>
                <BtnV1
                  label="Send Message"
                pad="px-5 py-3"
                />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutContact;
