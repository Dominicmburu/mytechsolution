import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { ArrowRight, Code, Palette, BarChart, Database, Cog, Brain, Settings, Cloud, HardDrive } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
      icon: Code,
      color: 'purple',
      path: '/service-details/web-development'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
      icon: Palette,
      color: 'purple',
      path: '/service-details/ui-ux-design'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
      icon: BarChart,
      color: 'purple',
      path: '/service-details/digital-marketing'
    },
    {
      id: 'business-analysis',
      title: 'Business Analysis',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
      icon: Database,
      color: 'purple',
      path: '/service-details/business-analysis'
    },
    {
      id: 'software-services',
      title: 'Software Services',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
      icon: Cog,
      color: 'purple',
      path: '/service-details/software-services'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
      icon: Brain,
      color: 'purple',
      path: '/service-details/machine-learning'
    },
    {
      id: 'it-management',
      title: 'IT Management',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
      icon: Settings,
      color: 'purple',
      path: '/service-details/it-management'
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
      icon: Cloud,
      color: 'purple',
      path: '/service-details/cloud-computing'
    },
    {
      id: 'backup-recovery',
      title: 'Backup & Recovery',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
      icon: HardDrive,
      color: 'purple',
      path: '/service-details/backup-recovery'
    }
  ];

  return (
    <div>
      <PageHeader title="Services" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Services' }]} />
      
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {services.map((service) => (
              <Col key={service.id} xl={4} md={6}>
                <Card className="h-100 border-0 shadow-sm hover-lift service-card">
                  <Card.Body className="p-4">
                    <div className="position-relative">
                      <div className="service-icon mb-4">
                        <service.icon size={32} className="text-purple" />
                      </div>
                      <h4 className="mb-3">{service.title}</h4>
                      <p className="text-muted mb-4">{service.description}</p>
                      <Link 
                        to={service.path} 
                        className="text-purple text-decoration-none fw-semibold d-inline-flex align-items-center hover-arrow"
                      >
                        READ MORE <ArrowRight className="ms-2" size={16} />
                      </Link>
                      <div className="position-absolute bottom-0 end-0 opacity-10">
                        <div className="purple-shape"></div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 cta-section position-relative overflow-hidden">
        <div className="cta-bg-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
        </div>
        <Container className="text-center position-relative">
          <h6 className="text-purple-light fw-semibold mb-3">
            <span className="bg-purple-light text-purple px-3 py-1 rounded-3 small">CONTACT US</span>
          </h6>
          <h2 className="display-5 fw-bold text-white mb-4">Need Any Kind Of IT Solution For</h2>
          <h3 className="display-6 fw-bold text-purple-light mb-5">Your Business?</h3>
          <Button 
            as={Link} 
            to="/contact" 
            variant="light" 
            size="lg" 
            className="fw-bold hover-lift"
          >
            GET IN TOUCH →
          </Button>
        </Container>
      </section>

      {/* Work Process */}
      <section className="py-5 bg-light position-relative">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">
              <span className="bg-purple-light text-purple px-3 py-1 rounded-3 small d-inline-block">WORK PROCESS</span>
            </h6>
            <h2 className="display-6 fw-bold">How To Work <span className="text-purple">It!</span></h2>
          </div>
          
          <Row className="g-4 position-relative process-timeline">
            {[
              { 
                number: '01', 
                title: 'Select a project', 
                description: 'Continue scale empowered metrics with cost effective innovation.',
                icon: '📋'
              },
              { 
                number: '02', 
                title: 'Project analysis', 
                description: 'Continue scale empowered metrics with cost effective innovation.',
                icon: '📊'
              },
              { 
                number: '03', 
                title: 'Plan Execute', 
                description: 'Continue scale empowered metrics with cost effective innovation.',
                icon: '⚙️'
              },
              { 
                number: '04', 
                title: 'Deliver result', 
                description: 'Continue scale empowered metrics with cost effective innovation.',
                icon: '📈'
              }
            ].map((step, index) => (
              <Col key={index} lg={3} md={6} className="process-step">
                <div className="text-center position-relative">
                  <div className="process-number bg-purple text-white rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto position-relative">
                    <span className="h3 mb-0 fw-bold">{step.number}</span>
                  </div>
                  <div className="process-icon mb-3">{step.icon}</div>
                  <h5 className="mb-3">{step.title}</h5>
                  <p className="text-muted small mb-0">{step.description}</p>
                  {index < 3 && (
                    <div className="process-arrow d-none d-lg-block">
                      <ArrowRight size={24} className="text-purple" />
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">
              <span className="bg-purple-light text-purple px-3 py-1 rounded-3 small d-inline-block">CUSTOMER FEEDBACK</span>
            </h6>
            <h2 className="display-6 fw-bold">What Happy Clients Says</h2>
            <h3 className="h4 text-purple">About Us?</h3>
          </div>
          
          <Row className="g-4">
            {[
              {
                name: 'Jackline Techie',
                role: 'CEO at Kormola',
                content: 'Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.',
                rating: 5,
                image: '/api/placeholder/80/80'
              },
              {
                name: 'Abraham Khalil',
                role: 'CEO at Rimasu',
                content: 'Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.',
                rating: 5,
                image: '/api/placeholder/80/80'
              }
            ].map((testimonial, index) => (
              <Col key={index} md={6}>
                <Card className="h-100 border-0 shadow-sm testimonial-card hover-lift">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-warning">⭐</span>
                      ))}
                    </div>
                    <p className="text-muted mb-4">"{testimonial.content}"</p>
                    <div className="d-flex align-items-center">
                      <div className="testimonial-avatar position-relative me-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="rounded-circle" 
                          width="60" 
                          height="60"
                        />
                        <div className="avatar-badge bg-purple text-white rounded-circle position-absolute bottom-0 end-0">
                          <span>66</span>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;