import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Check, Download, ArrowRight, ChevronRight, Phone, Mail, Clock } from 'lucide-react';
import '../assets/css/ServiceDetails.css';
import PageHeader from '../components/PageHeader';

const ServiceDetails = () => {
  const { id } = useParams();
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const serviceData = {
    'web-development': {
      title: 'Web Development',
      description: 'Globally optimize highly efficient solutions whereas open-source applications. Completely strategize quality internal or "organic" sources for virtual e-business. Phosfluorescently re-engineer enterprise markets vis-a-vis value-added networks.',
      longDescription: 'Seamlessly restore inexpensive e-markets vis-a-vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic theme areas. Efficiently cultivate high standards in experiences with team driven core competencies. Conveniently scale ubiquitous technologies without intermandated convergence. Interactively predominate resource-leveling schemas without backward-compatible methods of empowerment.',
      image: 'https://i.pinimg.com/736x/90/f1/85/90f18507c913423081b12899624df151.jpg',
      icon: '💻',
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
        'Custom and responsive website development',
        'E-commerce platform development',
        'Progressive web app (PWA) development',
        'CMS integration and customization',
        'Web performance optimization'
      ],
      process: [
        {
          title: 'Requirement Analysis',
          description: 'We collaborate closely with you to understand your business goals, target audience, and specific needs.'
        },
        {
          title: 'Planning & Design',
          description: 'Our design team creates wireframes and visual mockups that align with your brand identity.'
        },
        {
          title: 'Development',
          description: 'Our developers build your website using the most appropriate technologies for your requirements.'
        },
        {
          title: 'Testing & Deployment',
          description: 'We thoroughly test your website and deploy it to your hosting environment.'
        }
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'Efficiently create user-centered design solutions that drive engagement and conversions. Our design process focuses on creating intuitive, accessible interfaces that delight users.',
      longDescription: 'Our UI/UX design services blend aesthetics with functionality to create digital experiences that users love. We take a research-driven approach to understand user needs, behaviors, and pain points, allowing us to design interfaces that are not only visually appealing but also highly usable and effective.',
      image: 'https://i.pinimg.com/736x/50/c3/1a/50c31ababcbbd1a5c041c08914c564d9.jpg',
      icon: '🎨',
      benefits: [
        {
          title: 'User-Centered Design',
          description: 'We put users at the heart of every design decision.'
        },
        {
          title: 'Conversion-Focused',
          description: 'Our designs are optimized to drive business goals and conversions.'
        }
      ],
      features: [
        'User research and persona development',
        'Information architecture',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing and optimization'
      ],
      process: [
        {
          title: 'Research',
          description: 'We conduct user research to understand your target audience and their needs.'
        },
        {
          title: 'Ideation',
          description: 'We brainstorm solutions and create wireframes to visualize the user journey.'
        },
        {
          title: 'Design',
          description: 'Our designers create high-fidelity mockups and interactive prototypes.'
        },
        {
          title: 'Testing',
          description: 'We validate designs through usability testing and refine based on feedback.'
        }
      ]
    },
    'cloud-services': {
      title: 'Cloud Services',
      description: 'Transforming businesses with scalable, secure, and cost-effective cloud solutions. Our cloud services help you leverage the full potential of cloud computing.',
      longDescription: "Our comprehensive cloud services enable businesses to migrate, optimize, and manage their infrastructure in the cloud. Whether you're looking to move your existing applications to the cloud, build cloud- native solutions, or optimize your current cloud environment, our team has the expertise to help you succeed.",
      image: "https://i.pinimg.com/736x/07/67/d7/0767d7388aebbbb4dab40d04deeb2109.jpg",
      icon: '☁️',
      benefits: [
        {
          title: 'Scalable Infrastructure',
          description: 'Easily scale resources up or down based on demand.'
        },
        {
          title: 'Cost Optimization',
          description: 'Reduce infrastructure costs with pay-as-you-go pricing models.'
        }
      ],
      features: [
        'Cloud migration and strategy',
        'Cloud infrastructure design and implementation',
        'Serverless application development',
        'Cloud security and compliance',
        'DevOps and CI/CD pipeline automation'
      ],
      process: [
        {
          title: 'Assessment',
          description: 'We evaluate your current infrastructure and identify migration opportunities.'
        },
        {
          title: 'Planning',
          description: 'We develop a comprehensive cloud migration or implementation strategy.'
        },
        {
          title: 'Implementation',
          description: 'Our team executes the migration or builds new cloud infrastructure.'
        },
        {
          title: 'Optimization',
          description: 'We continuously monitor and optimize your cloud environment for performance and cost.'
        }
      ]
    }
  };

  const service = serviceData[id] || serviceData['web-development'];

  const faqs = [
    {
      question: 'What is your development process?',
      answer: 'Our development process follows industry best practices, starting with requirement gathering, followed by planning and design, development, testing, deployment, and ongoing maintenance and support. We work collaboratively with our clients throughout the process to ensure their needs are met.'
    },
    {
      question: 'How long does a typical project take?',
      answer: "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements."
    },
    {
      question: 'Do you provide maintenance and support after launch?',
      answer: 'Yes, we offer ongoing maintenance and support packages to ensure your website or application continues to function optimally after launch. Our support packages include regular updates, security patches, performance monitoring, and technical support.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of technologies including React, Angular, Vue.js, Node.js, Python, PHP, WordPress, and various cloud platforms such as AWS, Google Cloud, and Microsoft Azure. We select the most appropriate technology stack based on your project requirements.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const allServices = [
    { name: 'Web Development', path: '/service-details/web-development' },
    { name: 'UI/UX Design', path: '/service-details/ui-ux-design' },
    { name: 'Digital Marketing', path: '/service-details/digital-marketing' },
    { name: 'Cloud Services', path: '/service-details/cloud-services' },
    { name: 'Software Development', path: '/service-details/software-development' },
  ];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="service-details-page">
      <PageHeader
        title="Our Services Details"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Services Details' }
        ]}
        backgroundImage="https://i.pinimg.com/736x/71/12/9e/71129e5a8e8d06536d17a5d914409a1b.jpg"
      />

      {/* Main Content Section */}
      <section className="py-5">
        <Container>
          <Row>
            {/* Sidebar */}
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="services-list-card mb-4">
                <h4 className="fw-bold mb-4">All Services</h4>
                <ul className="services-list">
                  {allServices.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className={`d-flex justify-content-between align-items-center ${item.name === service.title ? 'active' : ''}`}
                      >
                        <span>{item.name}</span>
                        <span className="arrow"><ChevronRight size={18} /></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="help-card">
                <div className="help-icon">{service.icon}</div>
                <h3>Need Expert Help?</h3>
                <p>Contact us for a free consultation about your project</p>
                <Link to="/contact" className="help-btn">
                  GET A QUOTE
                </Link>
              </div>
            </Col>

            {/* Main Content */}
            <Col lg={8}>
              <div className="service-content">
                <div className="service-main-image">
                  <img src={service.image} alt={service.title} className="img-fluid" />
                </div>

                {/* Tabs Navigation */}
                <div className="service-tabs mb-4">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                      >
                        Overview
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'process' ? 'active' : ''}`}
                        onClick={() => setActiveTab('process')}
                      >
                        Our Process
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`}
                        onClick={() => setActiveTab('faq')}
                      >
                        FAQs
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                  {/* Overview Tab */}
                  <div className={`tab-pane ${activeTab === 'overview' ? 'show active' : ''}`}>
                    <h2>{service.title}</h2>
                    <p className="text-muted mb-4">{service.description}</p>
                    <p className="text-muted mb-5">{service.longDescription}</p>

                    <div className="features-section mb-5">
                      <h3 className="fw-bold mb-4">Key Features</h3>
                      <ul className="features-list">
                        {service.features.map((feature, index) => (
                          <li key={index}>
                            <div className="feature-check">
                              <Check size={16} />
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
                      <h3 className="fw-bold mb-3">Download Resources</h3>
                      <div className="download-buttons">
                        <button className="download-btn download-btn-primary">
                          <Download size={18} /> SERVICE BROCHURE
                        </button>
                        <button className="download-btn download-btn-secondary">
                          <Download size={18} /> CASE STUDY
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Process Tab */}
                  <div className={`tab-pane ${activeTab === 'process' ? 'show active' : ''}`}>
                    <h2>Our {service.title} Process</h2>
                    <p className="text-muted mb-5">We follow a structured approach to deliver high-quality solutions that meet your business objectives.</p>

                    <div className="process-timeline">
                      {service.process.map((step, index) => (
                        <div key={index} className="process-step">
                          <div className="process-number">
                            <span>{index + 1}</span>
                          </div>
                          <div className="process-content">
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                          </div>
                          {index < service.process.length - 1 && (
                            <div className="process-connector"></div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="cta-box mt-5">
                      <h4>Ready to start your project?</h4>
                      <p>Contact us today to discuss how our {service.title} services can help your business grow.</p>
                      <Link to="/contact" className="btn btn-primary">
                        Contact Us <ArrowRight size={16} className="ms-2" />
                      </Link>
                    </div>
                  </div>

                  {/* FAQ Tab */}
                  <div className={`tab-pane ${activeTab === 'faq' ? 'show active' : ''}`}>
                    <h2>Frequently Asked Questions</h2>
                    <p className="text-muted mb-4">Find answers to common questions about our {service.title} services.</p>

                    <div className="faq-list">
                      {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeAccordion === index ? 'active' : ''}`}>
                          <button
                            className="faq-question"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeAccordion === index}
                            aria-controls={`faq-answer-${index}`}
                          >
                            <span>{faq.question}</span>
                            <span className="faq-icon">{activeAccordion === index ? '−' : '+'}</span>
                          </button>
                          <div
                            className="faq-answer"
                            id={`faq-answer-${index}`}
                            aria-hidden={activeAccordion !== index}
                          >
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="faq-more">
                      <p>Don't see your question here? We're happy to help with any other inquiries.</p>
                      <Link to="/contact" className="btn btn-outline-primary">
                        Ask a Question <ArrowRight size={16} className="ms-1" />
                      </Link>
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
export default ServiceDetails;


