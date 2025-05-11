import React from 'react';
import PageHeader from '../components/PageHeader';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <PageHeader title="Contact us" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Contact us' }]} />
      
      <section className="py-5">
        <Container>
          {/* Contact Info */}
          <Row className="g-4 mb-5">
            <Col md={4} className="text-center">
              <div className="bg-purple-light p-3 rounded-3 d-inline-flex mb-4">
                <MapPin className="text-purple" size={40} />
              </div>
              <h4 className="mb-3">Our Office Address</h4>
              <p className="text-muted">Burnsville, MN 55337 Streat,<br />United States</p>
            </Col>

            <Col md={4} className="text-center">
              <div className="bg-purple-light p-3 rounded-3 d-inline-flex mb-4">
                <Phone className="text-purple" size={40} />
              </div>
              <h4 className="mb-3">Call Us Anytime</h4>
              <p className="text-muted">(+65) - 48596 - 5789<br />+190-8800-0393</p>
            </Col>

            <Col md={4} className="text-center">
              <div className="bg-purple-light p-3 rounded-3 d-inline-flex mb-4">
                <Mail className="text-purple" size={40} />
              </div>
              <h4 className="mb-3">Send An Email</h4>
              <p className="text-muted">info.example@traga.com<br />info@traga.com</p>
            </Col>
          </Row>

          {/* Contact Form */}
          <div className="text-center mb-5">
            <p className="lead text-muted">
              Enthusiastically disintermediate one-to-one leadership via business e-commerce. 
              Dramatically reintemediate compelling process improvements rather than empowered relationships.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Control type="text" placeholder="Enter Your Name" className="py-3" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Control type="email" placeholder="Enter Your Email" className="py-3" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Select className="py-3">
                            <option>Select Subject</option>
                            <option>Web Development</option>
                            <option>IT Consulting</option>
                            <option>Digital Marketing</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Control type="tel" placeholder="Phone Number" className="py-3" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Control as="textarea" rows={5} placeholder="Write Your Message" className="py-3" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Button variant="purple" size="lg" className="w-100 py-3">
                          MAKE AN APPOINTMENT
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>

          {/* Map Section */}
          <Row className="mt-5">
            <Col>
              <div className="position-relative" style={{height: '400px'}}>
                <img 
                  src="/api/placeholder/1200/400" 
                  alt="Map" 
                  className="w-100 h-100 object-fit-cover rounded opacity-75" 
                />
                <div className="position-absolute top-50 start-50 translate-middle">
                  <div className="card shadow-lg">
                    <div className="card-body text-center p-4">
                      <h5 className="fw-bold mb-2">Kingston</h5>
                      <p className="small text-muted mb-1">In Taunui</p>
                      <p className="text-purple fw-semibold mb-0">Bad Vilbel</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;