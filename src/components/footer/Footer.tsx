import React from 'react';

const Footer = () => {
  const date = new Date();

  return (
    <footer className='footer' data-testid="footer">
      <div className='d-flex justify-content-center align-items-center h-100'>
        <p className='text-center mb-0'>&copy; AUTO1 Group {date.getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;
