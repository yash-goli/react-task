import React, { useState, useReducer } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { CarsFilter, Loader, CarsListView } from '..';
import CarFilterModel from '../../models/CarFilterModel';
import pageCountReducer from '../../reducer/pageCountReducer';
import { useCars } from '../../hooks';
import CarsPagination from '../CarsPagination/CarsPagination';

const CarsSearchView = () => {  
  const [carFilter, setCarFilter] = useState<CarFilterModel>({
    color: '',
    manufacturer: ''
  });

  const [page, dispatch] = useReducer(pageCountReducer, {count: 1});

  const [carsList, isFetching] = useCars(carFilter, page.count);

  return (
    <>
      <main className='main'>
        <Container className='h-100'>
          <Row>
            <Col md={4}>
              <CarsFilter setCarFilter={setCarFilter} />
            </Col>
            <Col md={8}>
              {isFetching ? <><Loader /><Loader /><Loader /></> : <>
                <div className='cars-view'>
                  <h3 className='cars-view-heading'>Available Cars</h3>
                  <p className='cars-view-info' data-testid='carsCount'>Showing {carsList?.cars?.length} of {carsList?.totalCarsCount} results</p>
                  <CarsListView cars={carsList?.cars} />
                </div>

                <CarsPagination totalPageCount={carsList?.totalPageCount} page={page} dispatch={dispatch} />
              </>}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
};

export default CarsSearchView;
