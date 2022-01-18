import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CarColorsModel from '../models/CarColorsModel';
import CarDetailsModel from '../models/CarDetailsModel';
import CarManufacturersModel from '../models/CarManufacturersModel';
import CarQueryParamsModel from '../models/CarQueryParamsModel';
import CarsListModel from '../models/CarsListModel';

const headers = {
  'Content-Type': 'application/json'
};

const baseUrl = 'https://auto1-mock-server.herokuapp.com/api';

const createRequest = (url: string, params?: {[key: string]: any}) => ({ url, params, headers });

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCarColors: builder.query<CarColorsModel, string>({
      query: () => createRequest('/colors')
    }),
    getCarManufacturers: builder.query<CarManufacturersModel, string>({
      query: () => createRequest('/manufacturers')
    }),
    getListOfCars: builder.query<CarsListModel, CarQueryParamsModel>({
      query: (params) => createRequest('/cars', params)
    }),
    getCarDetails: builder.query<CarDetailsModel, string>({
      query: (stockNumber) => createRequest(`/cars/${stockNumber}`)
    })
  })
});

export const {
  useGetCarColorsQuery,
  useGetCarManufacturersQuery,
  useGetListOfCarsQuery,
  useGetCarDetailsQuery,
} = carsApi;