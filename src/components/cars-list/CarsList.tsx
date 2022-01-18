import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CarsFilter, Loader } from '..';
import CarFilterModel from '../../models/CarFilterModel';
import CarQueryParamsModel from '../../models/CarQueryParamsModel';

import { useGetListOfCarsQuery } from '../../services/carsApi';

const { First, Last, Prev, Next, Item } = Pagination;

const CarsList = () => {

  const [pageCount, setPageCount] = useState<number>(1);

  const carQueryParams: CarQueryParamsModel = {
    manufacturer: '',
    color: '',
    sort: 'asc',
    page: pageCount
  };

  const [carFilter, setCarFilter] = useState<CarFilterModel>({
    color: '',
    manufacturer: ''
  });

  const { data: carsList, isFetching, refetch } = useGetListOfCarsQuery({
    ...carQueryParams,
    color: carFilter.color,
    manufacturer: carFilter.manufacturer,
    page: pageCount
  });

  useEffect(() => {
    refetch();
  }, [carFilter, pageCount, refetch]);

  return (
    <>
      <Row>
        <Col md={4}>
          <CarsFilter carFilter={carFilter} setCarFilter={setCarFilter} />
        </Col>
        <Col md={8}>
          {isFetching ? <Loader /> : <>
            <div className='cars-view'>
              <h3 className='cars-view-heading'>Available Cars</h3>
              <p className='cars-view-info'>Showing {carsList?.cars?.length} of {carsList?.totalCarsCount} results</p>
              <div className='cars-view-list'>
                {carsList?.cars?.map(car => (
                  <div className='cars-view-list-info' key={car.stockNumber}>
                    <div className='cars-picture'>
                      <img src={car.pictureUrl} alt='Car' />
                    </div>
                    <div className='cars-info'>
                      <h3>{car.manufacturerName} {car.modelName}</h3>
                      <p>Stock # {car.stockNumber} - {car.mileage.number} {car.mileage.unit} - {car.fuelType} - {car.color}</p>
                      <Link to={`/cars/${car.stockNumber}`}>View details</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Pagination className='justify-content-center'>
              <First onClick={() => setPageCount(1)}>First</First>
              <Prev disabled={pageCount === 1} onClick={() => {
                const prevPage = pageCount - 1;
                setPageCount(prevPage);
              }}>Previous</Prev>
              <Item className='page-info'>Page {pageCount} of {carsList?.totalPageCount}</Item>
              <Next disabled={pageCount === carsList?.totalPageCount} onClick={() => {
                const nextPage = pageCount + 1;
                setPageCount(nextPage);
              }}>Next</Next>
              <Last onClick={() => setPageCount(carsList?.totalPageCount ?? 1)}>Last</Last>
            </Pagination>
          </>}
        </Col>
      </Row>
    </>
  )
};

export default CarsList;
