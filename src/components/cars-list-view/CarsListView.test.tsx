import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CarsListModel from '../../models/CarsListModel';
import { CarsListView } from '..';

describe('CarsListView', () => {
  const carsList: CarsListModel = {
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
      }
    ],
    totalPageCount: 1,
    totalCarsCount: 5
  };

  test('render cars list view component', async () => {
    const { findAllByRole, findByRole } = render(<MemoryRouter><CarsListView  cars={carsList.cars}/></MemoryRouter>);
    expect(await findByRole('list')).toBeInTheDocument();
    expect(await (await findAllByRole('listitem')).length).toEqual(5);
  });

  test('check the info in the cars list view component', async () => {
    const { findAllByRole, findByRole } = render(<MemoryRouter><CarsListView  cars={carsList.cars}/></MemoryRouter>);
    const banner = await (await findAllByRole('banner'))[2];
    expect(banner?.querySelector('h3')?.textContent).toContain(`${carsList.cars[2].manufacturerName} ${carsList.cars[2].modelName}`);
    expect(banner?.querySelector('p')?.textContent).toContain(`Stock # ${carsList.cars[2].stockNumber} - ${carsList.cars[2].mileage.number} ${carsList.cars[2].mileage.unit} - ${carsList.cars[2].fuelType} - ${carsList.cars[2].color}`);
    expect(banner?.querySelector('a')?.href).toContain(`/cars/${carsList.cars[2].stockNumber}`);
  });
});