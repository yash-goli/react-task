import { rest } from 'msw';
import CarColorsModel from '../models/CarColorsModel';
import CarDetailsModel from '../models/CarDetailsModel';
import CarManufacturersModel from '../models/CarManufacturersModel';
import CarsListModel from '../models/CarsListModel';
import { baseUrl } from '../services/carServiceApiHandler';
import { mockColors, mockManufacturers, mockCars, mockCar } from './mock';

const getCarColors = rest.get(`${baseUrl}/colors`, (req, res, ctx) => {
  return res(ctx.json(mockColors));
});

const getCarManufacturers = rest.get(`${baseUrl}/manufacturers`, (req, res, ctx) => {
  return res(ctx.json(mockManufacturers));
});

const getCars = rest.get(`${baseUrl}/cars`, (req, res, ctx) => {
  return res(ctx.json(mockCars));
});

const getCarDetails = rest.get(`${baseUrl}/cars/12345`, (req, res, ctx) => {
  return res(ctx.json(mockCar));
});

const getCarDetailsFail = rest.get(`${baseUrl}/cars/23456`, (req, res, ctx) => {
  return res(ctx.status(500));
});

export const handlers = [getCarColors, getCarManufacturers, getCars, getCarDetails, getCarDetailsFail];