import React, { useEffect, useState } from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faCodeCompare, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../Pages/Context/CartContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(8); 
    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data); 
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 4); 
    };

    const handleProductClick = (id) => {
        navigate(`/singleproduct/${id}`);
    };

    return (
        <div>
            <h1 className='h1-products'>Our Products</h1>
            <div className="product-container">
                <div className="product-grid">
                    {products.slice(0, visibleCount).map((product) => (
                        <div 
                            className="product-card" 
                            key={product.id} 
                            onClick={() => handleProductClick(product.id)} // Navigate on product click
                        >
                            <img src={product.images[0]} alt={product.title} />
                            <h5>{product.title}</h5>
                            <h5 className='Description'>High Quality Products</h5>
                            <p className="product-price">${product.price}</p>
                            <div className="overlay">
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                                    className="add-to-cart"
                                >
                                    Add to Cart
                                </button>
                                <div className="icons">
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faShareNodes} style={{ color: "#ffffff", marginRight: '5px' }} />
                                        <span style={{ color: "#ffffff" }}>Share</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faCodeCompare} style={{ color: "#ffffff", marginRight: '5px' }} />
                                        <span style={{ color: "#ffffff" }}>Compare</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faHeartSolid} style={{ color: "#ffffff", marginRight: '5px' }} />
                                        <span style={{ color: "#ffffff" }}>Like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="show-more-container">
                <button onClick={handleShowMore} className="show-more-button">Show More</button>
            </div>
        </div>
    );
};

export default Products;
