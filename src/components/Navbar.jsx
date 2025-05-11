import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Container, Nav, Navbar as BSNavbar, NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }});

  const services = [
    { name: 'Web Development', path: '/service-details/web-development' },
    { name: 'Business Development', path: '/service-details/business-development' },
    { name: 'Product Management', path: '/service-details/product-management' },
    { name: 'UI/UX Design', path: '/service-details/ui-ux-design' },
    { name: 'Cloud Services', path: '/service-details/cloud-services' },
  ];

  const pages = [
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Team Details', path: '/team-details/1' },
    { name: 'Projects', path: '/projects' },
    { name: 'Project Details', path: '/project-details/1' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Faq', path: '/faq' },
    { name: 'Error Page', path: '/error' },
  ];

  const blogs = [
    { name: 'Blog', path: '/blog' },
    { name: 'Blog Details', path: '/blog-details/1' },
  ];

  return (
    <header className={`fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar bg-purple py-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center text-white">
              <span className="me-4">
                <i className="fas fa-map-marker-alt me-2"></i> 54 NJ-12, Flemington, United States
              </span>
              <span className="me-4">
                <i className="fas fa-phone me-2"></i> +153-987-3657
              </span>
              <span>
                <i className="fas fa-envelope me-2"></i> info@webteck.com
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="text-white me-3">Follow Us On:</span>
              <div className="social-links">
                <a href="#" className="text-white me-2"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white me-2"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <BSNavbar expand="lg" className={`main-navbar py-3 ${scrolled ? 'navbar-scrolled' : ''}`}>
        <Container>
          <BSNavbar.Brand as={Link} to="/" className="fw-bold text-purple fs-2 d-flex align-items-center">
            <div className="bg-purple text-white p-2 rounded me-2" style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span className="fw-bold">W</span>
            </div>
            WebTeck
          </BSNavbar.Brand>

          <BSNavbar.Toggle aria-controls="navbarNav" />
          <BSNavbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={`fw-medium ${location.pathname === '/' ? 'active' : ''}`}
              >
                HOME
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/about" 
                className={`fw-medium ${location.pathname === '/about' ? 'active' : ''}`}
              >
                ABOUT US
              </Nav.Link>

              <NavDropdown 
                title={<span className="fw-medium">SERVICES <ChevronDown size={14} className="ms-1" /></span>} 
                id="services-dropdown"
                className="nav-dropdown"
              >
                {services.map((service, index) => (
                  <NavDropdown.Item key={index} as={Link} to={service.path} className="py-2">
                    {service.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown 
                title={<span className="fw-medium">PAGES <ChevronDown size={14} className="ms-1" /></span>} 
                id="pages-dropdown"
                className="nav-dropdown"
              >
                {pages.map((page, index) => (
                  <NavDropdown.Item key={index} as={Link} to={page.path} className="py-2">
                    {page.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown 
                title={<span className="fw-medium">BLOG <ChevronDown size={14} className="ms-1" /></span>} 
                id="blog-dropdown"
                className="nav-dropdown"
              >
                {blogs.map((blog, index) => (
                  <NavDropdown.Item key={index} as={Link} to={blog.path} className="py-2">
                    {blog.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={`fw-medium ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                CONTACT US
              </Nav.Link>
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </header>
  );
};

export default Navbar;