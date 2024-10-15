import React from 'react';
import hero_img from '../assets/img/hero_img.jpeg';
import './Hero.css'; // Ensure your CSS file is imported

export default function Hero() {
    return (
        <div style={{ margin: 0, padding: 0, overflow: 'hidden', width: '100%', height: '110vh' }}>
            <img
                src={hero_img}
                alt="Home"
                style={{
                    width: '100%',
                    height: '100%', 
                    display: 'block',
                    margin: 0,
                    padding: 0,
                }}
            />
            <div className="card" style={{ width: '30rem', position: 'absolute', top: '30%', left: '50%',height:'60%' }}>
                <div className="card-body">
                    <h5 className="card-title">New Arrival</h5>
                    <p className="card-text">Discover Our</p>
                    <p className="card-text2">New Collection</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <a href="/shop" className="btn1">Buy Now</a>
                </div>
            </div>
        </div>
    );
}
