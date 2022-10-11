import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Footer, Header, HomePage, CarsSearch, CarDetails, PageNotFound } from './components';
import { ErrorBoundary } from './error/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/cars' element={<CarsSearch />}></Route>
            <Route path='/cars/:stockNumber' element={
              <ErrorBoundary>
                <Suspense fallback={<div>Loadding ...</div>}>
                  <CarDetails />
                </Suspense>
              </ErrorBoundary>}
            ></Route>
            <Route path='/page-not-found' element={<PageNotFound />}></Route>
            <Route path='*' element={<Navigate to='page-not-found' />}></Route>
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
