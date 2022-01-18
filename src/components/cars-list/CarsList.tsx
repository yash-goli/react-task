import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CarsFilter } from '..';
import CarFilterModel from '../../models/CarFilterModel';
import CarQueryParamsModel from '../../models/CarQueryParamsModel';
import CarsListModel, { CarModel } from '../../models/CarsListModel';

import { useGetListOfCarsQuery } from '../../services/carsApi';

const CarsList = () => {

  const carQueryParams: CarQueryParamsModel = {
    manufacturer: '',
    color: '',
    sort: 'asc',
    page: 1
  };

  const carListInitialData = {
    cars: [],
    totalCarsCount: 0,
    totalPageCount: 0
  };

  const [carFilter, setCarFilter] = useState<CarFilterModel>({
    color: '',
    manufacturer: ''
  });

  const [cars, setCars] = useState<CarsListModel>(carListInitialData);

  const { data: carsList, refetch } = useGetListOfCarsQuery({
    ...carQueryParams, 
    color: carFilter.color, 
    manufacturer: carFilter.manufacturer
  });

  useEffect(() => {
    refetch();
  }, [carFilter]);

  return (
    <>
      <Row>
        <Col md={4}>
          <CarsFilter carFilter={carFilter} setCarFilter={setCarFilter}/>
        </Col>
        <Col md={8}>
          <div className='cars-view'>
            <h3 className='cars-view-heading'>Available Cars</h3>
            <p className='cars-view-info'>Showing {carsList?.cars?.length} of {carsList?.totalPageCount} results</p>
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
        </Col>
      </Row>
    </>
  )
};

export default CarsList;
