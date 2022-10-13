import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '..';

describe('Header', () => {
  test('renders header component', async () => {
    render(<Header />);
    const header = await screen.findByTestId('header');
    expect(header).toBeInTheDocument();
  });

  test('renders logo in header', async () => {
    render(<Header />);
    const img = await screen.findByTestId('logo');
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).not.toEqual('');
  });

  test('renders nav in header', async () => {
    render(<Header />);
    const nav = await screen.findByTestId('navbar-nav');
    expect(nav).toBeInTheDocument();
    expect(nav.childNodes.length).toEqual(4);
    expect(nav.childNodes[0].textContent).toEqual('Cars');
    expect(nav.childNodes[1].textContent).toEqual('Purchase');
    expect(nav.childNodes[2].textContent).toEqual('My Orders');
    expect(nav.childNodes[3].textContent).toEqual('Sell');
  });
});