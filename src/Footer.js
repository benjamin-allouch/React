import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import './Footer.css'

function Footer() {  
    return (  
      <Router> 
        <div className="footer py-5 bg-dark">
        <Container-fluid>
          <Row>

            <Col>
              <Nav.Link
               className="footer-link"
               href="/"
              >
              Home
              </Nav.Link>          
            </Col>

            <Col>
              <Nav.Link
               className="footer-link"
               href="/photos"
              >
              Photos
              </Nav.Link>          
            </Col>

            <Col>
              <Nav.Link 
              className="footer-link"
              href="/location"
              >
              Location
              </Nav.Link>          
            </Col>

            <Col>
              <Nav.Link 
              className="footer-link" 
              href="/riders"
              >
              Riders
              </Nav.Link>          
            </Col>

            <Col>
              <Nav.Link 
              className="footer-link"
              href="/contact"
              >
              Contact
              </Nav.Link>          
            </Col>

          </Row>
        
          <Row>
            <Col>
            <div className="copyright">
              <p>
                &copy;{new Date().getFullYear()} Boulder Bike Inc. All Rights Reserved
              </p>
              </div>

              </Col>
           
          </Row>
        </Container-fluid> 
        </div>   
      </Router>        
    );
  }

export default Footer;





