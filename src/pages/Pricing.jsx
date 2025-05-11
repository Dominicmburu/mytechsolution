import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Silver Package',
      description: 'Pricing plan for IT Solution company',
      price: '$199.00',
      period: '/Per Month',
      features: [
        '30 Days Trial Features',
        'Unlimited Features',
        'Multi-Language Content',
        'Data backup and recovery',
        'Synced To Cloud Database'
      ],
      isPopular: false
    },
    {
      name: 'Gold Package',
      description: 'Pricing plan for IT Solution company',
      price: '$299.00',
      period: '/Per Month',
      features: [
        '30 Days Trial Features',
        'Unlimited Features',
        'Multi-Language Content',
        'Data backup and recovery',
        'Synced To Cloud Database'
      ],
      isPopular: true
    },
    {
      name: 'Platinum Package',
      description: 'Pricing plan for IT Solution company',
      price: '$399.00',
      period: '/Per Month',
      features: [
        '30 Days Trial Features',
        'Unlimited Features',
        'Multi-Language Content',
        'Data backup and recovery',
        'Synced To Cloud Database'
      ],
      isPopular: false
    }
  ];

  return (
    <div>
      <PageHeader title="Pricing" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Pricing' }]} />
      
      {/* Pricing Plans */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">OUR PRICING</h6>
            <h2 className="display-6 fw-bold">Choose Your Perfect Plan</h2>
          </div>

          <Row className="g-4">
            {plans.map((plan, index) => (
              <Col key={index} lg={4}>
                <Card className={`h-100 ${plan.isPopular ? 'border-purple bg-purple text-white' : ''} ${plan.isPopular ? 'scale-105' : ''}`}>
                  <Card.Body className="p-4">
                    {plan.isPopular && (
                      <div className="text-center mb-4">
                        <span className="badge bg-warning text-dark px-3 py-2">
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                    
                    <h3 className={`h4 mb-2 ${plan.isPopular ? 'text-white' : ''}`}>
                      {plan.name}
                    </h3>
                    <p className={`mb-4 ${plan.isPopular ? 'text-purple-light' : 'text-muted'}`}>
                      {plan.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className={`display-6 fw-bold ${plan.isPopular ? 'text-white' : 'text-purple'}`}>
                        {plan.price}
                      </span>
                      <span className={`${plan.isPopular ? 'text-purple-light' : 'text-muted'}`}>
                        {plan.period}
                      </span>
                    </div>

                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="mb-3 d-flex align-items-center">
                          <Check className={`me-3 ${plan.isPopular ? 'text-warning' : 'text-purple'}`} size={20} />
                          <span className={plan.isPopular ? 'text-white' : ''}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.isPopular ? 'light' : 'purple'} 
                      className="w-100 py-3"
                    >
                      PURCHASE NOW →
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-purple text-white">
        <Container className="text-center">
          <h6 className="text-purple-light fw-semibold mb-3">CONTACT US</h6>
          <h2 className="display-6 fw-bold mb-4">Need Any Kind Of IT Solution For Your Business?</h2>
          <Button as={Link} to="/contact" variant="light" size="lg" className="text-purple fw-bold">
            GET IN TOUCH
          </Button>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">CUSTOMER FEEDBACK</h6>
            <h2 className="display-6 fw-bold">What Happy Clients Says About Us?</h2>
          </div>

          <Row className="g-4">
            {[
              {
                name: 'Jackline Techie',
                role: 'CEO at Kormola',
                image: '/api/placeholder/80/80',
                content: 'Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.',
                rating: 5
              },
              {
                name: 'Abraham Khalil',
                role: 'CEO at Rimasu',
                image: '/api/placeholder/80/80',
                content: 'Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Col key={index} md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="rounded-circle me-3" 
                        width="60" 
                        height="60"
                      />
                      <div>
                        <h5 className="mb-0">{testimonial.name}</h5>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                      <div className="ms-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-warning">⭐</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted mb-0">{testimonial.content}</p>
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

export default Pricing;