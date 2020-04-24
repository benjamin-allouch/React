import React from 'react';
import { Row } from 'react-bootstrap';
import './Pics.css';


const Pics = ({ photos, loading }) => {
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <Container-fluid>
      <Row>  
        
      {photos.map(photo => (  
           
          <img src={photo.url} className="bike-pics"></img>   
             
      ))}   
        
      </Row>
    </Container-fluid>
  );
};

export default Pics;

