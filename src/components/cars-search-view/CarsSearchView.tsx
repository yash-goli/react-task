import React, { useState, useReducer } from 'react';
import { Row, Col, Pagination, Container } from 'react-bootstrap';
import { CarsFilter, Loader, CarsListView } from '..';
import CarFilterModel from '../../models/CarFilterModel';
import pageCountReducer, { PaginationEnum } from '../../reducer/pageCountReducer';
import { useColors, useManufacturers, useCars } from '../../hooks';

const { First, Last, Prev, Next, Item } = Pagination;

const CarsSearchView = () => {  
  const [carFilter, setCarFilter] = useState<CarFilterModel>({
    color: '',
    manufacturer: ''
  });

  const [page, dispatch] = useReducer(pageCountReducer, {count: 1});

  const colors = useColors();

  const manufacturers = useManufacturers();

  const [carsList, isFetching] = useCars(carFilter, page.count);

  return (
    <>
      <main className='main'>
        <Container className='h-100'>
          <Row>
            <Col md={4}>
              <CarsFilter colors={colors} manufacturers={manufacturers} setCarFilter={setCarFilter} />
            </Col>
            <Col md={8}>
              {isFetching ? <><Loader /><Loader /><Loader /></> : <>
                <div className='cars-view'>
                  <h3 className='cars-view-heading'>Available Cars</h3>
                  <p className='cars-view-info' data-testid='carsCount'>Showing {carsList?.cars?.length} of {carsList?.totalCarsCount} results</p>
                  <CarsListView cars={carsList?.cars} />
                </div>

                <Pagination className='justify-content-center'>
                  <First onClick={() => dispatch({type: PaginationEnum.FIRST})}>First</First>
                  <Prev disabled={page.count === 1} onClick={() => {dispatch({type: PaginationEnum.PREVIOUS})}}>Previous</Prev>
                  <Item className='page-info' data-testid='carsPageCount'>Page {page.count} of {carsList?.totalPageCount}</Item>
                  <Next disabled={page.count === carsList?.totalPageCount} onClick={() => {dispatch({type: PaginationEnum.NEXT})}}>Next</Next>
                  <Last onClick={() => {dispatch({type: PaginationEnum.LAST, lastPage: carsList?.totalPageCount})}}>Last</Last>
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
