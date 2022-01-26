import { useState, useEffect } from 'react';
import CarColorsModel from '../models/CarColorsModel';
import carsApi from '../services/carServiceApiHandler';

function useColors() {
  const [colors, setColors] = useState<CarColorsModel>({ colors: [] });

  useEffect(() => {
    const getColors = async () => {
      try {
        const carColors = await carsApi.getCarColors();
        setColors(carColors);
      } catch (error) {
        console.log(error);
      }
    }
    getColors();
    return () => {
      setColors({ colors: [] });
    };
  }, []);

  return colors;
}

export default useColors;