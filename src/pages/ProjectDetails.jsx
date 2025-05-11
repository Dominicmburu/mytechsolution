import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Calendar, MapPin, User, Download } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import '../assets/css/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();

  // Mock project data
  const projectData = {
    title: 'IT Consultancy',
    client: 'David Jackson',
    date: '20 Sep, 2023',
    location: '55 Main Address, USA',
    description: 'Interactively implement top-line ROI vis-a-vis 24/7 e-markets. Assertively communicate web-enabled catalysts for change through low-risk high-yield functionalities. Quickly optimize maintainable data for virtual interfaces. Phosfluorescently monetize cost effective ROI before leveraged sources. Holisticly envisioneer technically sound imperatives without just in time networks.',
    image: '/api/placeholder/800/400',
    challenge: {
      title: 'The challenge of project',
      description: 'Authoritatively scale business meta-services before client-based technologies. Collaboratively strategize synergistic scenarios rather than flexible action items. Continually deliver market positioning convergence and mission-critical infrastructures.',
      points: [
        'It is a long established fact that reader will',
        'There are many variations of passages',
        'All the Lorem Ipsum generators',
        'search for lorem ipsum will uncover many',
        'injected humour words which',
        'There are many variations of passages of'
      ]
    },
    result: {
      title: 'The result of project',
      description: 'Objectively utilize client-based e-services after corporate niche markets. Dynamically morph compelling channels vis-a-vis multifunctional interfaces. Credibly administrate wireless opportunities after B2B materials. Phosfluorescently engineer flexible "outside the box" thinking through process-centric web-services. Progressively target multidisciplinary.'
    }
  };

  return (
    <div>
      <PageHeader 
        title="Project Details" 
        breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Project Details' }]} 
      />
      
      <section className="py-5">
        <Container>
          <Row>
            {/* Main Content */}
            <Col lg={8}>
              <div className="project-content">
                <div className="project-main-image">
                  <img 
                    src={projectData.image} 
                    alt={projectData.title} 
                    className="img-fluid"
                  />
                </div>
                
                <h2>{projectData.title}</h2>
                <p className="text-muted mb-5">{projectData.description}</p>

                <div className="mb-5">
                  <h3>{projectData.challenge.title}</h3>
                  <p className="text-muted mb-4">{projectData.challenge.description}</p>
                  <ul className="challenge-list">
                    {projectData.challenge.points.map((point, index) => (
                      <li key={index}>
                        <div className="challenge-bullet"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <h3>{projectData.result.title}</h3>
                  <p className="text-muted">{projectData.result.description}</p>
                </div>

                <div className="result-images">
                  <div className="result-image">
                    <img src="/api/placeholder/400/300" alt="Project result 1" />
                  </div>
                  <div className="result-image">
                    <img src="/api/placeholder/400/300" alt="Project result 2" />
                  </div>
                </div>
              </div>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className="project-info-card">
                <h4 className="fw-bold mb-4">Project Information</h4>
                
                <div className="info-item">
                  <div className="info-icon">
                    <User />
                  </div>
                  <div className="info-content">
                    <p className="info-label">Clients:</p>
                    <p className="info-value">{projectData.client}</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Calendar />
                  </div>
                  <div className="info-content">
                    <p className="info-label">Date:</p>
                    <p className="info-value">{projectData.date}</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin />
                  </div>
                  <div className="info-content">
                    <p className="info-label">Address:</p>
                    <p className="info-value">{projectData.location}</p>
                  </div>
                </div>

                <div className="download-section">
                  <h5 className="fw-bold mb-3">Download Brochure</h5>
                  <button className="download-btn download-btn-primary">
                    <Download size={20} /> DOWNLOAD PDF
                  </button>
                  <button className="download-btn download-btn-secondary">
                    <Download size={20} /> DOWNLOAD DOC
                  </button>
                </div>
              </div>

              <div className="help-card">
                <h3>You Need Help?</h3>
                <p>Contact us for more information about our projects</p>
                <button className="help-btn">
                  GET A QUOTE
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProjectDetails;