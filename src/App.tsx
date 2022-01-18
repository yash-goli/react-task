import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Footer, Header, HomePage, CarsList, CarDetails, PageNotFound } from './components';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main className='main'>
        <Container className='h-100'> */}
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/cars' element={<CarsList />}></Route>
              <Route path='/cars/:stockNumber' element={<CarDetails />}></Route>
              <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
          </Router>
        {/* </Container>
      </main> */}
      <Footer />
    </div>
  );
}

export default App;
