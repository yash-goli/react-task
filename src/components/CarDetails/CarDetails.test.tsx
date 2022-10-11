import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import { CarDetails, PageNotFound } from '..';
import { RecoilRoot } from 'recoil';
import { mockCar } from '../../mock/mock';
import React, { Suspense } from 'react';

describe('CarDetails', () => {
  test('render car details on component load', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => mockCar,
      }),
    ) as jest.Mock;
    const { findByRole } = render(
      <MemoryRouter initialEntries={['/cars/12345']}>
        <Routes>
          <Route path='/cars/:stockNumber' element={<RecoilRoot><Suspense fallback={<div>loading...</div>}><CarDetails /></Suspense></RecoilRoot>}></Route>
        </Routes>
      </MemoryRouter>
    );
    const article = await findByRole('article');
    expect(article.querySelector('h2')?.textContent).toEqual('Fiat Croma');
    expect(article.querySelector('p')?.textContent).toEqual('Stock # 12345 - 126592 km - Diesel - white');
  });
});