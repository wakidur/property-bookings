import React from 'react';

const Footer = () => {
  return (
    <footer className='container'>
      <div className=' d-flex justify-content-between'>
        <p>© WKR, Inc. All rights reserved</p>
        <div className='d-grid gap-2 d-md-flex'>
          <button className='btn me-md-2' type='button'>
            <i className='bi bi-facebook'></i>
          </button>
          <button className='btn me-md-2' type='button'>
            <i className='bi bi-linkedin'></i>
          </button>
          <button className='btn' type='button'>
            <i className='bi bi-instagram'></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
