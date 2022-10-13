import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarsSearch } from '..';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import { mockColors, mockManufacturers, mockCars } from '../../mock/mock';
import { RecoilRoot } from 'recoil';

jest.mock('../../hooks', () => ({
  useColors: () => mockColors,
  useManufacturers: () => mockManufacturers,
  useCars: () => [mockCars, true]
}));

describe('CarsSearchView', () => {
  test('render filter component in serach view', async () => {
    render(<MemoryRouter><RecoilRoot><CarsSearch/></RecoilRoot></MemoryRouter>);
    expect(await screen.findByTestId('carsFilter')).toBeInTheDocument();
    expect(await screen.findByTestId('carColors')).toBeInTheDocument();
    expect(await screen.findByTestId('carManufacturers')).toBeInTheDocument();
    expect(await screen.findByTestId('filter')).toBeInTheDocument();
    expect((await screen.findByTestId('carColors')).childNodes.length).toEqual(8);
    expect((await screen.findByTestId('carManufacturers')).childNodes.length).toEqual(11);
  })
});