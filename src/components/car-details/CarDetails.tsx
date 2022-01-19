import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import CarDetailsModel from '../../models/CarDetailsModel';
import { CarModel } from '../../models/CarsListModel';

import carsApi from '../../services/carServiceApiHandler';

const { Body } = Card;

const CarDetails = () => {

  const navigate = useNavigate();

  const initialCarDetails: CarDetailsModel = {
    car: new CarModel()
  };

  const { stockNumber } = useParams<string>();

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [carDetails, setCarDetails] = useState<CarDetailsModel>(initialCarDetails);

  useEffect(() => {
    const getCarsList = async () => {
      try {
        setIsFetching(true);
        const carInfo = await carsApi.getCarDetails(stockNumber || '');
        console.log(carInfo);
        setIsFetching(false);
        setCarDetails(carInfo);
      } catch (error) {
        console.log(error);
        navigate('/page-not-found');
      }
    }
    getCarsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stockNumber]);

  return (
    <>
      <section className='car-details-image'></section>
      <main className='main'>
        <div className='details-wrapper'>
          <Container className='p-0'>
            <Row className='m-0'>
              {!isFetching && <>
                <Col md={8} className='p-0'>
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
              </>}
            </Row>
          </Container>
        </div>
      </main>
    </>
  )
};

export default CarDetails;
