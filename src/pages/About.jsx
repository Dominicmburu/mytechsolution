import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Check, Award, Users, FileText, Smile, Database, Target } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import '../assets/css/About.css';

const About = () => {
  return (
    <div>
      <PageHeader title="About Us" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} />
      
      {/* About Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="about-image-wrapper">
                <img src="/api/placeholder/600/500" alt="About us" className="about-image" />
                <div className="about-badge">
                  <h2>25</h2>
                  <p className="mb-0">Years Experience</p>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <h6 className="text-purple fw-semibold mb-3">
                <span className="bg-purple-light text-purple px-3 py-1 rounded-3 small d-inline-block">ABOUT US</span>
              </h6>
              <h2 className="display-5 fw-bold mb-4">
                We Are Increasing Business Success With <span className="text-purple">IT Solution</span>
              </h2>
              <p className="text-muted mb-4">
                Collaboratively envisioneer user friendly supply chains and cross unit imperative. 
                Authoritatively fabricate competitive resource and holistic synergy. 
                Uniquely generate efficient schemas before future.
              </p>
              
              <Row className="g-4 mt-3">
                <Col sm={6}>
                  <div className="certification-badge">
                    <div className="certification-icon">
                      <FileText />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Certified Company</h6>
                      <small className="text-muted">Best Provide Skills Services</small>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="certification-badge">
                    <div className="certification-icon">
                      <Target />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Expert Team</h6>
                      <small className="text-muted">100% Expert Team</small>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5 team-section">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">
              <span className="bg-purple-light text-purple px-3 py-1 rounded-3 small d-inline-block">TEAM MEMBER</span>
            </h6>
            <h2 className="display-5 fw-bold mb-3">See Our Skilled Expert <span className="text-purple">Team</span></h2>
          </div>
          
          <Row className="g-4">
            {[
              { name: "Alex Furnandes", role: "Project Manager", image: "/api/placeholder/300/400" },
              { name: "Mary Crispy", role: "Chief Expert", image: "/api/placeholder/300/400" },
              { name: "Henry Joshep", role: "Product Manager", image: "/api/placeholder/300/400" },
              { name: "Sanjida Carlose", role: "IT Consultant", image: "/api/placeholder/300/400" }
            ].map((member, index) => (
              <Col key={index} lg={3} md={6}>
                <Card className="team-member-card">
                  <div className="position-relative overflow-hidden">
                    <img src={member.image} alt={member.name} className="team-member-image" />
                  </div>
                  <div className="team-member-info">
                    <h5 className="mb-1">{member.name}</h5>
                    <p className="text-muted mb-0">{member.role}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Achievements Section */}
      <section className="py-5 achievements-section text-white">
        <Container>
          <Row className="g-4 text-center">
            {[
              { icon: FileText, number: "986+", label: "Finished Project" },
              { icon: Smile, number: "896+", label: "Happy Clients" },
              { icon: Users, number: "396+", label: "Skilled Experts" },
              { icon: Award, number: "496+", label: "Honorable Awards" }
            ].map((achievement, index) => (
              <Col key={index} md={3} className="achievement-item">
                <div className="achievement-icon">
                  <achievement.icon />
                </div>
                <h3 className="achievement-number">{achievement.number}</h3>
                <p className="achievement-label mb-0">{achievement.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h6 className="text-purple fw-semibold mb-3">
                <span className="bg-purple-light text-purple px-3 py-1 rounded-3 small d-inline-block">WHY CHOOSE US</span>
              </h6>
              <h2 className="display-5 fw-bold mb-4">
                We Deal With The Aspects Professional <span className="text-purple">IT Services</span>
              </h2>
              <p className="text-muted mb-5">
                Collaboratively envisioneer user friendly supply chains and cross unit imperative. 
                Authoritativel fabricate competitive resource and holistic.
              </p>
              
              <Row className="g-3">
                {[
                  'Big Data Analysis',
                  'High Quality Sicurity',
                  '24/7 Online Support',
                  '24/7 Expert Team',
                  'Business Improvement',
                  'Easy Solutions'
                ].map((item, index) => (
                  <Col key={index} sm={6}>
                    <div className="why-feature-item">
                      <Check />
                      <span className="fw-medium">{item}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            
            <Col lg={6}>
              <div className="why-choose-image position-relative">
                <div className="why-choose-shape"></div>
                <img src="/api/placeholder/600/400" alt="Why choose us" className="img-fluid rounded-3" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 testimonials-section text-white">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple-light fw-semibold mb-3">
              <span className="bg-white bg-opacity-10 text-purple-light px-3 py-1 rounded-3 small d-inline-block">CUSTOMER FEEDBACK</span>
            </h6>
            <h2 className="display-5 fw-bold mb-3">What Happy Clients Says</h2>
            <h3 className="h4 text-purple-light">About Us?</h3>
          </div>
          
          <Row className="g-4 position-relative">
            {[
              {
                name: "Jackline Techie",
                role: "CEO at Kormola",
                content: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
                rating: 5,
                image: "/api/placeholder/60/60",
                badge: "66"
              },
              {
                name: "Abraham Khalil",
                role: "CEO at Anadora",
                content: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
                rating: 5,
                image: "/api/placeholder/60/60",
                badge: "66"
              },
              {
                name: "Md Sumon Mia",
                role: "CEO at Rimasu",
                content: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
                rating: 5,
                image: "/api/placeholder/60/60",
                badge: "66"
              }
            ].map((testimonial, index) => (
              <Col key={index} lg={4}>
                <Card className="testimonial-card h-100">
                  <Card.Body>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                    <p className="text-muted mb-3">{testimonial.content}</p>
                    <div className="testimonial-author">
                      <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                    <div className="testimonial-badge">{testimonial.badge}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-5 blog-section">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">
              <span className="bg-purple-light text-purple px-3 py-1 rounded-3 small d-inline-block">NEWS & ARTICLES</span>
            </h6>
            <h2 className="display-5 fw-bold">Get Every Single Update <span className="text-purple">Blog</span></h2>
          </div>
          
          <Row className="g-4">
            {[
              {
                title: 'Regional Manager limited time management.',
                date: '13 Feb, 2023',
                comments: '2 Comments',
                author: 'By Webteck',
                image: '/api/placeholder/400/300'
              },
              {
                title: "What's the Holding Back it Solution Industry?",
                date: '13 Feb, 2023',
                comments: '2 Comments',
                author: 'By Webteck',
                image: '/api/placeholder/400/300'
              },
              {
                title: "Latin derived from Cicero's 1st-century BC",
                date: '13 Feb, 2023',
                comments: '1 Comment',
                author: 'By Webteck',
                image: '/api/placeholder/400/300'
              }
            ].map((blog, index) => (
              <Col key={index} md={4}>
                <Card className="blog-card h-100">
                  <div className="overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="blog-image" />
                  </div>
                  <Card.Body>
                    <div className="blog-meta">
                      <span><i className="far fa-calendar-alt me-1"></i> {blog.date}</span>
                      <span><i className="far fa-comments me-1"></i> {blog.comments}</span>
                    </div>
                    <h5 className="blog-title">{blog.title}</h5>
                    <div className="blog-footer d-flex justify-content-between align-items-center">
                      <div className="blog-author">
                        <i className="far fa-user me-1"></i>
                        <span>{blog.author}</span>
                      </div>
                      <a href="#" className="blog-link">
                        READ MORE →
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          {/* Partner Logos */}
          <div className="partner-logos">
            <img src="/api/placeholder/150/60" alt="hi-TECH" className="partner-logo" />
            <img src="/api/placeholder/150/60" alt="GOTECH" className="partner-logo" />
            <img src="/api/placeholder/150/60" alt="TECHCUBE" className="partner-logo" />
            <img src="/api/placeholder/150/60" alt="DIGITECH" className="partner-logo" />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;