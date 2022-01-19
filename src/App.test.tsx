import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headingEle = screen.getByText(/Welcome to Auto1/i);
  expect(headingEle).toBeInTheDocument();
});
