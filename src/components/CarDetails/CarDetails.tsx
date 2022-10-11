import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { carDetailsSelector } from '../../recoil/carDetails';

const { Body } = Card;

const CarDetails = () => {
  const { stockNumber } = useParams<string>();

  const carDetails = useRecoilValue(carDetailsSelector(stockNumber));

  return (
    <>
      <section className='car-details-image'></section>
        <main className='main'>
          <div className='details-wrapper'>
            <Container className='p-0'>
              <Row className='m-0'>
                <Col md={8} className='p-0' role='article'>
                  <h2 className='mb-4'>{carDetails?.car?.manufacturerName} {carDetails?.car?.modelName}</h2>
                  <p className='mb-4 fs-lg'>Stock # {carDetails?.car?.stockNumber} - {carDetails?.car?.mileage?.number} {carDetails?.car?.mileage?.unit} - {carDetails?.car?.fuelType} - {carDetails?.car?.color}</p>
                  <p>
                    This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to weather conditions.
                  </p>
                </Col>
                <Col md={4} className='p-0'>
                  <Card>
                    <Body>
                      <p>If you like this car, click the button and save it in your collection of favourite items.</p>
                      <Button variant='primary' type='button' className='float-end'>
                        Save
                      </Button>
                    </Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
    </>
  )
};

export default CarDetails;
