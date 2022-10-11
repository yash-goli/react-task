import React from 'react';
import { CarsList } from '..';
import CarsPagination from '../CarsPagination/CarsPagination';
import { useRecoilValue } from 'recoil';
import { carListSelector } from '../../recoil/carList';

const CarsView = () => {
  const carsList = useRecoilValue(carListSelector);

  return (
    <>
      <div className='cars-view'>
        <h3 className='cars-view-heading'>Available Cars</h3>
        <p className='cars-view-info' data-testid='carsCount'>Showing {carsList?.cars?.length} of {carsList?.totalCarsCount} results</p>
        <CarsList cars={carsList?.cars} />
      </div>

      <CarsPagination totalPageCount={carsList?.totalPageCount} />
    </>
  );
}

export default CarsView;