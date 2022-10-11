import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CarsFilter } from '..';
import '@testing-library/jest-dom/extend-expect';
import CarFilterModel from '../../models/CarFilterModel';
import { mockColors, mockManufacturers } from '../../mock/mock';

jest.mock('../../hooks', () => ({
  useColors: () => mockColors,
  useManufacturers: () => mockManufacturers
}));

describe('CarsFilter', () => {

  test('render cars filter component', async () => {
    const setCarFilterData = (carFilter: CarFilterModel) => {};
    const { findByTestId } = render(<CarsFilter setCarFilter={setCarFilterData}/>);
    expect(await findByTestId('carsFilter')).toBeInTheDocument();
    expect(await findByTestId('carColors')).toBeInTheDocument();
    expect(await findByTestId('carManufacturers')).toBeInTheDocument();
    expect(await findByTestId('filter')).toBeInTheDocument();
    expect((await findByTestId('carColors')).children.length).toEqual(8);
    expect((await findByTestId('carManufacturers')).children.length).toEqual(11);
  });

  test('change color and expect callback to be called with color value', async () => {
    const mockFn = jest.fn((carFilter: CarFilterModel) => {});
    const { findByTestId } = render(<CarsFilter setCarFilter={mockFn}/>);
    const carColors = await findByTestId('carColors') as HTMLSelectElement;
    const btnFilter = await findByTestId('filter') as HTMLButtonElement;

    fireEvent.change(carColors, {target: {value: mockColors.colors[2]}});
    fireEvent.submit(btnFilter);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({color: mockColors.colors[2], manufacturer: ''})
  });

  test('change manufacturer and expect callback to be called with manufacturer value', async () => {
    const mockFn = jest.fn((carFilter: CarFilterModel) => {});
    const { findByTestId } = render(<CarsFilter setCarFilter={mockFn}/>);
    const carManufacturers = await findByTestId('carManufacturers') as HTMLSelectElement;
    const btnFilter = await findByTestId('filter') as HTMLButtonElement;

    fireEvent.change(carManufacturers, {target: {value: mockManufacturers.manufacturers[3].name}});
    fireEvent.submit(btnFilter);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({color: '', manufacturer: mockManufacturers.manufacturers[3].name})
  });

  test('change manufacturer and color, expect callback to be called with color and manufacturer values', async () => {
    const mockFn = jest.fn((carFilter: CarFilterModel) => {});
    const { findByTestId } = render(<CarsFilter setCarFilter={mockFn}/>);
    const carManufacturers = await findByTestId('carManufacturers') as HTMLSelectElement;
    const carColors = await findByTestId('carColors') as HTMLSelectElement;
    const btnFilter = await findByTestId('filter') as HTMLButtonElement;

    fireEvent.change(carManufacturers, {target: {value: mockManufacturers.manufacturers[2].name}});
    fireEvent.change(carColors, {target: {value: mockColors.colors[5]}});
    fireEvent.submit(btnFilter);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({color: mockColors.colors[5], manufacturer: mockManufacturers.manufacturers[2].name})
  });
});