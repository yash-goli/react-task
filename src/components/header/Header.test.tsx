import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '..';

describe('Header', () => {
  test('renders header component', () => {
    const { container } = render(<Header />);
    const header = container.querySelectorAll('.header');
    expect(header.length).toEqual(1);
  });

  test('renders logo in header', () => {
    const { container } = render(<Header />);
    const img = container.querySelectorAll('img');
    expect(img.length).toEqual(1);
    expect(img.item(0).getAttribute('src')).not.toEqual('');
  });

  test('renders nav in header', () => {
    const { container } = render(<Header />);
    const nav = container.querySelectorAll('.navbar-nav');
    expect(nav.length).toEqual(1);
    expect(nav.item(0).children.length).toEqual(4);
    expect(nav.item(0).children[0].textContent).toEqual('Cars');
    expect(nav.item(0).children[1].textContent).toEqual('Purchase');
    expect(nav.item(0).children[2].textContent).toEqual('My Orders');
    expect(nav.item(0).children[3].textContent).toEqual('Sell');
  });
});