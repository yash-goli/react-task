import React, { useEffect } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { CarsFilter } from '..';
import '@testing-library/jest-dom/extend-expect';
import CarFilterModel from '../../models/CarFilterModel';
import { mockColors, mockManufacturers } from '../../mock/mock';
import { RecoilRoot, RecoilState, useRecoilValue } from 'recoil';
import { carFilterAtom } from '../../recoil/carFilter';

jest.mock('../../hooks', () => ({
  useColors: () => mockColors,
  useManufacturers: () => mockManufacturers
}));

export const RecoilObserver = ({ node, onChange }: { node: RecoilState<CarFilterModel>, onChange: (value: any) => void }) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};


describe('CarsFilter', () => {

  test('render cars filter component', async () => {
    render(<RecoilRoot><CarsFilter /></RecoilRoot>);
    expect(await screen.findByTestId('carsFilter')).toBeInTheDocument();
    expect(await screen.findByTestId('carColors')).toBeInTheDocument();
    expect(await screen.findByTestId('carManufacturers')).toBeInTheDocument();
    expect(await screen.findByTestId('filter')).toBeInTheDocument();
    expect((await screen.findByTestId('carColors')).childNodes.length).toEqual(8);
    expect((await screen.findByTestId('carManufacturers')).childNodes.length).toEqual(11);
  });

  test('change color and expect callback to be called with color value', async () => {
    const mockFn = jest.fn((carFilter: CarFilterModel) => { });
    render(<RecoilRoot><RecoilObserver node={carFilterAtom} onChange={mockFn} /><CarsFilter /></RecoilRoot>);
    const carColors = await screen.findByTestId('carColors') as HTMLSelectElement;
    const btnFilter = await screen.findByTestId('filter') as HTMLButtonElement;

    fireEvent.change(carColors, { target: { value: mockColors.colors[2] } });
    fireEvent.submit(btnFilter);
    expect(mockFn).toHaveBeenCalledWith({ color: mockColors.colors[2], manufacturer: '' })
  });

  test('change manufacturer and expect callback to be called with manufacturer value', async () => {
    const mockFn = jest.fn((carFilter: CarFilterModel) => { });
    render(<RecoilRoot><RecoilObserver node={carFilterAtom} onChange={mockFn} /><CarsFilter /></RecoilRoot>);
    const carManufacturers = await screen.findByTestId('carManufacturers') as HTMLSelectElement;
    const btnFilter = await screen.findByTestId('filter') as HTMLButtonElement;

    fireEvent.change(carManufacturers, { target: { value: mockManufacturers.manufacturers[3].name } });
    fireEvent.submit(btnFilter);
    expect(mockFn).toHaveBeenCalledWith({ color: '', manufacturer: mockManufacturers.manufacturers[3].name })
  });

  test('change manufacturer and color, expect callback to be called with color and manufacturer values', async () => {
    const mockFn = jest.fn((carFilter: CarFilterModel) => { });
    render(<RecoilRoot><RecoilObserver node={carFilterAtom} onChange={mockFn} /><CarsFilter /></RecoilRoot>);
    const carManufacturers = await screen.findByTestId('carManufacturers') as HTMLSelectElement;
    const carColors = await screen.findByTestId('carColors') as HTMLSelectElement;
    const btnFilter = await screen.findByTestId('filter') as HTMLButtonElement;

    fireEvent.change(carManufacturers, { target: { value: mockManufacturers.manufacturers[2].name } });
    fireEvent.change(carColors, { target: { value: mockColors.colors[5] } });
    fireEvent.submit(btnFilter);
    expect(mockFn).toHaveBeenCalledWith({ color: mockColors.colors[5], manufacturer: mockManufacturers.manufacturers[2].name })
  });
});