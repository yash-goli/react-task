import { rest } from 'msw';
import CarColorsModel from '../models/CarColorsModel';
import CarDetailsModel from '../models/CarDetailsModel';
import CarManufacturersModel from '../models/CarManufacturersModel';
import CarsListModel from '../models/CarsListModel';
import { baseUrl } from '../services/carServiceApiHandler';

const getCarColors = rest.get(`${baseUrl}/colors`, (req, res, ctx) => {
  const response: CarColorsModel = {
    colors: [
      'red',
      'blue',
      'green',
      'black',
      'yellow',
      'white',
      'silver'
    ]
  };
  return res(ctx.json(response));
});

const getCarManufacturers = rest.get(`${baseUrl}/manufacturers`, (req, res, ctx) => {
  const response: CarManufacturersModel = {
    manufacturers: [
      {
        'name': 'Audi',
        'models': []
      },
      {
        'name': 'BMW',
        'models': []
      },
      {
        'name': 'Chrysler',
        'models': []
      },
      {
        'name': 'Dodge',
        'models': []
      },
      {
        'name': 'Fiat',
        'models': []
      },
      {
        'name': 'Mercedes-Benz',
        'models': []
      },
      {
        'name': 'Porsche',
        'models': []
      },
      {
        'name': 'Skoda',
        'models': []
      },
      {
        'name': 'Tesla',
        'models': []
      },
      {
        'name': 'Volkswagen',
        'models': []
      }
    ]
  };
  return res(ctx.json(response));
});

const getCars = rest.get(`${baseUrl}/cars`, (req, res, ctx) => {
  const response: CarsListModel = {
    cars: [
      {
        'stockNumber': 32177,
        'manufacturerName': 'Fiat',
        'modelName': 'Ritmo',
        'color': 'white',
        'mileage': {
          'number': 102446,
          'unit': 'km'
        },
        'fuelType': 'Petrol',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      {
        'stockNumber': 85296,
        'manufacturerName': 'Fiat',
        'modelName': 'Seicento',
        'color': 'white',
        'mileage': {
          'number': 112422,
          'unit': 'km'
        },
        'fuelType': 'Diesel',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      {
        'stockNumber': 85491,
        'manufacturerName': 'Fiat',
        'modelName': 'Tipo',
        'color': 'white',
        'mileage': {
          'number': 114429,
          'unit': 'km'
        },
        'fuelType': 'Petrol',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      {
        'stockNumber': 34928,
        'manufacturerName': 'Fiat',
        'modelName': 'Grande Punto',
        'color': 'white',
        'mileage': {
          'number': 115374,
          'unit': 'km'
        },
        'fuelType': 'Diesel',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      {
        'stockNumber': 91838,
        'manufacturerName': 'Fiat',
        'modelName': 'Panda',
        'color': 'white',
        'mileage': {
          'number': 118051,
          'unit': 'km'
        },
        'fuelType': 'Diesel',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      {
        'stockNumber': 58146,
        'manufacturerName': 'Fiat',
        'modelName': 'Palio',
        'color': 'white',
        'mileage': {
          'number': 121649,
          'unit': 'km'
        },
        'fuelType': 'Diesel',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      {
        'stockNumber': 98212,
        'manufacturerName': 'Fiat',
        'modelName': 'Seicento',
        'color': 'white',
        'mileage': {
          'number': 125141,
          'unit': 'km'
        },
        'fuelType': 'Petrol',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      {
        'stockNumber': 88044,
        'manufacturerName': 'Fiat',
        'modelName': 'Croma',
        'color': 'white',
        'mileage': {
          'number': 126592,
          'unit': 'km'
        },
        'fuelType': 'Diesel',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      {
        'stockNumber': 72593,
        'manufacturerName': 'Fiat',
        'modelName': 'Cinquecento',
        'color': 'white',
        'mileage': {
          'number': 129060,
          'unit': 'km'
        },
        'fuelType': 'Diesel',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      {
        'stockNumber': 57204,
        'manufacturerName': 'Fiat',
        'modelName': '131',
        'color': 'white',
        'mileage': {
          'number': 132560,
          'unit': 'km'
        },
        'fuelType': 'Diesel',
        'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      }
    ],
    'totalPageCount': 3,
    'totalCarsCount': 24
  };
  return res(ctx.json(response));
});

const getCarDetails = rest.get(`${baseUrl}/cars/12345`, (req, res, ctx) => {
  const response: CarDetailsModel = {
    car: {
      'stockNumber': 12345,
      'manufacturerName': 'Fiat',
      'modelName': 'Croma',
      'color': 'white',
      'mileage': {
        'number': 126592,
        'unit': 'km'
      },
      'fuelType': 'Diesel',
      'pictureUrl': 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
    }
  };
  return res(ctx.json(response));
});

const getCarDetailsFail = rest.get(`${baseUrl}/cars/23456`, (req, res, ctx) => {
  return res(ctx.status(500));
});

export const handlers = [getCarColors, getCarManufacturers, getCars, getCarDetails, getCarDetailsFail];