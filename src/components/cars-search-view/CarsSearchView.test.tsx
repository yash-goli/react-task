import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { CarsSearchView } from '..';
import CarColorsModel from '../../models/CarColorsModel';
import CarManufacturersModel from '../../models/CarManufacturersModel';
import '@testing-library/jest-dom/extend-expect';
import CarFilterModel from '../../models/CarFilterModel';
import { MemoryRouter } from 'react-router-dom';

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