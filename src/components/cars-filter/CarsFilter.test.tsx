import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { CarsFilter } from '..';
import CarColorsModel from '../../models/CarColorsModel';
import CarManufacturersModel from '../../models/CarManufacturersModel';
import '@testing-library/jest-dom/extend-expect';
import CarFilterModel from '../../models/CarFilterModel';

describe('CarsFilter', () => {
  const colors: CarColorsModel = {
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

  const manufacturers: CarManufacturersModel = {
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

  test('render cars filter component', async () => {
    const setCarFilterData = (carFilter: CarFilterModel) => {};
    const { findByTestId } = render(<CarsFilter colors={colors} manufacturers={manufacturers} setCarFilter={setCarFilterData}/>);
    expect(await findByTestId('carsFilter')).toBeInTheDocument();
    expect(await findByTestId('carColors')).toBeInTheDocument();
    expect(await findByTestId('carManufacturers')).toBeInTheDocument();
    expect(await findByTestId('filter')).toBeInTheDocument();
    expect((await findByTestId('carColors')).children.length).toEqual(8);
    expect((await findByTestId('carManufacturers')).children.length).toEqual(11);
  });

  test('change color and expect callback to be called with color value', async () => {
    const mockFn = jest.fn((carFilter: CarFilterModel) => {});
    const { getByTestId } = render(<CarsFilter colors={colors} manufacturers={manufacturers} setCarFilter={mockFn}/>);
    const carColors = await waitFor(() => getByTestId('carColors')) as HTMLSelectElement;
    const btnFilter = await waitFor(() => getByTestId('filter')) as HTMLButtonElement;

    act(() => {fireEvent.change(carColors, {target: {value: colors.colors[2]}});});
    act(() => {fireEvent.submit(btnFilter);})
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({color: colors.colors[2], manufacturer: ''})
  });

  test('change manufacturer and expect callback to be called with manufacturer value', async () => {
    const mockFn = jest.fn((carFilter: CarFilterModel) => {});
    const { getByTestId } = render(<CarsFilter colors={colors} manufacturers={manufacturers} setCarFilter={mockFn}/>);
    const carManufacturers = await waitFor(() => getByTestId('carManufacturers')) as HTMLSelectElement;
    const btnFilter = await waitFor(() => getByTestId('filter')) as HTMLButtonElement;

    act(() => {fireEvent.change(carManufacturers, {target: {value: manufacturers.manufacturers[3].name}});});
    act(() => {fireEvent.submit(btnFilter);})
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({color: '', manufacturer: manufacturers.manufacturers[3].name})
  });

  test('change manufacturer and color, expect callback to be called with color and manufacturer values', async () => {
    const mockFn = jest.fn((carFilter: CarFilterModel) => {});
    const { getByTestId } = render(<CarsFilter colors={colors} manufacturers={manufacturers} setCarFilter={mockFn}/>);
    const carManufacturers = await waitFor(() => getByTestId('carManufacturers')) as HTMLSelectElement;
    const carColors = await waitFor(() => getByTestId('carColors')) as HTMLSelectElement;
    const btnFilter = await waitFor(() => getByTestId('filter')) as HTMLButtonElement;

    act(() => {fireEvent.change(carManufacturers, {target: {value: manufacturers.manufacturers[2].name}});});
    act(() => {fireEvent.change(carColors, {target: {value: colors.colors[5]}});});
    act(() => {fireEvent.submit(btnFilter);})
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({color: colors.colors[5], manufacturer: manufacturers.manufacturers[2].name})
  });
});