import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { ArrowRight, Check, Phone, Mail } from 'lucide-react';
import '../assets/css/Home.css';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="hero-bg-overlay"></div>
        <Container className="position-relative">
          <Row className="align-items-center min-vh-80 pt-20">
            <Col lg={6} className="text-white">
              <h6 className="text-purple-light fw-semibold mb-3 animate-fade-in-up">SECURE & IT SERVICES</h6>
              <h1 className="display-5 fw-bold mb-4 animate-fade-in-up animation-delay-1">
                Make The Easiest Solution For You
              </h1>
              <p className="mb-5 animate-fade-in-up animation-delay-2">
                We turn complex IT challenges into simple, powerful solutions that work for your business. Our expert team delivers results that drive growth and keep you ahead of the competition.
              </p>
              <div className="d-flex gap-3 animate-fade-in-up animation-delay-3">
                <Button as={Link} to="/services" variant="purple" className="d-flex align-items-center">
                  DISCOVER MORE <ArrowRight className="ms-2" size={18} />
                </Button>
                <Button as={Link} to="/contact" variant="outline-light" size="lg" className="d-flex align-items-center">
                  CONTACT US <ArrowRight className="ms-2" size={18} />
                </Button>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="brain-visualization">
                  <div className="rotating-circle"></div>
                  <div className="dashed-circle"></div>
                  <img src="images/humanAi.png" alt="Brain hologram" className="brain-image" />
                </div>

                <div className="position-absolute bottom-0 end-0 bg-white p-3 rounded shadow-lg mb-4 me-4" style={{ zIndex: 2 }}>
                  <div className="d-flex align-items-center">
                    <div className="bg-purple-light p-3 rounded-circle me-3">
                      <Phone size={24} className="text-purple" />
                    </div>
                    <div>
                      <p className="mb-0 small text-muted">Call Us On:</p>
                      <p className="mb-0 fw-bold">+2547 06 526 569</p>
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
                icon: <i className="fas fa-code text-purple"></i>,
                title: 'Web Development',
                description: 'Custom, responsive websites and applications built with cutting-edge technology. We deliver powerful, scalable digital solutions that drive results.'
              },
              {
                icon: <i className="fas fa-pencil-ruler text-purple"></i>,
                title: 'UI/UX Design',
                description: 'Stunning, intuitive interfaces that captivate users and boost conversions. We create seamless experiences that keep customers coming back.'
              },
              {
                icon: <i className="fas fa-chart-line text-purple"></i>,
                title: 'Digital Marketing',
                description: "Data-driven strategies that increase visibility and generate qualified leads. We help you stand out in today's competitive digital landscape."
              }
            ].map((service, index) => (
              <Col key={index} md={4}>
                <Card className="text-center h-100 shadow-sm hover-lift border-0">
                  <Card.Body className="p-4">
                    <div className="display-3 mb-3">
                      {service.icon}
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="text-muted">{service.description}</p>
                    <Button variant="purple" size="sm" className="rounded-circle mt-2">
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
                <img src="https://i.pinimg.com/736x/6a/7a/15/6a7a150b675aeb0ed2b1995aa74ceb25.jpg" alt="Team working" className="img-fluid rounded-3" />
                <div className="position-absolute bottom-0 start-0 bg-purple text-white p-4 rounded-3 ms-4 mb-4">
                  <h2 className="display-4 fw-bold mb-0">5</h2>
                  <p className="mb-0">Years Experience</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h6 className="text-purple fw-semibold mb-3">ABOUT US</h6>
              <h2 className="display-6 fw-bold mb-4">We Are Increasing Business Success With <span className="text-purple">IT Solution</span></h2>
              <p className="text-muted mb-4">
                With 5 years of proven expertise, we transform businesses through innovative technology solutions. Our dedicated team works closely with you to understand your unique challenges and deliver custom strategies that drive growth, improve efficiency, and create lasting competitive advantages.
              </p>
              <Row className="mb-4">
                <Col sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-purple-light p-3 rounded-3 me-3">
                      <Check size={24} className="text-purple" />
                    </div>
                    <div>
                      <h6 className="mb-0">Certified Company</h6>
                      <small className="text-muted">Industry-recognized expertise</small>
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
                      <small className="text-muted">Skilled IT professionals</small>
                    </div>
                  </div>
                </Col>
              </Row>
              <Button variant="purple" size="lg">
                <Link to="/about" className="text-white text-decoration-none align-items-center d-flex">
                  DISCOVER MORE <ArrowRight className="ms-2" size={20} />
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section with Animations */}
      <section className="py-5 services-section position-relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="decoration-circle-1"></div>
        <div className="decoration-circle-2"></div>

        <Container>
          <div className="text-center mb-5 reveal-up">
            <h6 className="text-purple fw-semibold mb-3 animate-pulse">OUR SERVICES</h6>
            <h2 className="display-6 fw-bold">We Provide Exclusive <span className="text-purple">Service</span></h2>
            <h3 className="h4">For Your Business</h3>
          </div>
          <Row className="g-4">
            {[
              {
                icon: <i className="fas fa-globe text-purple"></i>,
                title: 'Web Development',
                description: 'Custom, responsive websites and applications that boost your online presence. We build solutions that convert visitors into customers.'
              },
              {
                icon: <i className="fas fa-paint-brush text-purple"></i>,
                title: 'UI/UX Design',
                description: 'Beautiful interfaces and seamless user experiences that engage and delight. We create designs that keep users coming back.'
              },
              {
                icon: <i className="fas fa-bullhorn text-purple"></i>,
                title: 'Digital Marketing',
                description: 'Result-driven campaigns that increase your visibility and drive qualified leads. We help you reach your target audience effectively.'
              },
              {
                icon: <i className="fas fa-chart-pie text-purple"></i>,
                title: 'Business Analysis',
                description: 'In-depth insights that reveal opportunities and solve complex problems. We turn data into actionable business strategies.'
              },
              {
                icon: <i className="fas fa-laptop-code text-purple"></i>,
                title: 'Software Services',
                description: 'Tailored software solutions that streamline operations and boost productivity. We build tools that help your business thrive.'
              },
              {
                icon: <i className="fas fa-brain text-purple"></i>,
                title: 'Machine Learning',
                description: 'Intelligent algorithms that automate processes and predict trends. We harness AI to give you a competitive advantage.'
              }
            ].map((service, index) => (
              <Col key={index} lg={4} md={6} className={`service-card-wrapper reveal-${index % 2 === 0 ? 'left' : 'right'}`} style={{ animationDelay: `${0.1 * index}s` }}>
                <Card className="service-card h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="service-icon-wrapper">
                      <div className="service-icon display-4 mb-3">
                        {service.icon}
                      </div>
                    </div>
                    <h4 className="mb-3 service-title">{service.title}</h4>
                    <p className="text-muted mb-4 service-description">{service.description}</p>
                    <Link to="/services" className="service-link text-purple text-decoration-none fw-semibold">
                      READ MORE <i className="fas fa-arrow-right ms-1 service-arrow"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5 reveal-up">
            <Button as={Link} to="/services" variant="purple" size="lg" className="btn-pulse">
              VIEW ALL SERVICES <i className="fas fa-arrow-right ms-2"></i>
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
              <h2 className="display-6 fw-bold mb-4">We Deliver Excellence in <span className="text-purple">IT Services</span></h2>
              <p className="text-muted mb-4">
                Our team combines technical expertise with business insight to deliver solutions that drive real results. We take pride in our customer-focused approach, ensuring that every project is completed with precision, innovation, and attention to detail.
              </p>
              <Row className="g-3">
                {[
                  {
                    title: 'Advanced Data Analytics',
                    description: 'Transform raw data into actionable insights'
                  },
                  {
                    title: 'Enterprise-Grade Security',
                    description: 'Protect your business with robust security solutions'
                  },
                  {
                    title: '24/7 Dedicated Support',
                    description: 'Round-the-clock assistance whenever you need it'
                  },
                  {
                    title: 'Certified IT Specialists',
                    description: 'Skilled professionals with proven expertise'
                  },
                  {
                    title: 'Strategic Business Solutions',
                    description: 'Custom strategies aligned with your goals'
                  },
                  {
                    title: 'User-Friendly Implementations',
                    description: 'Seamless integration with minimal disruption'
                  }
                ].map((item, index) => (
                  <Col key={index} sm={6}>
                    <div className="d-flex mb-3">
                      <div className="flex-shrink-0">
                        <div className="bg-purple-light p-2 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                          <Check className="text-purple" size={20} />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-semibold">{item.title}</h6>
                        <p className="text-muted small mb-0">{item.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={6}>
              <div className="position-relative">
                <img src="https://i.pinimg.com/736x/10/03/24/10032454d5eafe518d7a38a897612130.jpg" alt="Professional IT services" className="img-fluid rounded-3 shadow-lg" />
                <div className="position-absolute top-0 start-10 translate-middle bg-purple text-white p-3 rounded-3 shadow-lg d-flex align-items-center">
                  <div className="me-2">
                    <i className="fas fa-shield-alt fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">100%</h5>
                    <p className="mb-0 small">Secure Solutions</p>
                  </div>
                </div>
                <div className="position-absolute bottom-0 end-0 translate-middle-x bg-white p-3 rounded-3 shadow-lg d-flex align-items-center">
                  <div className="me-2">
                    <i className="fas fa-thumbs-up text-purple fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">98%</h5>
                    <p className="mb-0 small">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section with Ripple Wave Background */}
      <section className="stats-section position-relative py-5 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="ripple-background">
          <div className="circle xxlarge shade1"></div>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle medium shade4"></div>
          <div className="circle small shade5"></div>
        </div>

        <div className="hexagon-background">
          <div className="hexagon hex1"></div>
          <div className="hexagon hex2"></div>
          <div className="hexagon hex3"></div>
          <div className="hexagon hex4"></div>
        </div>

        <Container className="position-relative">
          <div className="text-center mb-5">
            <h6 className="text-purple-light fw-semibold mb-2">OUR ACHIEVEMENTS</h6>
            <h2 className="display-6 fw-bold">The Numbers <span className="text-purple-light">Speak</span> For Us</h2>
          </div>
          <Row className="text-center g-4">
            {[
              {
                icon: <i className="fas fa-clipboard-check"></i>,
                number: '100+',
                label: 'Completed Projects',
                description: 'Successfully delivered solutions'
              },
              {
                icon: <i className="fas fa-smile-beam"></i>,
                number: '92+',
                label: 'Satisfied Clients',
                description: 'Businesses thriving with our services'
              },
              {
                icon: <i className="fas fa-users-cog"></i>,
                number: '4+',
                label: 'Tech Specialists',
                description: 'Experts in cutting-edge technologies'
              },
              {
                icon: <i className="fas fa-award"></i>,
                number: '15+',
                label: 'Industry Awards',
                description: 'Recognition for excellence'
              }
            ].map((stat, index) => (
              <Col key={index} md={3}>
                <div className="stat-card p-4">
                  <div className="stat-icon-wrapper mb-3">
                    <div className="stat-icon">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <h5 className="stat-label mb-2">{stat.label}</h5>
                  <p className="stat-description mb-0 small text-purple-light">{stat.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section with Enhanced Cards */}
      <section className="team-section py-5 position-relative">
        {/* Background shapes */}
        <div className="shape-1"></div>
        <div className="shape-2"></div>

        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">MEET OUR TEAM</h6>
            <h2 className="display-6 fw-bold">The Experts Behind Our <span className="text-purple">Success</span></h2>
            <p className="text-muted mb-0 mx-auto" style={{ maxWidth: '700px' }}>
              Our talented professionals combine technical expertise with a passion for solving complex problems. Together, we deliver solutions that drive remarkable results.
            </p>
          </div>
          <Row className="g-4">
            {[
              {
                name: 'Alex Furnandes',
                role: 'Project Manager',
                image: 'https://i.pinimg.com/736x/78/7f/ce/787fcece237d38ed04fec991cd3d062b.jpg',
                expertise: 'Strategic Planning',
                bio: 'Alex leads our project teams with 8+ years of experience delivering complex IT solutions across multiple industries.',
                social: [
                  { platform: 'linkedin', url: '#' },
                  { platform: 'twitter', url: '#' },
                  { platform: 'envelope', url: '#' }
                ]
              },
              {
                name: 'Mary Crispy',
                role: 'Technical Lead',
                image: 'https://i.pinimg.com/736x/78/7f/ce/787fcece237d38ed04fec991cd3d062b.jpg',
                expertise: 'Software Architecture',
                bio: 'Mary brings 10+ years of expertise in designing scalable systems and optimizing performance for enterprise applications.',
                social: [
                  { platform: 'linkedin', url: '#' },
                  { platform: 'github', url: '#' },
                  { platform: 'envelope', url: '#' }
                ]
              },
              {
                name: 'Henry Joseph',
                role: 'Product Manager',
                image: 'https://i.pinimg.com/736x/78/7f/ce/787fcece237d38ed04fec991cd3d062b.jpg',
                expertise: 'User Experience',
                bio: 'Henry translates business requirements into exceptional products with a focus on usability and customer satisfaction.',
                social: [
                  { platform: 'linkedin', url: '#' },
                  { platform: 'twitter', url: '#' },
                  { platform: 'envelope', url: '#' }
                ]
              },
              {
                name: 'Sarah Williams',
                role: 'UI/UX Designer',
                image: 'https://i.pinimg.com/736x/78/7f/ce/787fcece237d38ed04fec991cd3d062b.jpg',
                expertise: 'Visual Design',
                bio: 'Sarah creates stunning interfaces that balance aesthetics with functionality, enhancing user engagement and satisfaction.',
                social: [
                  { platform: 'linkedin', url: '#' },
                  { platform: 'dribbble', url: '#' },
                  { platform: 'envelope', url: '#' }
                ]
              }
            ].map((member, index) => (
              <Col key={index} lg={3} md={6}>
                <div className="team-card-wrapper">
                  <Card className="team-card border-0 shadow-sm h-100">
                    <div className="team-img-wrapper position-relative overflow-hidden">
                      <Card.Img variant="top" src={member.image} className="team-img" />
                      <div className="team-overlay d-flex flex-column justify-content-between p-3">
                        <div className="team-expertise">
                          <span className="badge bg-purple-light text-purple px-3 py-2 rounded-pill">{member.expertise}</span>
                        </div>
                        <div className="team-social d-flex justify-content-center">
                          {member.social.map((platform, i) => (
                            <a key={i} href={platform.url} className="team-social-icon mx-2">
                              <i className={`fas fa-${platform.platform}`}></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Card.Body className="p-4">
                      <h5 className="team-name mb-1">{member.name}</h5>
                      <p className="team-role text-purple fw-semibold mb-2">{member.role}</p>
                      <p className="team-bio text-muted small mb-0">{member.bio}</p>
                    </Card.Body>
                  </Card>
                </div>
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
              { title: 'Web Design', image: 'https://i.pinimg.com/736x/14/22/31/1422316ba149f1a986182b9e4b3864e3.jpg' },
              { title: 'IT Solution', image: 'https://i.pinimg.com/736x/b4/07/3a/b4073ae822c46bc169e18a42f49bba08.jpg' },
              { title: 'SEO Optimization', image: 'https://i.pinimg.com/736x/fd/94/d5/fd94d525369772a22fcb068f5890bb58.jpg' },
              { title: 'Cloud Migration', image: 'https://i.pinimg.com/736x/2f/d7/d1/2fd7d12049d20e4d449a5867ae5a847e.jpg' },
              { title: 'Data Analysis', image: 'https://i.pinimg.com/736x/9a/84/b3/9a84b3c9f47bff62191e65a4fa0edbc3.jpg' },
              { title: 'Digital Marketing', image: 'https://i.pinimg.com/736x/12/67/5e/12675e5e45893227d36f8f5f14b1ed62.jpg' }
            ].map((project, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="border-0 shadow-sm hover-lift overflow-hidden h-100">
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

      {/* Testimonials Section with Carousel */}
      <TestimonialsCarousel />

      {/* Contact Section */}
      <section className="contact-section py-5 position-relative">
        {/* Background Elements */}
        <div className="contact-bg-shape shape-1"></div>
        <div className="contact-bg-shape shape-2"></div>

        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-2">GET IN TOUCH</h6>
            <h2 className="display-6 fw-bold">Let's Discuss Your <span className="text-purple">Project</span></h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              We're ready to help you transform your business with tailored IT solutions
            </p>
          </div>

          <Row className="align-items-center g-5">
            <Col lg={5}>
              <div className="contact-info-card p-4 rounded-4 mb-4 bg-white shadow-sm border-start border-4 border-purple">
                <h4 className="fw-bold mb-3">How We Can Help You</h4>
                <p className="text-muted mb-4">
                  Our team of experts is ready to understand your unique needs and challenges. We provide custom solutions that drive growth and efficiency for your business.
                </p>

                <div className="contact-feature mb-4 d-flex">
                  <div className="contact-feature-icon bg-purple-light p-3 rounded-3 me-3 flex-shrink-0">
                    <i className="fas fa-clock text-purple"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Fast Response Time</h5>
                    <p className="text-muted mb-0">We respond to inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="contact-feature mb-4 d-flex">
                  <div className="contact-feature-icon bg-purple-light p-3 rounded-3 me-3 flex-shrink-0">
                    <i className="fas fa-user-shield text-purple"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Free Consultation</h5>
                    <p className="text-muted mb-0">Schedule a no-obligation discovery call</p>
                  </div>
                </div>

                <div className="contact-info mt-4 pt-4 border-top">
                  <Row className="g-4">
                    <Col sm={6}>
                      <div className="d-flex align-items-center">
                        <div className="bg-purple-light p-3 rounded-3 me-3 flex-shrink-0">
                          <i className="fas fa-phone text-purple"></i>
                        </div>
                        <div>
                          <small className="text-muted d-block">Call Us:</small>
                          <a href="tel:+18088000393" className="text-dark fw-bold text-decoration-none hover-text-purple">+2547 06 526 569</a>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="d-flex align-items-center">
                        <div className="bg-purple-light p-3 rounded-3 me-3 flex-shrink-0">
                          <i className="fas fa-envelope text-purple"></i>
                        </div>
                        <div>
                          <small className="text-muted d-block">Email Us:</small>
                          <a href="mailto:info@traga.com" className="text-dark fw-bold text-decoration-none hover-text-purple">info@dtechify.com</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="contact-form-wrapper position-relative bg-white p-4 p-lg-5 rounded-4 shadow-sm">
                <div className="form-header mb-4">
                  <h3 className="fw-bold mb-2">Send Us a Message</h3>
                  <p className="text-muted">Fill out the form below and we'll get back to you shortly</p>
                </div>

                <form className="contact-form">
                  <Row className="g-3">
                    <Col md={6}>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingName" placeholder="Your Name" />
                        <label htmlFor="floatingName">Your Name</label>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="Your Email" />
                        <label htmlFor="floatingEmail">Your Email</label>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-floating mb-3">
                        <select className="form-select" id="floatingSelect">
                          <option value="" disabled selected>Select a service</option>
                          <option value="Web Development">Web Development</option>
                          <option value="IT Consulting">IT Consulting</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Cloud Services">Cloud Services</option>
                          <option value="App Development">App Development</option>
                          <option value="Other">Other Services</option>
                        </select>
                        <label htmlFor="floatingSelect">Service Needed</label>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-floating mb-3">
                        <input type="tel" className="form-control" id="floatingPhone" placeholder="Phone Number" />
                        <label htmlFor="floatingPhone">Phone Number</label>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="form-floating mb-3">
                        <textarea className="form-control" id="floatingMessage" style={{ height: "120px" }} placeholder="Your Message"></textarea>
                        <label htmlFor="floatingMessage">Your Message</label>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="d-flex align-items-center justify-content-between flex-wrap g-3">
                        <button type="submit" className="btn btn-purple btn-lg px-4 py-2 d-flex align-items-center">
                          SEND MESSAGE <i className="fas fa-paper-plane ms-2"></i>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
                <div className="form-badge position-absolute">
                  <div className="badge bg-purple text-white p-2 rounded-pill">
                    <i className="fas fa-shield-alt me-1"></i> Your data is secure
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

export default Home;