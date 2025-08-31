import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";

const statsData = [
  {
    value: "95+",
    label: "Customer Satisfaction",
    sub: "Percent",
    variant: "success-card",
  },
  {
    value: "1.5+",
    label: "Experience",
    sub: "Years",
    variant: "dark-card",
  },
  {
    value: "18+",
    label: "Projects Completed",
    sub: "Projects",
    variant: "light-card",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section py-5 ">
      <Container>
        <Row className="g-4 justify-content-center py-md-4">
          {statsData.map((item, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card className={`stat-card ${item.variant} text-center rounded-4 p-3 shadow-sm`}>
                <Card.Body>
                  <h2 className="stat-value fw-semibold display-5 text-start">{item.value}</h2>
                  <p className="stat-sub text-secondary fs-5 text-end mb-0 mt-4 ">{item.sub}</p>
                  <h5 className="stat-label fs-4 text-end ">{item.label}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
