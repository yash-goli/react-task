import CarColorsModel from "../models/CarColorsModel";
import CarDetailsModel from "../models/CarDetailsModel";
import CarManufacturersModel from "../models/CarManufacturersModel";
import CarsListModel from "../models/CarsListModel";

export const mockColors: CarColorsModel = {
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

export const mockManufacturers: CarManufacturersModel = {
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

export const mockCars: CarsListModel = {
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
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
      'pictureUrl': 'https://localhost:3000/images/car.svg'
    }
  ],
  'totalPageCount': 3,
  'totalCarsCount': 24
};

export const mockCar: CarDetailsModel = {
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
    'pictureUrl': 'https://localhost:3000/images/car.svg'
  }
};