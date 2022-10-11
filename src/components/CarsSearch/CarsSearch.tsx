import React, { Suspense } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { CarsFilter, Loader } from '..';
import CarsView from '../CarsView/CarsView';
import { ErrorBoundary } from '../../error/ErrorBoundary';

const CarsSearchView = () => {
  return (
    <>
      <main className='main'>
        <Container className='h-100'>
          <Row>
            <Col md={4}>
              <CarsFilter />
            </Col>
            <Col md={8}>
            <ErrorBoundary>
              <Suspense fallback={<><Loader /><Loader /><Loader /></>}>
                <CarsView />
              </Suspense>
              </ErrorBoundary>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
};

export default CarsSearchView;
