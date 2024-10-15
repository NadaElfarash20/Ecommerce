import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img/cover.jpg';
import './ShopCover.css';
import ShopNav from './ShopNav';

function ShopCover() {
  return (
    <div> 
    <figure className="cover-image">
      <img src={img} alt="Cover" className="cover-img" />
      <figcaption className="cover-text">Shop</figcaption>
      <div className="nav-text">
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link> &gt; 
        <Link to="/shop" style={{ color: 'black', textDecoration: 'none' }}> Shop</Link>
      </div>
    </figure>
<ShopNav/>
    </div>
    
  );
}

export default ShopCover;
