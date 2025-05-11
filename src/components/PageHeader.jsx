import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <section className="page-header position-relative">
      <div className="page-header-bg"></div>
      <Container className="position-relative">
        <div className="text-center text-white py-5">
          <h1 className="display-4 fw-bold mb-4">{title}</h1>
          
          {breadcrumb && (
            <Breadcrumb className="justify-content-center">
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  {item.path ? (
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: item.path }} className="text-white">
                      {item.name}
                    </Breadcrumb.Item>
                  ) : (
                    <Breadcrumb.Item active className="text-purple-light">
                      {item.name}
                    </Breadcrumb.Item>
                  )}
                </React.Fragment>
              ))}
            </Breadcrumb>
          )}
        </div>
      </Container>
      
      <div className="page-header-shape-1"></div>
      <div className="page-header-shape-2"></div>
    </section>
  );
};

export default PageHeader;