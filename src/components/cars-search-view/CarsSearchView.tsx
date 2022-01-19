import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Pagination, Container } from 'react-bootstrap';
import { CarsFilter, Loader, CarsListView } from '..';
import carsApi from '../../services/carServiceApiHandler';
import CarFilterModel from '../../models/CarFilterModel';
import CarQueryParamsModel from '../../models/CarQueryParamsModel';
import CarColorsModel from '../../models/CarColorsModel';
import CarManufacturersModel from '../../models/CarManufacturersModel';
import CarsListModel from '../../models/CarsListModel';

const { First, Last, Prev, Next, Item } = Pagination;

const CarsSearchView = () => {

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

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [colors, setColors] = useState<CarColorsModel>({colors: []});

  const [manufacturers, setManufacturers] = useState<CarManufacturersModel>({manufacturers: []});

  const [carsList, setCarsList] = useState<CarsListModel>({cars: [], totalCarsCount: 0, totalPageCount: 0});

  const setCarFilterData = useCallback((carFilter: CarFilterModel) => {
      setCarFilter(carFilter);
  }, []);

  useEffect(() => {
    const getFilterData = async () => {
      try {
        const [carColors, carManufacturers] =  await Promise.all([carsApi.getCarColors(), carsApi.getCarManufacturers()]);
        setColors(carColors);
        setManufacturers(carManufacturers);
      } catch (error) {
        console.log(error);
      }
    }
    getFilterData();
  }, []);

  useEffect(() => {
    const getCarsList = async () => {
      try {
        setIsFetching(true);
        const listOfCarsAvailable =  await carsApi.getListOfCars({
          ...carQueryParams,
          color: carFilter.color,
          manufacturer: carFilter.manufacturer,
          page: pageCount
        });
        setIsFetching(false);
        setCarsList(listOfCarsAvailable);
      } catch (error) {
        console.log(error);
      }
    }
    getCarsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carFilter, pageCount]);

  return (
    <>
      <main className='main'>
        <Container className='h-100'>
          <Row>
            <Col md={4}>
              <CarsFilter colors={colors} manufacturers={manufacturers} setCarFilter={setCarFilterData} />
            </Col>
            <Col md={8}>
              {isFetching ? <><Loader /><Loader /><Loader /></> : <>
                <div className='cars-view'>
                  <h3 className='cars-view-heading'>Available Cars</h3>
                  <p className='cars-view-info'>Showing {carsList?.cars?.length} of {carsList?.totalCarsCount} results</p>
                  <CarsListView cars={carsList?.cars}/>
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
        </Container>
      </main>
    </>
  )
};

export default CarsSearchView;
