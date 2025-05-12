import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="bg-purple py-4">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg={8}>
              <Row>
                <Col md={4}>
                  <div className="d-flex align-items-center">
                    <Phone className="me-3" size={20} />
                    <div>
                      <p className="mb-0 small">Quick Call Us:</p>
                      <p className="mb-0 fw-semibold">+2547 06 526 569</p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="d-flex align-items-center">
                    <Mail className="me-3" size={20} />
                    <div>
                      <p className="mb-0 small">Mail Us On:</p>
                      <p className="mb-0 fw-semibold">Info@dtechify.com</p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="d-flex align-items-center">
                    <MapPin className="me-3" size={20} />
                    <div>
                      <p className="mb-0 small">Visit Location:</p>
                      <p className="mb-0 fw-semibold">Nyeri, Kenya</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Link to="/" className="text-white text-decoration-none fs-2 fw-bold d-flex align-items-center justify-content-lg-end">
                <div className="bg-white text-purple p-2 rounded me-2">
                  <span className="fw-bold">D</span>
                </div>
                DTechify
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-5">
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="text-purple mb-4">ABOUT COMPANY</h5>
              <p className="text-white-50 mb-4">
                Professionally redefine transparent ROI through low-risk high-yield imperatives. 
                Progressively create empowered. cost effective users via team driven.
              </p>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-purple btn-sm">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-purple btn-sm">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-purple btn-sm">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="btn btn-purple btn-sm">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <h5 className="text-purple mb-4">QUICK LINKS</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/about" className="text-white-50 text-decoration-none hover-purple">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link to="/team" className="text-white-50 text-decoration-none hover-purple">Team</Link>
                </li>
                <li className="mb-2">
                  <Link to="/faq" className="text-white-50 text-decoration-none hover-purple">Faq</Link>
                </li>
                <li className="mb-2">
                  <Link to="/projects" className="text-white-50 text-decoration-none hover-purple">Projects</Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-white-50 text-decoration-none hover-purple">Contact us</Link>
                </li>
              </ul>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <h5 className="text-purple mb-4">IT SERVICES</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/service-details/web-development" className="text-white-50 text-decoration-none hover-purple">
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/service-details/business-development" className="text-white-50 text-decoration-none hover-purple">
                    Business Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/service-details/product-management" className="text-white-50 text-decoration-none hover-purple">
                    Product Management
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/service-details/ui-ux-design" className="text-white-50 text-decoration-none hover-purple">
                    UI/UX Design
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/service-details/cloud-services" className="text-white-50 text-decoration-none hover-purple">
                    Cloud services
                  </Link>
                </li>
              </ul>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <h5 className="text-purple mb-4">RECENT POSTS</h5>
              <div className="d-flex mb-3">
                <img src="/api/placeholder/80/80" alt="Blog post" className="img-fluid rounded me-3" style={{width: '80px', height: '80px', objectFit: 'cover'}} />
                <div>
                  <h6 className="mb-1">
                    <Link to="/blog-details/1" className="text-white text-decoration-none hover-purple">
                      Unsatiable Entreaties May Collecting Power.
                    </Link>
                  </h6>
                  <small className="text-white-50">Feb 13 2023</small>
                </div>
              </div>
              <div className="d-flex">
                <img src="/api/placeholder/80/80" alt="Blog post" className="img-fluid rounded me-3" style={{width: '80px', height: '80px', objectFit: 'cover'}} />
                <div>
                  <h6 className="mb-1">
                    <Link to="/blog-details/2" className="text-white text-decoration-none hover-purple">
                      Regional Manager Limited Time Management.
                    </Link>
                  </h6>
                  <small className="text-white-50">Feb 13 2023</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="border-top border-secondary py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0 text-white-50">
                Copyright © 2025 <Link to="/" className="text-purple text-decoration-none">DTechify</Link>
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <Link to="/terms" className="text-white-50 text-decoration-none hover-purple me-3">Terms & Condition</Link>
              <Link to="/privacy" className="text-white-50 text-decoration-none hover-purple">Privacy Policy</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;