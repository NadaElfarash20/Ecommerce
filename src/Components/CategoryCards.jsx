
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CategoryCards.css'; 

const CategoryCards = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
        setCategories(response.data.slice(0, 3)); 
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-container">
    <h1>Browse The Range</h1>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
    <div className="cards">
      {categories.map((category) => (
        <div className="category-card" key={category.id}>
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CategoryCards;
