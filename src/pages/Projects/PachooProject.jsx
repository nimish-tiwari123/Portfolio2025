
import "./PachooProject.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { pachooSplash, pachooLogo, customerAppMockup, restaurantAppMockup, deliveryAppMockup, admin, designSystem} from "../../assets/projects/index.js";

// Reusable App Store Buttons
const AppStores = ({ playStoreUrl, appStoreUrl }) => (
  <div className="d-flex flex-wrap gap-2 mt-4">
    {playStoreUrl && (
      <Button
        variant="dark"
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="store-btn rounded-pill px-4 py-2 d-flex align-items-center gap-2"
      >
        <FaGooglePlay className="store-icon" />
        Google Play
      </Button>
    )}

    {appStoreUrl && (
      <Button
        variant="dark"
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="store-btn rounded-pill px-4 py-2 d-flex align-items-center gap-2"
      >
        <FaApple className="store-icon" />
        App Store
      </Button>
    )}
  </div>
);

// Reusable Platform Card
const PlatformCard = ({
  number,
  type,
  title,
  description,
  image,
  playStoreUrl,
  appStoreUrl,
  isAdmin = false,
}) => (
  <div className={`platform-card h-100 ${isAdmin ? "admin-platform" : ""}`}>
    <div className="platform-image">
      <img src={image} alt={`${title} preview`} />
    </div>

    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="platform-number">{number}</span>
        <span className="platform-type">{type}</span>
      </div>

      <h4 className="fw-bold mb-3">{title}</h4>

      <p className="text-secondary mb-0">{description}</p>

      {isAdmin ? (
        <div className="admin-count mt-4">
          <h2 className="fw-bold mb-0 text-primary">900+</h2>
          <span>UI Screens Designed</span>
        </div>
      ) : (
        <AppStores
          playStoreUrl={playStoreUrl}
          appStoreUrl={appStoreUrl}
        />
      )}
    </div>
  </div>
);

