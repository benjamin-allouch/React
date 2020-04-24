import React, { useState, useEffect } from 'react';
import Pics from './Pics';
import Pagination from './Pagination';
import { Container } from 'react-bootstrap';
import axios from'axios';
import './Photos.css';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(40);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);  

      const response = await axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=bikerace&boulderbikerace&format=json&nojsoncallback=1');
      var bikePics = response.data.photos.photo.map((pic, index) => {
        var linkPics = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
          return (
            {id: index, url: linkPics}
        )
     })
      setPhotos(bikePics);
      setLoading(false);
    };

    fetchPhotos();
  }, []);

  // Current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      <h1 className='text-primary mb-3 title'>My Photos</h1>
      <Pics photos={currentPhotos} loading={loading} />
      <Pagination
        photosPerPage={photosPerPage}
        totalPhotos={photos.length}
        paginate={paginate}
      />
    </Container>
  );
};


export default Photos;