import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import './Photos.css'

class Photos extends Component {
  constructor() {
    super()  
    this.state = {
       pictures: [],
    };
  }
  
  componentDidMount(){
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=bikerace&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(pics){
      let bikePics = pics.photos.photo.map((pic) => {
        var linkPics = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <Image
          className="bikes-pics"
          src={linkPics}
          alt="Boulder Bike Race"
          />
        )
      })
      this.setState({pictures: bikePics});
    }.bind(this))
  }

  render() {
    return (
      <Container-fluid>        
        <h1 className="photos-page-title">Let's share some pictures to motivate us!</h1>
          <Col>
              {this.state.pictures}
          </Col>         
      </Container-fluid>
    );
  } 
}

export default Photos;
