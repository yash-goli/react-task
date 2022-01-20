import React from 'react';
import { Link } from 'react-router-dom';
import { CarModel } from '../../models/CarsListModel';

type CarsViewProps = {
  cars: CarModel[]
};

const CarsListView = ({cars}: CarsViewProps) => {
  return (
    <>
      <div className='cars-list-view' role='list'>
        {cars?.map(car => (
          <div className='cars-list-view-info' role='listitem' key={car.stockNumber}>
            <div className='cars-picture' role='listbox'>
              <img src={car.pictureUrl} alt='Car' />
            </div>
            <div className='cars-info' role='banner'>
              <h3 role='heading'>{car.manufacturerName} {car.modelName}</h3>
              <p data-testid='carSpecs'>Stock # {car.stockNumber} - {car.mileage.number} {car.mileage.unit} - {car.fuelType} - {car.color}</p>
              <Link to={`/cars/${car.stockNumber}`} role='link'>View details</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
};

export default React.memo(CarsListView);
