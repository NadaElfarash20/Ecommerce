// Share.jsx
import React, { useEffect, useState } from 'react';
import './Share.css'; // Create this CSS file for styling

const Share = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data.slice(0, 8)); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h6> Share your setup with </h6>
      <h3>#FuniroFurniture</h3>
    <div className="share-container">
      
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.images[0]} alt={product.title} />
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Share;
