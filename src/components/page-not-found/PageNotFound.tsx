import React from 'react';

import logo from '../../images/logo.png';

const PageNotFound = () => {
  return (
    <>
      <div className='d-flex h-100 justify-content-center align-items-center flex-column page-not-found'>
        <div className='image-container mb-3'>
          <img
            alt='Auto1 Group'
            src={logo}
            height='40'
            className='d-inline-block align-top'
          />
        </div>
        <h2 className='mb-3'>404 - Not Found</h2>
        <p className='mb-3'>Sorry, the page you are looking for does not exist.</p>
        <p>You can always go back to the <a href='/'>homepage</a></p>
      </div>
    </>
  )
};

export default PageNotFound;
