import React from 'react';
import { Link } from 'react-router-dom';
import { CarModel } from '../../models/CarsListModel';

type CarsViewProps = {
  cars: CarModel[]
};

const CarsListView = ({cars}: CarsViewProps) => {
  return (
    <>
      <div className='cars-list-view'>
        {cars?.map(car => (
          <div className='cars-list-view-info' key={car.stockNumber}>
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
    </>
  )
};

export default React.memo(CarsListView);
