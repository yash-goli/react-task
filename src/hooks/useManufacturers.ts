import { useState, useEffect } from 'react';
import CarManufacturersModel from '../models/CarManufacturersModel';
import carsApi from '../services/carServiceApiHandler';

function useManufacturers() {
  const [manufacturers, setManufacturers] = useState<CarManufacturersModel>({ manufacturers: [] });

  useEffect(() => {
    const getColors = async () => {
      try {
        const carManufacturers = await carsApi.getCarManufacturers();
        setManufacturers(carManufacturers);
      } catch (error) {
        console.log(error);
      }
    }
    getColors();
    return () => {
      setManufacturers({ manufacturers: [] });
    };
  }, []);

  return manufacturers;
}

export default useManufacturers;