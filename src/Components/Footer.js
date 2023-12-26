import React from 'react';

function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start fixed-bottom w-100 shadow-lg p-3 bg-body-tertiary rounded">
      <div className="text-center p-3" style={{ backgroundColor: '#edf3f6'}}>
        <a className="text-body" style={{ textDecoration: 'none' }}>
          <span className='fw-medium'>Ro</span><span className='fw-bold'>Blog </span>
        </a>
         © 2024 Copyright
      </div>
    </footer>
  );
}

export default Footer;
