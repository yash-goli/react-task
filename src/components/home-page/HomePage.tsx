import React from 'react';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <main className='main min-content-height'>
        <Container className='h-100'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <h1>Welcome to Auto1</h1>
          </div>
        </Container>
      </main>
    </>
  )
};

export default HomePage;
