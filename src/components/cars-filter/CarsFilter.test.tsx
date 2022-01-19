import React from 'react';
import { render, screen } from '@testing-library/react';
import setupStore from '../../store/store';
import { Provider } from 'react-redux';
import { CarsFilter, CarsList } from '..';

describe('CarsFilter', () => {
  const setCarFilter = jest.fn();

  beforeEach(() => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <CarsList/>
      </Provider>
    )
  });

  test('render cars filter component', async () => {
    console.log(screen.getByTestId(''));
  });
});