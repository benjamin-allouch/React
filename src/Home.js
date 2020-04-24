import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import DateCountdown from 'react-date-countdown-timer';
import './Home.css';

function Home() {
  return (
  <Container-fluid style={{backgroundColor: "whitesmoke"}}> 
    <Row>
      <Col lg={9} md={7}>
      <Image    
        className="img-fluid"     
        src="assets/home-pic.jpg"
        alt="Bike race in Boulder"
        />  
      </Col> 

      <Col lg={3} md={5}>
      <div class="countdown">
        <h2 class="countdown-title">Be ready for the race!</h2> 
        <h2 class="countdown-date">01.10.2020</h2>     
        <div class="countdown-timer"><DateCountdown dateTo='October 1, 2020 09:00:00 GMT-07:00' callback={()=>alert('Hello')}  /></div>
      </div> 
      </Col>    
    </Row>
  </Container-fluid>
    )    
  }

export default Home;

