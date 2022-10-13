import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '..';

describe('Footer', () => {
  test('renders footer component', async () => {
    render(<Footer />);
    const footer = await screen.findByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  test('renders footer text in component', async () => {
    const date = new Date();
    const msg = `© AUTO1 Group ${date.getFullYear()}`;
    render(<Footer />);
    const footer = await screen.findByTestId('footer');
    expect(footer.textContent).toEqual(msg);
  });
});