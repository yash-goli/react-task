import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CarsFilter } from '..';

import { useGetListOfCarsQuery } from '../../services/carsApi';

const CarsList = () => {

  const { data: carsList } = useGetListOfCarsQuery({
    manufacturer: '',
    color: '',
    sort: 'asc',
    page: 1
  });

  return (
    <>
      <Row>
        <Col md={4}>
          <CarsFilter />
        </Col>
        <Col md={8}>
          <div className='cars-list'>
            <h3 className='cars-list-heading'>Available Cars</h3>
            <p className='cars-list-info'>Showing {carsList?.cars?.length} of {carsList?.totalPageCount} results</p>
          </div>
        </Col>
      </Row>
    </>
  )
};

export default CarsList;
