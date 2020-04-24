import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './Nav.css';

function NavBar() {   
    return (
        <Router>
          <Navbar collapseOnSelect expand="lg" bg="light">
            
            <Navbar.Brand href="/">
              <img 
                className="logo"
                src="assets/logo.png"
                width="100%"
                height="100%"
                alt="Logo Boulder Bike Race"
                />
            </Navbar.Brand>

              <Navbar.Toggle  
                data-toggle="collapse" 
                data-target="#responsive-navbar-nav" 
                aria-controls="responsive-navbar-nav" 
                aria-expanded="false"  
                aria-label="Toggle navigation"
              />

                <Navbar.Collapse id="responsive-navbar-nav">                      
                  <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/photos">Photos</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/location">Location</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/riders">Riders</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                  </Nav>
               
                </Navbar.Collapse>  
          </Navbar>
        </Router>
    );        
  }        

export default NavBar;