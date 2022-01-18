import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Footer, Header, HomePage, CarsList, CarDetails, NotFound404 } from './components';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <div className='routes'>
          <Container>
            <Router>
              <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cars' element={<CarsList />}></Route>
                <Route path='/cars/:stockNumber' element={<CarDetails />}></Route>
                <Route path='*' element={<NotFound404 />}></Route>
              </Routes>
            </Router>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
