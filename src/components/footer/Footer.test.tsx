import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '..';

describe('Footer', () => {
  test('renders footer component', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelectorAll('.footer');
    expect(footer.length).toEqual(1);
  });

  test('renders footer text in component', () => {
    const date = new Date();
    const msg = `© AUTO1 Group ${date.getFullYear()}`;
    const { container } = render(<Footer />);
    const footer = container.querySelectorAll('.footer');
    expect(footer.length).toEqual(1);
    expect(footer.item(0).textContent).toEqual(msg);
  });
});