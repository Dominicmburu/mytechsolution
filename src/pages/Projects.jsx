import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'IT Consultancy',
      category: 'Technology',
      image: '/api/placeholder/400/300',
      description: 'Web development project for consulting firm'
    },
    {
      id: 2,
      title: 'Software Solutions',
      category: 'Development',
      image: '/api/placeholder/400/300',
      description: 'Custom software development'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      category: 'Marketing',
      image: '/api/placeholder/400/300',
      description: 'Complete digital marketing campaign'
    },
    {
      id: 4,
      title: 'SEO Optimization',
      category: 'Marketing',
      image: '/api/placeholder/400/300',
      description: 'Search engine optimization project'
    },
    {
      id: 5,
      title: 'Mobile App',
      category: 'Development',
      image: '/api/placeholder/400/300',
      description: 'Cross-platform mobile application'
    },
    {
      id: 6,
      title: 'Business Strategy',
      category: 'Consulting',
      image: '/api/placeholder/400/300',
      description: 'Business development strategy'
    },
    {
      id: 7,
      title: 'SaaS Platform',
      category: 'Technology',
      image: '/api/placeholder/400/300',
      description: 'Software as a Service platform'
    },
    {
      id: 8,
      title: 'Data Backup',
      category: 'Infrastructure',
      image: '/api/placeholder/400/300',
      description: 'Enterprise backup solution'
    },
    {
      id: 9,
      title: 'Cloud Migration',
      category: 'Cloud',
      image: '/api/placeholder/400/300',
      description: 'Cloud infrastructure migration'
    }
  ];

  return (
    <div>
      <PageHeader title="Projects" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Projects' }]} />
      
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col key={project.id} lg={4} md={6}>
                <Card className={`project-card h-100 shadow-sm ${isVisible ? 'animate-fade-in' : ''}`}>
                  <Link to={`/project-details/${project.id}`} className="text-decoration-none">
                    <div className="project-image-wrapper">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="project-image" 
                      />
                      <div className="project-corner"></div>
                      <Link to={`/project-details/${project.id}`} className="project-link">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                      <div className="project-overlay">
                        <span className="project-category">{project.category}</span>
                        <h5 className="project-title">{project.title}</h5>
                        <p className="project-description">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Projects;