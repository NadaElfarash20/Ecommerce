import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Slider.css';

const Slider = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
  
        setProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, [products]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (products.length === 0) return <div>Loading...</div>;

  return (
    
    <div className="slider-container">
        
      <div className="slider">
        <button className="arrow left" onClick={prevSlide}>❮</button>
        <div className="slider-content">
          <img src={products[currentIndex].images[0]} alt={products[currentIndex].title} />
        </div>
       
        <button className="arrow right" onClick={nextSlide}>❯</button>
      
        <div className="dots">
          {products.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Slider;
