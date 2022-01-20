import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import { CarDetails, PageNotFound } from '..';

describe('CarDetails', () => {
  test('render car details on component load', async () => {
    const { findByRole } = render(
      <MemoryRouter initialEntries={['/cars/12345']}>
        <Routes>
          <Route path='/cars/:stockNumber' element={<CarDetails />}></Route>
        </Routes>
      </MemoryRouter>
    );
    const article = await findByRole('article');
    expect(article.querySelector('h2')?.textContent).toEqual('Fiat Croma');
    expect(article.querySelector('p')?.textContent).toEqual('Stock # 12345 - 126592 km - Diesel - white');
  });
});