import React, { useState, useEffect } from 'react';
import Pics from './Pics';
import Pagination from './Pagination';
import { Container, Image } from 'react-bootstrap';
import axios from'axios';

const PagiTest = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(40);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);  

      const response = await axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=bikerace&format=json&nojsoncallback=1');

      var bikePics = Object.keys(response.data.photos).map((pic, index) => {
        var linkPics = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
         return (
           <Image
            ulr={index}
            className="bikes-pics"
            src={linkPics}
            alt="Boulder Bike Race"
           />
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
      <h1 className='text-primary mb-3'>My Photos</h1>
      <Pics2 photos={currentPhotos} loading={loading} />
      <Pagination
        photosPerPage={photosPerPage}
        totalPhotos={photos.length}
        paginate={paginate}
      />
    </Container>
  );
};

export default PagiTest;