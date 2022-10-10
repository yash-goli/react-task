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

  function api<T>(url: string, params?: any): Promise<T> {
    const queryParams = new URLSearchParams(params);
    const urlWithParams = queryParams ? `${url}?${queryParams.toString()}` : url;
    
    return fetch(urlWithParams, { headers }).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      });
  }

  return {
    getCarColors: (): Promise<CarColorsModel> => {
      try {
        return api<CarColorsModel>(`${baseUrl}/colors`);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    getCarManufacturers: async (): Promise<CarManufacturersModel> => {
      try {
        return api<CarManufacturersModel>(`${baseUrl}/manufacturers`);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    getListOfCars: async (params: CarQueryParamsModel): Promise<CarsListModel> => {
      try {
        return api<CarsListModel>(`${baseUrl}/cars`, params);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    getCarDetails: async (stockNumber: string): Promise<CarDetailsModel> => {
      try {
        return api<CarDetailsModel>(`${baseUrl}/cars/${stockNumber}`);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }
};

export default handler();