const PachooProject = () => {
  const platforms = [
    {
      number: "01",
      type: "MOBILE APPLICATION",
      title: "Customer App",
      description:
        "Discover nearby restaurants, explore menus, place orders and track deliveries seamlessly.",
      image: customerAppMockup,

      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.pachoo&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/pachoo-food-delivery/id6777452251",
    },
    {
      number: "02",
      type: "MOBILE APPLICATION",
      title: "Restaurant Partner App",
      description:
        "Manage menus, receive orders, update order status and monitor restaurant operations.",
      image: restaurantAppMockup,

      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.pachoo.restaurantpartner&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/pachoo-restaurant-partner/id6787862234",
    },
    {
      number: "03",
      type: "MOBILE APPLICATION",
      title: "Delivery Partner App",
      description:
        "Accept delivery requests, manage assigned orders and complete deliveries efficiently.",
      image: deliveryAppMockup,

      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.pachoo.deliverypartner&pcampaignid=web_share",
      appStoreUrl: "",
    },
    {
      number: "04",
      type: "WEB APPLICATION",
      title: "Admin Panel",
      description:
        "Manage customers, restaurants, delivery partners, orders and overall platform operations.",
      image: admin,
      isAdmin: true,
    },
  ];

  return (
    <main className="pachoo-project ">

      {/* HERO SECTION */}
      <section className="pachoo-hero pt-5 mt-4">
        <Container>

          <div className="pachoo-hero-content ">
            <span className="pachoo-label primary-pachoo-color fw-semibold">
              UI/UX DESIGN · PRODUCT DESIGN
            </span>

            <h1 className="display-2 fw-bold mt-3 mb-3">
              <img
                src={pachooLogo}
                alt="Pachoo Logo"
                className="pachoo-brand-logo mb-3"
              /> <br />
              Hyperlocal Delivery Ecosystem
            </h1>

            <p className="pachoo-description fs-5 custom-grey">
              A hyperlocal delivery platform connecting customers
              with nearby restaurants and local businesses,
              making everyday ordering simple and accessible.
            </p>
          </div>

          {/* Project Information */}
          <Row className="g-4 border-top border-bottom py-4 mt-5">
            <Col xs={6} md={3}>
              <span className="info-label fs-7 custom-grey fw-medium ">MY ROLE</span>
              <h6>UI/UX Designer</h6>
            </Col>

            <Col xs={6} md={3}>
              <span className="info-label fs-7 custom-grey fw-medium">PLATFORM</span>
              <h6>iOS App & Web</h6>
            </Col>

            <Col xs={6} md={3}>
              <span className="info-label fs-7 custom-grey fw-medium">TOOLS</span>
              <h6>Figma</h6>
            </Col>

            <Col xs={6} md={3}>
              <span className="info-label fs-7 custom-grey fw-medium">PROJECT STATUS</span>
              <h6>Live Product</h6>
            </Col>
          </Row>

          {/* Hero Image */}
          <div className="mt-5 rounded-4 overflow-hidden img-container-pachoo m-auto">
            <img
              src={pachooSplash}
              alt="Pachoo delivery platform presentation"
              className="img-fluid w-100 d-block"
            />
          </div>
        </Container>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="pachoo-overview py-5">
        <Container className="py-lg-5">
          <Row className="mb-5 align-items-end">
            <Col lg={7}>
              <span className="pachoo-label">
                01 — PROJECT OVERVIEW
              </span>

              <h2 className="display-4 fw-bold mt-3">
                One Ecosystem. <br />
                Four Connected Platforms.
              </h2>
            </Col>

            <Col lg={5}>
              <p className="text-secondary lh-lg mb-0">
                Pachoo is a hyperlocal delivery ecosystem connecting
                customers with nearby restaurants and local businesses,
                making everyday ordering simple and accessible.
              </p>
            </Col>
          </Row>

          {/* Purpose & Target Audience */}
          <Row className="g-4 mb-5">
            <Col md={6}>
              <div className="overview-detail p-4 h-100 rounded-3">
                <span className="info-label">PURPOSE</span>
                <h5 className="fw-bold mt-3">
                  Making Local Delivery Simple
                </h5>
                <p className="text-secondary mb-0">
                  Connecting local communities with nearby businesses
                  through a seamless delivery experience.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="overview-detail p-4 h-100 rounded-3">
                <span className="info-label">TARGET AUDIENCE</span>
                <h5 className="fw-bold mt-3">
                  Local Communities & Businesses
                </h5>
                <p className="text-secondary mb-0">
                  Customers, restaurant owners, delivery partners
                  and administrators.
                </p>
              </div>
            </Col>
          </Row>

          {/* Platform Cards Heading */}
          <div className="mb-4">
            <span className="pachoo-label">THE ECOSYSTEM</span>
            <h3 className="fw-bold mt-3">
              Four Interconnected Platforms
            </h3>
            <p className="text-secondary">
              Each platform plays a unique role in the delivery journey.
            </p>
          </div>

          {/* Four Platform Cards */}
          <Row className="g-4">
            {platforms.map((platform) => (
              <Col md={6} key={platform.number}>
                <PlatformCard {...platform} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* ================= THE CHALLENGE ================= */}

     
<section className="pachoo-challenge bg-custom-dark py-5">
  <Container className="py-lg-4">

    {/* Section Heading */}
    <Row className="align-items-end mb-4">
      <Col lg={7}>
        <span className="pachoo-label primary-pachoo-color">
          02 — THE CHALLENGE
        </span>

        <h2 className="display-4 fw-bold mt-3 text-light">
          Bringing Convenience <br />
          Beyond City Limits.
        </h2>
      </Col>

      <Col lg={5}>
        <p className="challenge-intro mb-0">
          Bringing online delivery to smaller towns meant making
          ordering simple, connecting local shops and solving
          delivery challenges.
        </p>
      </Col>
    </Row>

    {/* Challenge Cards */}
    <Row className="g-3">

      <Col md={6}>
        <div className="challenge-card h-100 p-3 p-lg-4">
          <span className="challenge-number primary-pachoo-color fw-bold ">01</span>
          <h5 className="fw-bold mt-3 text-light">
            Easy to Use
          </h5>
          <p className="mb-0 text-light opacity-75 fw-light">
            Making the app simple for people new to online ordering.
          </p>
        </div>
      </Col>

      <Col md={6}>
        <div className="challenge-card h-100 p-3 p-lg-4">
          <span className="challenge-number primary-pachoo-color fw-bold">02</span>
          <h5 className="fw-bold mt-3 text-light">
            Finding Local Shops
          </h5>
          <p className="mb-0 text-light opacity-75 fw-light">
            Bringing nearby restaurants and local businesses together.
          </p>
        </div>
      </Col>

      <Col md={6}>
        <div className="challenge-card h-100 p-3 p-lg-4">
          <span className="challenge-number primary-pachoo-color fw-bold">03</span>
          <h5 className="fw-bold mt-3 text-light">
            Reaching Nearby Areas
          </h5>
          <p className="mb-0 text-light opacity-75 fw-light">
            Managing deliveries across towns and surrounding villages.
          </p>
        </div>
      </Col>

      <Col md={6}>
        <div className="challenge-card h-100 p-3 p-lg-4">
          <span className="challenge-number primary-pachoo-color fw-bold">04</span>
          <h5 className="fw-bold mt-3 text-light">
            Connecting Everyone
          </h5>
          <p className="mb-0 text-light opacity-75 fw-light">
            Bringing customers, restaurants and delivery partners onto one platform.
          </p>
        </div>
      </Col>

    </Row>

  </Container>
</section>



      {/* ================= MY ROLE & RESPONSIBILITIES ================= */}

      <section className="pachoo-role py-5">
        <Container className="py-lg-5">

          <Row className="align-items-end mb-5">
            <Col lg={7}>
              <span className="pachoo-label">04 — MY ROLE & RESPONSIBILITIES</span>
              <h2 className="display-4 fw-bold mt-3">
                From Understanding <br />
                to Execution.
              </h2>
            </Col>

            <Col lg={5}>
              <p className="text-secondary lh-lg mb-0">
                I worked as the UI/UX Designer, contributing to the
                product experience across customer, restaurant,
                delivery partner and admin platforms.
              </p>
            </Col>
          </Row>

          <Row className="g-4">

            <Col lg={4}>
              <div className="role-highlight h-100 p-4 rounded-4">
                <span className="info-label">MY POSITION</span>
                <h3 className="fw-bold mt-4">UI/UX Designer</h3>
                <p className="text-secondary mb-4">
                  Responsible for designing intuitive and consistent
                  experiences across the Pachoo ecosystem.
                </p>

                <div className="role-meta">
                  <span>PROJECT TYPE</span>
                  <h6>Product Design</h6>
                </div>

                <div className="role-meta mt-3">
                  <span>DESIGN TOOL</span>
                  <h6>Figma</h6>
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <div className="role-responsibilities h-100 p-4 rounded-4">

                <span className="info-label">CORE RESPONSIBILITIES</span>

                <Row className="g-4 mt-2">

                  <Col md={6}>
                    <div className="responsibility-item">
                      <span>01</span>
                      <h5 className="fw-bold mt-3">Research & Understanding</h5>
                      <p className="text-secondary mb-0">
                        Understanding user needs, business requirements
                        and challenges of local delivery.
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="responsibility-item">
                      <span>02</span>
                      <h5 className="fw-bold mt-3">User Flow & Wireframing</h5>
                      <p className="text-secondary mb-0">
                        Structuring user journeys, navigation and
                        information architecture.
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="responsibility-item">
                      <span>03</span>
                      <h5 className="fw-bold mt-3">UI Design</h5>
                      <p className="text-secondary mb-0">
                        Creating responsive layouts, reusable components
                        and intuitive interfaces.
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="responsibility-item">
                      <span>04</span>
                      <h5 className="fw-bold mt-3">Design Consistency</h5>
                      <p className="text-secondary mb-0">
                        Maintaining consistent visual language across
                        all four connected platforms.
                      </p>
                    </div>
                  </Col>

                </Row>
              </div>
            </Col>

          </Row>
        </Container>
      </section>



      {/* ================= DESIGN SYSTEM ================= */}

      <section className="pachoo-design-system py-5">
        <Container className="py-lg-5">

          <Row className="align-items-end mb-5">
            <Col lg={7}>
              <span className="pachoo-label">
                05 — DESIGN SYSTEM & VISUAL IDENTITY
              </span>

              <h2 className="display-4 fw-bold mt-3">
                Building a Consistent <br />
                Visual Language.
              </h2>
            </Col>

            <Col lg={5}>
              <p className="text-secondary lh-lg mb-0">
                A unified design system was created to maintain
                visual consistency across all four platforms,
                with reusable components, typography, colors
                and interface elements.
              </p>
            </Col>
          </Row>

          {/* Complete Design System Image */}
          <div className="design-system-image rounded-4 overflow-hidden">
            <img
              src={designSystem}
              alt="Pachoo complete design system showing colors, typography and UI components"
              className="img-fluid w-100 d-block"
            />
          </div>

          <p className="text-secondary text-center mt-3 small">
            Pachoo — Design System & Visual Guidelines
          </p>

        </Container>
      </section>



    </main>
  );
};

export default PachooProject;
