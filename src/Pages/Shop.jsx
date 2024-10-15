import React, { useEffect, useState } from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faCodeCompare, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../Pages/Context/CartContext';
import ShopCover from './ShopCover';
import { GiTrophyCup } from "react-icons/gi";
import { GrStatusGood } from 'react-icons/gr'; 
import { GoGift } from "react-icons/go";
import Footer from '../Components/Footer';
import { MdOutlineSupportAgent } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const ITEMS_PER_PAGE = 16;

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
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

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleProductClick = (id) => {
        navigate(`/singleproduct/${id}`);
    };

    const TrophyDisplay = () => {
        const trophyItems = [
            { title: "High Quality", subtitle: "Crafted from top materials", icon: <GiTrophyCup size={50} style={{ color: "black" }} /> },
            { title: "Warranty Protection", subtitle: "Over 2 years", icon: <GrStatusGood size={45} style={{ color: "black" }} /> },
            { title: "Free Shipping", subtitle: "Order over $150", icon: <GoGift size={40} style={{ color: "black" }} /> },
            { title: "24/7 Support", subtitle: "Dedicated support", icon: <MdOutlineSupportAgent size={45} style={{ color: "black" }} /> },
        ];

        return (
            
            <div style={{ background: "#F6EFBD", display: 'flex', justifyContent: 'space-between', padding: '80px' }}> 

                {trophyItems.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        {item.icon}
                        <div style={{ marginLeft: '10px' }}>
                            <div style={{ fontWeight: 'bold' }}>{item.title}</div>
                            <div style={{ color: 'gray' }}>{item.subtitle}</div>
                        </div>
                    </div>
                ))}
                 </div>
            
        );
    };

    return (
        <>
          <Navbar/>
            <ShopCover />
            <div>
                <h1 className='h1-products'>Our Products</h1>
                <div className="product-container">
                    <div className="product-grid">
                        {displayedProducts.map((product) => (
                            <div className="product-card" key={product.id} onClick={() => handleProductClick(product.id)}>
                                <img src={product.images[0]} alt={product.title} />
                                <h5>{product.title}</h5>
                                <h5 className='Description'>High Quality Products</h5>
                                <p className="product-price">${product.price}</p>
                                <div className="overlay">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                                        className="add-to-cart"
                                        aria-label={`Add ${product.title} to cart`}
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
                <div className="Pages">
 
    {(() => {
        const startPage = Math.max(1, currentPage - 1); 
        const endPage = Math.min(totalPages, startPage + 2); 

     
        const adjustedStartPage = Math.max(1, endPage - 2);

        return [...Array(endPage - adjustedStartPage + 1)].map((_, index) => {
            const pageNumber = adjustedStartPage + index;
            return (
                <button
                    key={pageNumber}
                    className={`Pages-button ${currentPage === pageNumber ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            );
        });
    })()}

    <button
        className={`Pages-button ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
    >
        Next
    </button>
</div>

                <TrophyDisplay />
            </div>
            <Footer />
        </>
    );
};

export default Shop;
