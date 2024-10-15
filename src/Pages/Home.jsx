import React from 'react';
import Products from '../Components/Products';
import Hero from '../Components/Hero'; 
import CategoryCards from '../Components/CategoryCards';
import Slider from '../Components/Slider'
import Share from '../Components/Share';
import './Home.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

function Home() {
  return (
    <div style={{ margin: 0, padding: 0, width: '100%' }}>
      <Navbar/>
      <Hero />
      <CategoryCards/>
      <Products/>
      <Slider />  
      <Share />
      <Footer/>
    </div>
  );
}

export default Home;
