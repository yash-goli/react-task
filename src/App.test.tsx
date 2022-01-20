import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headingEle = screen.getByText(/Welcome to React Task/i);
  expect(headingEle).toBeInTheDocument();
});
