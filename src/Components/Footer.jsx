import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" style={{ backgroundColor: 'white', color: 'black', marginTop: '50px' }}>
    
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>
        <div></div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Funiro.</h6>
              <p style={{ color: 'gray' }}  >400 University Drive Suite 200 Coral Gables, FL 33134 USA </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'gray' }}>Links</h6>

              <div className="d-flex flex-column">
                <p className="mb-1"><a href="/Home" className="text-reset" style={{ textDecoration: 'none' , fontSize:'15px' }}>Home</a></p>
                <p className="mb-1"><a href="/Shop" className="text-reset" style={{ textDecoration: 'none' , fontSize:'15px' }}>Shop</a></p>
                <p className="mb-1"><a href="/About" className="text-reset" style={{ textDecoration: 'none' , fontSize:'15px' }}>About</a></p>
                <p className="mb-1"><a href="/Contact" className="text-reset" style={{ textDecoration: 'none' , fontSize:'15px' }}>Contact</a></p>
              </div>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4"style={{ color: 'gray' }}  >Help</h6>
              <div className="d-flex flex-column">
                <p className="mb-1"><a href="#!" className="text-reset" style={{ textDecoration: 'none' , fontSize:'15px' }}>Payment Options</a></p>
                <p className="mb-1"><a href="#!" className="text-reset" style={{ textDecoration: 'none' , fontSize:'15px' }}>Returns</a></p>
                <p className="mb-1"><a href="#!" className="text-reset" style={{ textDecoration: 'none' , fontSize:'15px' }}>Privacy Policies</a></p>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'gray' }}>Newsletter</h6>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  <span style={{ textDecoration: 'underline', color: 'gray', whiteSpace: 'nowrap' }}>
    Enter Your Email Address
  </span>
  <span style={{ textDecoration: 'underline', color: 'Black', marginLeft:'50px', whiteSpace: 'nowrap' }}>
    SUBSCRIBE
  </span>
</div>

</div>
          </div>
        </div>
      </section>

      <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />

      <div className="p-4" style={{ backgroundColor: 'White', height: '80px' }}>
        2023 Furino. All rights reserved.
      </div>
      
      <div style={{ height: '50px', backgroundColor: 'white' }}></div>
    </footer>
  );
};

export default Footer;
