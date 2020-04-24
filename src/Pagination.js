import React from 'react';
import { Nav } from 'react-bootstrap';
import './Pagination.css';

const Pagination = ({ photosPerPage, totalPhotos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Pagination;