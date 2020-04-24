import React, { Component } from 'react';
import { Button, Col, Form, Image, Jumbotron, Row } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';
import './Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this)
    this.handleSend = this.handleSend.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)

    this.state = {
       isVerified: false
    }
  }

    recaptchaLoaded() {
      console.log('Captcha successfully loaded')
    }

    handleSend() {
      if (this.state.isVerified) {
        alert('Your message has been sent!')
      } else {
        alert('Please reCaptcha to verify that you are a human!')
      }
    }

    verifyCallback(response) {
      if (response) {
        this.setState({
          isVerified: true
        })
      }
    }
 
     render() {
      return (
      <Container-fluid> 
        <Row>
          <Col lg={6} xs={12}>        
            <Jumbotron style={{backgroundColor: "white"}}>
              <h2 className="contact-title">You have a question about the event ? Contact us !</h2>

              <Form>
         
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                       We'll never share your email with anyone else.
                      </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Row>
                 </Form.Group>

                  <Form.Group controlId="formBasicMessage">
                    <Form.Label>Your message</Form.Label>
                      <Form.Control as="textarea" rows="5" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label as="legend">
                     Can you say a bit more about yourself?
                    </Form.Label>

                      <Form.Check
                      type="radio"
                      label="I am a rider"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      />

                      <Form.Check
                      type="radio"
                      label="I am a spectator"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      />

                      <Form.Check
                      type="radio"
                      label="I am a partner of the event"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      />

                      <Form.Check
                      type="radio"
                      label="I want to cover the event as a media"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      />

                      <Form.Check
                      type="radio"
                      label="I am just curious"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      />  

                  </Form.Group>

                  <div className="recaptcha">
                  <Recaptcha
                  sitekey="6Lc5uscUAAAAACc4FehjvWui-Z1fqzHn6-iI7xxH"
                  render="explicit"
                  onloadCallback={this.recaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                  />
                  </div>

                  <div className="button-send">
                  <Button 
                  variant="success btn-lg" 
                  type="submit" 
                  href="mailto:contact@bouldertour.com" 
                  onClick={this.handleSend}>
                    Send your message
                  </Button>
                  </div>

              </Form>
            </Jumbotron>
          </Col>

          <Col lg={6} xs={12}>
            <Image    
            className="img-fluid"     
            src="assets/contact-pic.jpg"
            alt="Bike race in Boulder"
            />  
          </Col>

        </Row>
      </Container-fluid>
    );
   } 
  }


export default Contact;
