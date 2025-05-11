import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Fernandes',
      role: 'Project Manager',
      image: '/api/placeholder/300/400',
      socials: ['facebook', 'twitter', 'linkedin', 'instagram']
    },
    {
      id: 2,
      name: 'Mary Crispy',
      role: 'Chief Expert',
      image: '/api/placeholder/300/400',
      socials: ['facebook', 'twitter', 'linkedin', 'instagram']
    },
    {
      id: 3,
      name: 'Henry Joshep',
      role: 'Product Manager',
      image: '/api/placeholder/300/400',
      socials: ['facebook', 'twitter', 'linkedin', 'instagram']
    },
    {
      id: 4,
      name: 'Sanjida Carlose',
      role: 'IT Consultant',
      image: '/api/placeholder/300/400',
      socials: ['facebook', 'twitter', 'linkedin', 'instagram']
    }
  ];

  return (
    <div>
      <PageHeader title="Team" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Team' }]} />
      
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-purple fw-semibold mb-3">TEAM MEMBER</h6>
            <h2 className="display-6 fw-bold">See Our Skilled Expert Team</h2>
          </div>

          <Row className="g-4">
            {teamMembers.map((member) => (
              <Col key={member.id} lg={3} md={6}>
                <Card className="team-card h-100 border-0 shadow-sm hover-lift">
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="card-img-top"
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white p-3 translate-y-100 opacity-0 transition-all">
                      <div className="d-flex justify-content-center gap-3">
                        {member.socials.map((social, index) => (
                          <a
                            key={index}
                            href="#"
                            className="btn btn-light btn-sm rounded-circle"
                            style={{width: '36px', height: '36px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                          >
                            <i className={`fab fa-${social} text-purple`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Card.Body className="text-center">
                    <h5 className="mb-1">
                      <Link to={`/team-details/${member.id}`} className="text-decoration-none text-dark hover-purple">
                        {member.name}
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">{member.role}</p>
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

export default Team;