import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { ArrowRight, Check, Phone, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="hero-bg-overlay"></div>
        <Container className="position-relative">
          <Row className="align-items-center min-vh-100 py-5">
            <Col lg={6} className="text-white">
              <h6 className="text-purple-light fw-semibold mb-3 animate-fade-in-up">SECURE & IT SERVICES</h6>
              <h1 className="display-2 fw-bold mb-4 animate-fade-in-up animation-delay-1">
                Make The Easiest Solution For You
              </h1>
              <p className="lead mb-5 animate-fade-in-up animation-delay-2">
                Energistically harness ubiquitous imperatives without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experiences and front-end.
              </p>
              <div className="d-flex gap-3 animate-fade-in-up animation-delay-3">
                <Button as={Link} to="/services" variant="purple" size="lg" className="d-flex align-items-center">
                  DISCOVER MORE <ArrowRight className="ms-2" size={20} />
                </Button>
                <Button as={Link} to="/contact" variant="outline-light" size="lg">
                  CONTACT US <ArrowRight className="ms-2" size={20} />
                </Button>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="position-relative">
                <img src="/api/placeholder/600/500" alt="Business professionals" className="img-fluid rounded animate-fade-in-right" />
                <div className="position-absolute bottom-0 end-0 bg-white p-3 rounded shadow-lg mb-4 me-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-purple-light p-3 rounded-circle me-3">
                      <Phone size={24} className="text-purple" />
                    </div>
                    <div>
                      <p className="mb-0 small text-muted">Call Us On:</p>
                      <p className="mb-0 fw-bold">+180-8800-0393</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {[
              {
                icon: '💻',
                title: 'Machine Learning',
                description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.'
              },
              {
                icon: '🔧',
                title: 'IT Management',
                description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.'
              },
              {
                icon: '☁️',
                title: 'Cloud Computing',
                description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.'
              }
            ].map((service, index) => (
              <Col key={index} md={4}>
                <Card className="text-center h-100 shadow-sm hover-lift border-0">
                  <Card.Body className="p-4">
                    <div className="display-3 mb-3 text-purple">{service.icon}</div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="text-muted">{service.description}</p>
                    <Button variant="purple" size="sm" className="rounded-circle">
                      →
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="position-relative">
                <img src="/api/placeholder/500/600" alt="Team working" className="img-fluid rounded-3" />
                <div className="position-absolute bottom-0 start-0 bg-purple text-white p-4 rounded-3 ms-4 mb-4">
                  <h2 className="display-4 fw-bold mb-0">25</h2>
                  <p className="mb-0">Years Experience</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h6 className="text-purple fw-semibold mb-3">ABOUT US</h6>
              <h2 className="display-6 fw-bold mb-4">We Are Increasing Business Success With <span className="text-purple">IT Solution</span></h2>
              <p className="text-muted mb-4">
                Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritatively fabricate competitive resource and holistic synergy. Uniquely generate efficient schemas before future.
              </p>
              <Row className="mb-4">
                <Col sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-purple-light p-3 rounded-3 me-3">
                      <Check size={24} className="text-purple" />
                    </div>
                    <div>
                      <h6 className="mb-0">Certified Company</h6>
                      <small className="text-muted">Best Provide Skills Services</small>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-purple-light p-3 rounded-3 me-3">
                      <Check size={24} className="text-purple" />
                    </div>
                    <div>
                      <h6 className="mb-0">Expert Team</h6>
                      <small className="text-muted">100% Expert Team</small>
                    </div>
                  </div>
                </Col>
              </Row>
              <Button variant="purple" size="lg">
                DISCOVER MORE <ArrowRight className="ms-2" size={20} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">OUR SERVICES</h6>
            <h2 className="display-6 fw-bold">We Provide Exclusive <span className="text-purple">Service</span></h2>
            <h3 className="h4">For Your Business</h3>
          </div>
          <Row className="g-4">
            {[
              { icon: '💻', title: 'Web Development', description: 'Intrinsicly redefine competitive e-business before adaptive potentialit. Professionally build progressive users with.' },
              { icon: '🎨', title: 'UI/UX Design', description: 'Intrinsicly redefine competitive e-business before adaptive potentialit. Professionally build progressive users with.' },
              { icon: '📢', title: 'Digital Marketing', description: 'Intrinsicly redefine competitive e-business before adaptive potentialit. Professionally build progressive users with.' },
              { icon: '📊', title: 'Business Analysis', description: 'Intrinsicly redefine competitive e-business before adaptive potentialit. Professionally build progressive users with.' },
              { icon: '💻', title: 'Software Services', description: 'Intrinsicly redefine competitive e-business before adaptive potentialit. Professionally build progressive users with.' },
              { icon: '🤖', title: 'Machine Learning', description: 'Intrinsicly redefine competitive e-business before adaptive potentialit. Professionally build progressive users with.' }
            ].map((service, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="h-100 border-0 shadow-sm hover-lift">
                  <Card.Body className="p-4">
                    <div className="display-4 mb-3 text-purple">{service.icon}</div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="text-muted mb-4">{service.description}</p>
                    <Link to="/services" className="text-purple text-decoration-none fw-semibold">
                      READ MORE →
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/services" variant="purple" size="lg">
              VIEW ALL SERVICES →
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h6 className="text-purple fw-semibold mb-3">WHY CHOOSE US</h6>
              <h2 className="display-6 fw-bold mb-4">We Deal With The Aspects Professional <span className="text-purple">IT Services</span></h2>
              <p className="text-muted mb-4">
                Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritavel fabricate competitive resource and holistic.
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
                    <div className="d-flex align-items-center">
                      <Check className="text-purple me-2" />
                      <span>{item}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={6}>
              <img src="/api/placeholder/600/400" alt="Professional presentation" className="img-fluid rounded-3" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="text-center g-4">
            {[
              { icon: '📋', number: '986+', label: 'Finished Project' },
              { icon: '😊', number: '896+', label: 'Happy Clients' },
              { icon: '👥', number: '396+', label: 'Skilled Experts' },
              { icon: '🏆', number: '495+', label: 'Honorable Awards' }
            ].map((stat, index) => (
              <Col key={index} md={3}>
                <div className="bg-primary bg-opacity-10 rounded-3 p-3 d-inline-block mb-3">
                  <span className="display-4">{stat.icon}</span>
                </div>
                <h3 className="display-6 fw-bold mb-2">{stat.number}</h3>
                <p className="mb-0">{stat.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">TEAM MEMBER</h6>
            <h2 className="display-6 fw-bold">See Our Skilled Expert <span className="text-purple">Team</span></h2>
          </div>
          <Row className="g-4">
            {[
              { name: 'Alex Furnandes', role: 'Project Manager', image: '/api/placeholder/300/400' },
              { name: 'Mary Crispy', role: 'Chief Expert', image: '/api/placeholder/300/400' },
              { name: 'Henry Joshep', role: 'Product Manager', image: '/api/placeholder/300/400' },
              { name: 'Sanjida Carlose', role: 'IT Consultant', image: '/api/placeholder/300/400' }
            ].map((member, index) => (
              <Col key={index} lg={3} md={6}>
                <Card className="team-card border-0 shadow-sm hover-lift">
                  <Card.Img variant="top" src={member.image} style={{height: '300px', objectFit: 'cover'}} />
                  <Card.Body className="text-center">
                    <h5 className="mb-1">{member.name}</h5>
                    <p className="text-muted mb-0">{member.role}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">LATEST PROJECT</h6>
            <h2 className="display-6 fw-bold">See We Have Solution</h2>
            <h3 className="h4">Done <span className="text-purple">IT Projects</span></h3>
          </div>
          <Row className="g-4">
            {[
              { title: 'Web Design', image: '/api/placeholder/400/300' },
              { title: 'IT Solution', image: '/api/placeholder/400/300' },
              { title: 'SEO Optimization', image: '/api/placeholder/400/300' },
              { title: 'Cloud Migration', image: '/api/placeholder/400/300' },
              { title: 'Data Analysis', image: '/api/placeholder/400/300' },
              { title: 'Digital Marketing', image: '/api/placeholder/400/300' }
            ].map((project, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="border-0 shadow-sm hover-lift overflow-hidden">
                  <Card.Img variant="top" src={project.image} />
                  <Card.ImgOverlay className="d-flex align-items-end">
                    <h5 className="text-white mb-0">{project.title}</h5>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/projects" variant="purple" size="lg">
              VIEW ALL PROJECTS →
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h6 className="text-purple fw-semibold mb-3">TESTIMONALS</h6>
              <h2 className="display-6 fw-bold mb-4">Let's Here What Are The Customer <span className="text-purple">Saying</span></h2>
              <p className="mb-4">
                Appropriately envisioneer leveraged information through 2.0 communities. Synergistically parallel task inexpensive products whereas cross-media ideas.
              </p>
              <Button variant="purple">VIEW MORE →</Button>
            </Col>
            <Col lg={6}>
              <Card className="bg-light text-dark">
                <Card.Body className="p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-warning">⭐</span>
                    ))}
                  </div>
                  <p className="mb-4">
                    "The best service reinvent prospective metrics before granular schema. 
                    Professionally metrics before expedite client-centric methods of empowerment whereas effective human."
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="/api/placeholder/60/60" alt="Designer" className="rounded-circle me-3" />
                    <div>
                      <h6 className="mb-0">UI/UX Designer</h6>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h6 className="text-purple fw-semibold mb-3">APPOINTMENT NOW</h6>
              <h2 className="display-6 fw-bold mb-4">We're Ready To Talk About Your <span className="text-purple">Opportunities</span></h2>
              <p className="text-muted mb-4">
                Progressively morph principle-centered e-markets without an expanded array of opportunities. Conveniently incubate e-tailers for extensive leadership skills. Holisticly extend leading-edge vortals vis-a-vis 24/7 e-markets. Appropriately evolve efficient functionalities with installed base relationships.
              </p>
              <Row className="g-3">
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <div className="bg-purple-light p-3 rounded-3 me-3">
                      <Phone size={24} className="text-purple" />
                    </div>
                    <div>
                      <small className="text-muted">Call Us On:</small>
                      <p className="mb-0 fw-bold">+180-8800-0393</p>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <div className="bg-purple-light p-3 rounded-3 me-3">
                      <Mail size={24} className="text-purple" />
                    </div>
                    <div>
                      <small className="text-muted">Quick Mail Us:</small>
                      <p className="mb-0 fw-bold">info@traga.com</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <div className="bg-light p-5 rounded-3">
                <form>
                  <Row className="g-3">
                    <Col md={6}>
                      <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" />
                    </Col>
                    <Col md={6}>
                      <input type="email" className="form-control form-control-lg" placeholder="Enter Your Email" />
                    </Col>
                    <Col md={6}>
                      <select className="form-select form-select-lg">
                        <option>Select Subject</option>
                        <option>Web Development</option>
                        <option>IT Consulting</option>
                        <option>Digital Marketing</option>
                      </select>
                    </Col>
                    <Col md={6}>
                      <input type="tel" className="form-control form-control-lg" placeholder="Phone Number" />
                    </Col>
                    <Col md={12}>
                      <textarea className="form-control form-control-lg" rows="4" placeholder="Write Your Message"></textarea>
                    </Col>
                    <Col md={12}>
                      <Button variant="purple" size="lg" className="w-100">
                        MAKE AN APPOINTMENT
                      </Button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">NEWS & ARTICLES</h6>
            <h2 className="display-6 fw-bold">Get Every Single Update Blog</h2>
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
                <Card className="border-0 shadow-sm hover-lift">
                  <Card.Img variant="top" src={blog.image} />
                  <Card.Body>
                    <div className="d-flex justify-content-between small text-muted mb-2">
                      <span>{blog.date}</span>
                      <span>{blog.comments}</span>
                    </div>
                    <h5 className="mb-2">{blog.title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="small text-muted">{blog.author}</span>
                      <Link to="/blog" className="text-purple">READ MORE →</Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/* Partner Logos */}
          <Row className="mt-5 text-center">
            <Col>
              <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
                <img src="/api/placeholder/150/60" alt="hi-TECH" className="img-fluid" />
                <img src="/api/placeholder/150/60" alt="GOTECH" className="img-fluid" />
                <img src="/api/placeholder/150/60" alt="TECHCUBE" className="img-fluid" />
                <img src="/api/placeholder/150/60" alt="DIGITECH" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;