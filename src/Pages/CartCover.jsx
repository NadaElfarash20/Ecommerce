import React from 'react';
import './CartCover.css';
import { Link } from 'react-router-dom';
import img from '../assets/img/cover.jpg';
import logo from '../assets/img/logo.png';

function CartCover() {
  return (
    <div className="cartcover-container">
      <figure className="cartcover-image">
        <img src={img} alt="Cover" className="cartcover-img" />
        
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: '80px', marginBottom: '10px' }} />
          <figcaption className="cartcover-text" style={{ marginTop: '30px' }}>Cart</figcaption>
        </div>

        <div className="cartnav-text" style={{ marginTop: '30px' }}>
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link> &gt; 
          <Link to="/cart" style={{ color: 'black', textDecoration: 'none' }}> Cart</Link>
        </div>
      </figure>
    </div>
  );
}

export default CartCover;
