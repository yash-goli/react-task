import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../../images/logo.png';

const { Brand, Toggle, Collapse } = Navbar;

const Header = () => {
  return (
    <header className='header' data-testid="header">
      <Navbar expand='md'>
        <Container>
          <Brand href='/'>
            <img
              data-testid="logo"
              alt='Auto1 Group'
              src={logo}
              height='30'
              className='d-inline-block align-top'
            />
          </Brand>
          <Toggle aria-controls='basic-navbar-nav' />
          <Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav data-testid="navbar-nav">
              <Nav.Link href='/cars'>Cars</Nav.Link>
              <Nav.Link href='#home'>Purchase</Nav.Link>
              <Nav.Link href='#home'>My Orders</Nav.Link>
              <Nav.Link href='#link'>Sell</Nav.Link>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
};

export default Header;
