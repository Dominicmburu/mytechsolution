import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Container, Button } from 'react-bootstrap';

const Error404 = () => {
  return (
    <div>
      <PageHeader title="404 PAGE" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Error 404' }]} />
      
      <section className="py-5">
        <Container className="text-center">
          <div className="mb-5">
            <img 
              src="/api/placeholder/500/400" 
              alt="404 Error" 
              className="img-fluid mb-4"
            />
          </div>
          
          <h2 className="display-1 fw-bold text-purple mb-4">ERROR 404</h2>
          <h3 className="display-6 fw-bold mb-4">Page Not Found</h3>
          <p className="lead text-muted mb-5">
            Were sorry The page you are looking for on longer exists.
          </p>
          
          <Button as={Link} to="/" variant="purple" size="lg">
            ← RETURN TO HOME
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Error404;