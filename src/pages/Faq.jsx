import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Container, Row, Col, Accordion, Button, Form } from 'react-bootstrap';

const Faq = () => {
  const [activeKey, setActiveKey] = useState("0");

  const faqs = [
    {
      question: 'Where can I get analytics help?',
      answer: 'Dramatically disseminate real-time portals rather than top-line action items.'
    },
    {
      question: 'How long should a business plan be?',
      answer: 'A typical business plan should be between 15-20 pages, including all essential sections...'
    },
    {
      question: 'Do I need a business plan?',
      answer: 'Yes, a business plan is essential for securing funding and guiding your business strategy...'
    },
    {
      question: 'How To Choose A Good QA Consultant?',
      answer: 'Look for experience, certifications, and proven track record in your industry...'
    },
    {
      question: 'What is off page SEO link building?',
      answer: 'Off-page SEO refers to building quality backlinks from external websites to improve your site\'s authority...'
    },
    {
      question: 'Outsourced IT Services For Small Business?',
      answer: 'Dramatically disseminate real-time portals rather than top-line action items. Uniquely provide access to low-risk high-yield products without dynamic products. Progressively re-engineer low-risk high yield ideas rather than emerging alignments.'
    },
    {
      question: 'Digital solution for your startup agency?',
      answer: 'We provide comprehensive digital solutions including web development, mobile apps, and cloud services...'
    }
  ];

  return (
    <div>
      <PageHeader title="Faq" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Faq' }]} />
      
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <div className="d-inline-flex bg-purple-light p-4 rounded-3 mb-4">
              <span className="display-1">❓</span>
            </div>
            <h2 className="display-6 fw-bold">Talk To About Any Question?</h2>
          </div>

          <Row className="justify-content-center mb-5">
            <Col lg={8}>
              <Accordion activeKey={activeKey} onSelect={setActiveKey}>
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index} className="mb-3">
                    <Accordion.Header className="fw-semibold">
                      {faq.question}
                    </Accordion.Header>
                    <Accordion.Body>
                      {faq.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">GET A QUOTE</h6>
            <h2 className="display-6 fw-bold">Request A Free Consultation</h2>
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
                      <Col md={6}>
                        <Form.Group>
                          <Form.Select className="py-3">
                            <option>Select Subject</option>
                            <option>Web Development</option>
                            <option>IT Consulting</option>
                            <option>Digital Marketing</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
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
        </Container>
      </section>
    </div>
  );
};

export default Faq;