import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdStarRate } from "react-icons/md";
import './SingleProduct.css';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { RxDividerVertical } from "react-icons/rx";
import { IoIosStarHalf } from "react-icons/io";
import Products from '../Components/Products'; 
import Footer from './Footer';
import { useCart } from '../Pages/Context/CartContext'; 



const SingleProduct = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]); 
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart(); 

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
               
                await fetchRelatedProducts(data.categoryId);
            } catch (error) {
                console.error('Failed to fetch product:', error);
            }
        };

        const fetchRelatedProducts = async (categoryId) => {
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}`);
                const data = await response.json();
                if (Array.isArray(data)) {
                    setRelatedProducts(data);
                } else {
                    console.error('Unexpected response format:', data);
                    setRelatedProducts([]);
                }
            } catch (error) {
                console.error('Failed to fetch related products:', error);
                setRelatedProducts([]);
            }
        };

        fetchProduct();
    }, [id]);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCart = () => {
        if (product) {
            const newItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: quantity,
            };
            addToCart(newItem); 
           
        }
    };

    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <Navbar /> 
            <div className='beige'></div>
            <div className="singleproduct-container">
                <div className="thumbnails">
                    {product.images.slice(0, 4).map((image, index) => (
                        <img key={index} src={image} alt={product.title} className="thumbnail" />
                    ))}
                </div>
                <div className="singleproduct-image">
                    <img src={product.images[0]} alt={product.title} />
                </div>
                <div className="singleproduct-details">
                    <h1>{product.title}</h1>
                    <p className="singleproduct-price">${product.price}</p>
                    <div className='Stars' style={{ color: 'gray', fontSize: '10px' }}>
                        <MdStarRate style={{ width: '30px', height: '30px', color: 'gold', marginBottom: '10px' }} />
                        <MdStarRate style={{ width: '30px', height: '30px', color: 'gold', marginBottom: '10px' }} />
                        <MdStarRate style={{ width: '30px', height: '30px', color: 'gold', marginBottom: '10px' }} />
                        <MdStarRate style={{ width: '30px', height: '30px', color: 'gold', marginBottom: '10px' }} />
                        <IoIosStarHalf style={{ width: '30px', height: '30px', color: 'gold', marginBottom: '10px' }} />
                        <RxDividerVertical style={{ margin: '0 10px', color: 'Gray' }} />
                        Customer Review
                    </div>
                    <p>{product.description}</p>
                    <span className='size' style={{ marginTop: '0px', display: 'block', color: 'gray' }}> Size </span>
                    <div className='sizes' style={{ display: 'flex', gap: '5px' }}> 
                        <button className='size-button' type="button">L</button>
                        <button className='size-button' type="button">XL</button>
                        <button className='size-button' type="button">XS</button>
                    </div>
                    <span className='size' style={{ marginTop: '5px', display: 'block', color: 'gray' }}> Color </span>
                    <div className='sizes' style={{ display: 'flex', gap: '5px' }}> 
                        <button className='color1-button' type="button"></button>
                        <button className='color2-button' type="button"></button>
                        <button className='color3-button' type="button"></button>
                    </div>
                    <div className="singleproduct-buttons">
                        <div className="quantity-button">
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                        <button className="singleproduct-button" onClick={handleAddToCart}>Add to Cart</button>
                        <button className="singleproduct-button">Compare</button>
                    </div>
                    <hr className="divider" /> 
                    <div className="container">
                        <div className="column">
                            <p>SKU</p>
                            <p>Category</p>
                            <p>Tags</p>
                            <p>Share</p>
                        </div>
                        <div className="column2">
                            <p>:SS001</p>
                            <p>:Sofas</p>
                            <p>: Sofa, Chair, Home, Shop</p>
                            <p style={{ display: 'flex', alignItems: 'center' }}>
                                :<FontAwesomeIcon icon={faFacebook} style={{ color: "#000000", marginRight: '15px' }} />
                                <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#000000", marginRight: '15px' }} />
                                <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '15px', color: 'black' }} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='D'>
                <div className='three-words'>
                    <span>Description</span>
                    <span>Additional Information</span>
                    <span>Reviews [5]</span>
                </div>
                <div className='speaker-description'>
                    <span className='span1'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and</span>
                    <span className='span2'>sound of Marshall, unplugs the chords, and takes the show on the road.</span>
                </div>
            </div>
            <div className='two-img' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                <img src={product.images[0]} alt={product.title} style={{ width: '25%', margin: '0 10px' }} />
                <img src={product.images[1]} alt={product.title} style={{ width: '25%', margin: '0 10px' }} />
            </div>
            <br/><br/><br/>
            <Products relatedProducts={relatedProducts} /> 
            <Footer />
        </div>
    );
};

export default SingleProduct;
