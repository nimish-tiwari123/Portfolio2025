import { Container, Row, Col, Form } from "react-bootstrap";
import { cursor, hero } from "../../assets";
import { call, email } from "../../assets/icons";
import { BtnV1 } from "../../components/common";
import { Formik } from "formik";
import * as Yup from "yup";

// ✅ Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const AboutContact = () => {
  return (
    <div>
      <Container className="py-5 my-lg-5">
        <Row>
          {/* Left Column */}
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

            {/* Email */}
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

            {/* Phone */}
            {/* <div className="d-flex gap-3 mt-4">
              <div>
                <img src={call} alt="call" />
              </div>
              <div className="text-start">
                <p className="fs-5 opacity-50 m-0">Contact No.</p>
                <p className="fs-4 fw-medium m-0">+91 99264 91887</p>
              </div>
            </div> */}
          </Col>

          {/* Right Column */}
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

            {/* Contact Form */}
            <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm mt-4">
              <h5 className="mb-3 fs-3">Let's get in touch</h5>

              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Form Submitted:", values);
                  alert("Message sent successfully!");
                  resetForm();
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  values,
                  errors,
                  touched,
                  handleBlur,
                }) => (
                  <Form noValidate onSubmit={handleSubmit} className="mt-4">
                    {/* Name */}
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="bg-light p-3 border-0"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Email */}
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="bg-light p-3 border-0"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Message */}
                    <Form.Group className="mb-4">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder="Message"
                        className="bg-light p-3 border-0"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.message && !!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Submit Button */}
                    <BtnV1 label="Send Message" pad="px-5 py-3" type="submit" />
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutContact;
