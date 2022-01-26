import { useState, useEffect } from 'react';
import CarFilterModel from '../models/CarFilterModel';
import CarQueryParamsModel from '../models/CarQueryParamsModel';
import CarsListModel from '../models/CarsListModel';
import carsApi from '../services/carServiceApiHandler';

function useCars(carFilter: CarFilterModel, pageCount: number): [carsList: CarsListModel, isFetching: boolean] {
  const carQueryParams: CarQueryParamsModel = {
    manufacturer: '',
    color: '',
    sort: 'asc',
    page: 1
  };

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [carsList, setCarsList] = useState<CarsListModel>({ cars: [], totalCarsCount: 0, totalPageCount: 0 });

  useEffect(() => {
    const getCars = async () => {
      try {
        setIsFetching(true);
        const listOfCarsAvailable = await carsApi.getListOfCars({
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
    getCars();
    return () => {
      setCarsList({ cars: [], totalCarsCount: 0, totalPageCount: 0 });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carFilter, pageCount]);

  return [carsList, isFetching];
}

export default useCars;