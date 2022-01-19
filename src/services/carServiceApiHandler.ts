import axios, { AxiosError } from 'axios';
import CarColorsModel from '../models/CarColorsModel';
import CarDetailsModel from '../models/CarDetailsModel';
import CarManufacturersModel from '../models/CarManufacturersModel';
import CarQueryParamsModel from '../models/CarQueryParamsModel';
import CarsListModel from '../models/CarsListModel';

export const baseUrl = 'https://auto1-mock-server.herokuapp.com/api';

const handler = () => {

  const headers = {
    'Content-Type': 'application/json'
  };

  return {
    getCarColors: async (): Promise<CarColorsModel> => {
      try {
        const response = await axios.get<CarColorsModel>(`${baseUrl}/colors`, {headers});
        return response.data;
      } catch (e) {
        console.log((e as AxiosError).response);
        throw (e as AxiosError).response;
      }
    },
    getCarManufacturers: async (): Promise<CarManufacturersModel> => {
      try {
        const response = await axios.get<CarManufacturersModel>(`${baseUrl}/manufacturers`, {headers});
        return response.data;
      } catch (e) {
        console.log((e as AxiosError).response);
        throw (e as AxiosError).response;
      }
    },
    getListOfCars: async (params: CarQueryParamsModel): Promise<CarsListModel> => {
      try {
        const response = await axios.get<CarsListModel>(`${baseUrl}/cars`, {headers, params});
        return response.data;
      } catch (e) {
        console.log((e as AxiosError).response);
        throw (e as AxiosError).response;
      }
    },
    getCarDetails: async (stockNumber: string): Promise<CarDetailsModel> => {
      try {
        const response = await axios.get<CarDetailsModel>(`${baseUrl}/cars/${stockNumber}`, {headers});
        return response.data;
      } catch (e) {
        console.log((e as AxiosError).response);
        throw (e as AxiosError).response;
      }
    }
  }
};

export default handler();