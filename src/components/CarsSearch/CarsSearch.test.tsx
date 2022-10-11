import React from 'react';
import { render } from '@testing-library/react';
import { CarsSearchView } from '..';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import { mockColors, mockManufacturers, mockCars } from '../../mock/mock';

jest.mock('../../hooks', () => ({
  useColors: () => mockColors,
  useManufacturers: () => mockManufacturers,
  useCars: () => [mockCars, true]
}));

describe('CarsSearchView', () => {
  test('render filter component in serach view', async () => {
    const { findByTestId } = render(<MemoryRouter><CarsSearchView/></MemoryRouter>);
    expect(await findByTestId('carsFilter')).toBeInTheDocument();
    expect(await findByTestId('carColors')).toBeInTheDocument();
    expect(await findByTestId('carManufacturers')).toBeInTheDocument();
    expect(await findByTestId('filter')).toBeInTheDocument();
    expect((await findByTestId('carColors')).children.length).toEqual(8);
    expect((await findByTestId('carManufacturers')).children.length).toEqual(11);
  })
});