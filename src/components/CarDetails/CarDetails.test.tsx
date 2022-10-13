import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { CarDetails } from '..';
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
    render(
      <MemoryRouter initialEntries={['/cars/12345']}>
        <Routes>
          <Route path='/cars/:stockNumber' element={<RecoilRoot><Suspense fallback={<div>loading...</div>}><CarDetails /></Suspense></RecoilRoot>}></Route>
        </Routes>
      </MemoryRouter>
    );
    const article = await screen.findByRole('article');
    expect(article.childNodes[0]?.textContent).toEqual('Fiat Croma');
    expect(article.childNodes[1]?.textContent).toEqual('Stock # 12345 - 126592 km - Diesel - white');
  });
});