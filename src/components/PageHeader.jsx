import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, breadcrumb, backgroundImage }) => {
  return (
    <section className="page-header position-relative">
      {/* Background with optional image */}
      <div 
        className="page-header-bg"
        style={backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5
        } : {}}
      ></div>
      
      <Container className="position-relative">
        <div className="text-center text-white py-5">
          <h1 className="display-4 fw-bold mb-4">{title}</h1>
          
          {breadcrumb && breadcrumb.length > 0 && (
            <Breadcrumb className="justify-content-center">
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  {item.path ? (
                    <Breadcrumb.Item 
                      linkAs={Link} 
                      linkProps={{ to: item.path }} 
                      className="text-white"
                    >
                      {item.name}
                    </Breadcrumb.Item>
                  ) : (
                    <Breadcrumb.Item active className="text-purple-light">
                      {item.name}
                    </Breadcrumb.Item>
                  )}
                  
                  {/* Custom separator between items */}
                  {index < breadcrumb.length - 1 && (
                    <ChevronRight size={14} className="mx-2 text-white-50" />
                  )}
                </React.Fragment>
              ))}
            </Breadcrumb>
          )}
        </div>
      </Container>
      
      {/* Decorative shapes (preserved from original) */}
      <div className="page-header-shape-1"></div>
      <div className="page-header-shape-2"></div>
    </section>
  );
};

export default PageHeader;