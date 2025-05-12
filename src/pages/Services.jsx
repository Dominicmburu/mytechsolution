import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { ArrowRight, Code, Palette, BarChart, Database, Cog, Brain, Settings, Cloud, HardDrive } from 'lucide-react';
import '../assets/css/Services.css';

const Services = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom, responsive websites and applications built with cutting-edge technology. We deliver powerful, scalable digital solutions that drive results.',
      icon: Code,
      color: 'purple',
      path: '/service-details/web-development'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Stunning, intuitive interfaces that captivate users and boost conversions. We create seamless experiences that keep customers coming back.',
      icon: Palette,
      color: 'purple',
      path: '/service-details/ui-ux-design'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: "Data-driven strategies that increase visibility and generate qualified leads. We help you stand out in today's competitive digital landscape.",
      icon: BarChart,
      color: 'purple',
      path: '/service-details/digital-marketing'
    },
    {
      id: 'business-analysis',
      title: 'Business Analysis',
      description: 'In-depth insights that reveal opportunities and solve complex problems. We turn data into actionable business strategies.',
      icon: Database,
      color: 'purple',
      path: '/service-details/business-analysis'
    },
    {
      id: 'software-services',
      title: 'Software Services',
      description: 'Tailored software solutions that streamline operations and boost productivity. We build tools that help your business thrive.',
      icon: Cog,
      color: 'purple',
      path: '/service-details/software-services'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'Intelligent algorithms that automate processes and predict trends. We harness AI to give you a competitive advantage.',
      icon: Brain,
      color: 'purple',
      path: '/service-details/machine-learning'
    },
    {
      id: 'it-management',
      title: 'IT Management',
      description: 'Comprehensive management of your technology infrastructure. We handle the tech so you can focus on your core business.',
      icon: Settings,
      color: 'purple',
      path: '/service-details/it-management'
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      description: 'Secure, scalable cloud solutions that reduce costs and increase flexibility. We help you leverage the power of the cloud.',
      icon: Cloud,
      color: 'purple',
      path: '/service-details/cloud-computing'
    },
    {
      id: 'backup-recovery',
      title: 'Backup & Recovery',
      description: 'Robust backup and disaster recovery solutions that protect your valuable data. We ensure business continuity when the unexpected happens.',
      icon: HardDrive,
      color: 'purple',
      path: '/service-details/backup-recovery'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Services" 
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Services' }
        ]}
        backgroundImage="https://i.pinimg.com/736x/71/12/9e/71129e5a8e8d06536d17a5d914409a1b.jpg"
      />

      {/* Enhanced Services Grid */}
      <section className="services-section py-5 position-relative">
        {/* Background decoration */}
        <div className="services-bg-shape shape-1" id='shape-1'></div>
        <div className="services-bg-shape shape-2"></div>
        
        <Container>
          <div className="text-center mb-5">
            <div className="subtitle-badge mb-3">
              <span className="bg-purple-light text-purple px-3 py-2 rounded-pill">OUR EXPERTISE</span>
            </div>
            <h2 className="section-title display-5 fw-bold mb-2">Transformative <span className="text-purple">IT Solutions</span></h2>
            <p className="section-subtitle text-muted mx-auto" style={{maxWidth: "700px"}}>
              We deliver cutting-edge technology services tailored to your unique business needs
            </p>
          </div>
          
          {/* Fixed-width services grid */}
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card-wrapper">
                <Card className="service-card h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="service-icon-wrapper mb-4">
                      <div className="service-icon">
                        <service.icon size={28} className="text-purple" />
                      </div>
                    </div>
                    <h4 className="service-title mb-3">{service.title}</h4>
                    <p className="service-description text-muted mb-4">{service.description}</p>
                    <Link 
                      to={service.path} 
                      className="service-link text-purple text-decoration-none fw-semibold d-inline-flex align-items-center"
                    >
                      Explore Service <ArrowRight className="ms-2 service-link-arrow" size={16} />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section py-5 position-relative">
        <div className="cta-bg-overlay"></div>
        <div className="cta-decoration">
          <div className="cta-circle circle-1"></div>
          <div className="cta-circle circle-2"></div>
          <div className="cta-circle circle-3"></div>
          <div className="cta-dots"></div>
        </div>
        
        <Container className="position-relative">
          <Row className="align-items-center g-5">
            <Col lg={7} className="text-white">
              <div className="cta-content">
                <h6 className="cta-subtitle mb-3">
                  <span className="bg-white bg-opacity-25 text-white px-3 py-2 rounded-pill">LET'S COLLABORATE</span>
                </h6>
                <h2 className="cta-title display-4 fw-bold mb-3">Ready to Transform Your Business?</h2>
                <p className="cta-text mb-4 lead">
                  Our team of experts is ready to understand your unique challenges and develop tailored solutions that drive growth and efficiency.
                </p>
                <div className="cta-buttons d-flex flex-wrap gap-3">
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="light" 
                    size="lg" 
                    className="fw-semibold align-items-center d-flex"
                  >
                    Get in Touch <ArrowRight className="ms-2" size={18} />
                  </Button>
                  <Button 
                    as={Link} 
                    to="/about" 
                    variant="outline-light" 
                    size="lg" 
                    className="fw-semibold"
                  >
                    Learn About Us
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={5} className="d-none d-lg-block">
              <div className="cta-image-wrapper">
                <img src="https://i.pinimg.com/736x/ed/9c/4f/ed9c4f1621b11333d09c49df24179108.jpg" alt="IT professionals" className="cta-image img-fluid rounded-4 shadow-lg" />
                <div className="cta-card bg-white p-4 rounded-4 shadow-lg">
                  <div className="d-flex align-items-center mb-3">
                    <div className="cta-card-icon bg-purple-light rounded-circle p-3 me-3">
                      <i className="fas fa-headset text-purple"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">24/7 Support</h6>
                      <p className="mb-0 small text-muted">Always here when you need us</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="cta-card-icon bg-purple-light rounded-circle p-3 me-3">
                      <i className="fas fa-shield-alt text-purple"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Enterprise Security</h6>
                      <p className="mb-0 small text-muted">Your data is always protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Work Process - Enhanced styling */}
      <section className="work-process-section py-5 bg-light position-relative">
        <div className="process-bg-shape shape-1"></div>
        <div className="process-bg-shape shape-2"></div>
        
        <Container>
          <div className="text-center mb-5">
            <div className="subtitle-badge mb-3">
              <span className="bg-purple-light text-purple px-3 py-2 rounded-pill">OUR METHODOLOGY</span>
            </div>
            <h2 className="section-title display-5 fw-bold mb-2">How We <span className="text-purple">Work</span></h2>
            <p className="section-subtitle text-muted mx-auto" style={{maxWidth: "700px"}}>
              Our proven four-step process ensures consistent results and client satisfaction
            </p>
          </div>
          
          <div className="process-timeline position-relative">
            {[
              { 
                number: '01', 
                title: 'Discovery', 
                description: 'We start by understanding your business needs, challenges, and goals to lay a solid foundation.',
                icon: <i className="fas fa-search-plus"></i>
              },
              { 
                number: '02', 
                title: 'Analysis', 
                description: 'Our experts analyze your requirements and develop a comprehensive strategic plan.',
                icon: <i className="fas fa-chart-line"></i>
              },
              { 
                number: '03', 
                title: 'Implementation', 
                description: 'We execute the plan with precision, focusing on quality, efficiency, and communication.',
                icon: <i className="fas fa-cogs"></i>
              },
              { 
                number: '04', 
                title: 'Optimization', 
                description: 'We continuously monitor and refine the solution to ensure long-term success.',
                icon: <i className="fas fa-rocket"></i>
              }
            ].map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-card">
                  <div className="process-number">
                    <span>{step.number}</span>
                  </div>
                  <div className="process-icon">
                    {step.icon}
                  </div>
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-description">{step.description}</p>
                  
                  {index < 4 && (
                    <div className="process-connector">
                      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#7c3aed"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials - Enhanced styling */}
      <section className="testimonials-section py-5">
        <Container>
          <div className="text-center mb-5">
            <div className="subtitle-badge mb-3">
              <span className="bg-purple-light text-purple px-3 py-2 rounded-pill">CLIENT FEEDBACK</span>
            </div>
            <h2 className="section-title display-5 fw-bold mb-2 text-white">What Our Clients <span className="text-purple">Say</span></h2>
            <p className="section-subtitle text-lead mx-auto" style={{maxWidth: "700px"}}>
              Trusted by businesses of all sizes to deliver exceptional IT solutions
            </p>
          </div>
          
          <Row className="g-4">
            {[
              {
                name: 'Jackline Techie',
                role: 'CEO at Kormola',
                content: 'The team delivered exceptional results that exceeded our expectations. Their technical expertise, attention to detail, and commitment to our success made them the perfect partner for our digital transformation journey.',
                rating: 5,
                image: 'https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg'
              },
              {
                name: 'Abraham Khalil',
                role: 'CTO at Rimasu',
                content: 'Working with this team transformed our business operations. They took the time to understand our unique challenges and developed custom solutions that perfectly addressed our needs. Their ongoing support has been invaluable.',
                rating: 5,
                image: 'https://i.pinimg.com/736x/9d/e2/af/9de2af430635f9a97f64914a489a5f3a.jpg'
              }
            ].map((testimonial, index) => (
              <Col key={index} md={6}>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-rating mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="testimonial-quote">"{testimonial.content}"</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <div className="testimonial-badge">
                          <i className="fas fa-quote-right"></i>
                        </div>
                      </div>
                      <div className="testimonial-info">
                        <h6 className="testimonial-name">{testimonial.name}</h6>
                        <p className="testimonial-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;