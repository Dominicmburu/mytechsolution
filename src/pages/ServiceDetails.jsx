import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Check, Download } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import '../assets/css/ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const [activeAccordion, setActiveAccordion] = useState(0);
  
  // Mock service data - in a real app, this would come from an API
  const serviceData = {
    'web-development': {
      title: 'Web Development',
      description: 'Globally optimize highly efficient solution whereas open-source application. Completely strategize quality internal or "organic" sources for virtual e-business. Phosfluorescently re-engineer enterprise markets vis-a-vis value-added networks. Seamlessly restore inexpensive e-markets vis-a-vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic.',
      image: '/api/placeholder/800/400',
      benefits: [
        {
          title: 'Flexible Solutions',
          description: 'Completely grow multimedia based content before global scenarios.'
        },
        {
          title: '24/7 Unlimited Support',
          description: 'Completely grow multimedia based content before global scenarios.'
        }
      ],
      features: [
        'Up am intention on dependent questions',
        'Surrounded affronting favourable',
        'Sed ut perspiciatis unde omnis iste natus',
        'Special Careness Risk Free',
        'Bibend auctor nisi elit volume are beguiled'
      ]
    }
  };

  const service = serviceData[id] || serviceData['web-development'];

  const faqs = [
    {
      question: 'Where can I get analytics help?',
      answer: 'Synergistically evisculate ubiquitous niches whereas holistic resources. Assertively evolve prospective methods of empowerment before diverse web-readiness. Seamlessly incentivize market-driven schemas rather than clicks-and-mortar benefits.'
    },
    {
      question: 'How long should a business plan be?',
      answer: 'A typical business plan should be between 15-20 pages, including all essential sections such as executive summary, market analysis, financial projections, and marketing strategy.'
    },
    {
      question: 'How To Choose A Good QA Consultant?',
      answer: 'Look for experience, certifications, and good communication skills. Check their portfolio, client testimonials, and ensure they understand your industry and specific quality assurance needs.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div>
      <PageHeader 
        title="Service Details" 
        breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Service Details' }]} 
      />
      
      <section className="py-5">
        <Container>
          <Row>
            {/* Sidebar */}
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="services-list-card">
                <h4 className="fw-bold mb-4">All Services</h4>
                <ul className="services-list">
                  {[
                    'Web Development',
                    'Business Development',
                    'Product Management',
                    'UI/UX Design',
                    'Cloud Services'
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="#" className="d-flex justify-content-between align-items-center">
                        <span>{item}</span>
                        <span className="arrow">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="help-card">
                <h3>You Need Help?</h3>
                <p>Contact us for more information</p>
                <button className="help-btn">
                  GET A QUOTE
                </button>
              </div>
            </Col>

            {/* Main Content */}
            <Col lg={8}>
              <div className="service-content">
                <div className="service-main-image">
                  <img src={service.image} alt={service.title} className="img-fluid" />
                </div>
                
                <h2>{service.title}</h2>
                <p className="text-muted mb-5">{service.description}</p>

                <div className="features-section mb-5">
                  <h3 className="fw-bold mb-4">We Serve The Best Work</h3>
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <div className="feature-check">
                          <Check />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Row className="mb-5">
                  {service.benefits.map((benefit, index) => (
                    <Col md={6} key={index} className="mb-3">
                      <div className="benefit-card">
                        <h5>{benefit.title}</h5>
                        <p>{benefit.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>

                <div className="download-section mb-5">
                  <h3 className="fw-bold mb-3">Download Brochure</h3>
                  <div className="download-buttons">
                    <button className="download-btn download-btn-primary">
                      <Download size={20} /> DOWNLOAD PDF
                    </button>
                    <button className="download-btn download-btn-secondary">
                      <Download size={20} /> DOWNLOAD DOC
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <Container>
          <h3 className="fw-bold mb-4">Questions About Service</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeAccordion === index ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServiceDetails;