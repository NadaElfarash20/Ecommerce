import React, { useEffect } from 'react';
import { useCart } from '../Pages/Context/CartContext';
import './Cart.css';
import Navbar from '../Components/Navbar';
import CartCover from './CartCover';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { GrStatusGood } from 'react-icons/gr'; 
import { GoGift } from "react-icons/go";
import Footer from '../Components/Footer';


const Cart = () => {
    const { cart, setCart, removeFromCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const calculateTotal = () => {
        return cart.reduce((acc, product) => {
            const price = product.price || 0;
            const quantity = product.quantity || 1;
            return acc + (price * quantity);
        }, 0);
    };

    const total = calculateTotal();

    const handleQuantityChange = (id, newQuantity) => {
        const quantity = Math.max(1, newQuantity);
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCart(updatedCart);
    };

    const handleCheckout = () => {
        navigate('/checkout'); 
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
            <Navbar />
            <CartCover />
            <div className="cartbeige">
                <span className='spans'>
                    <span className='b1'>Product</span>
                    <span className='b2'>Price</span>
                    <span className='b3'>Quantity</span>
                    <span className='b4'>Subtotal</span>
                </span>
            </div>
            <div className="cart-container">
                <div className="cart-box">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul className="cart-list">
                            {cart.map((product, index) => {
                                const price = product.price || 0;
                                const quantity = product.quantity || 1;
                                const subtotal = (price * quantity).toFixed(2);
                                const imageSrc = (product.images && product.images.length > 0)
                                    ? product.images[0]
                                    : 'default-image.jpg';

                                return (
                                    <li key={index} className="cart-item">
                                        <img src={imageSrc} alt={product.title} className="cart-image" />
                                        <span className="cart-title">{product.title}</span>
                                        <span className="cart-price">${price.toFixed(2)}</span>
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            className="cart-quantity"
                                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                                        />
                                        <span className="cart-total">${subtotal}</span>
                                        <button
                                            className="remove-button"
                                            onClick={() => removeFromCart(product.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
                <div className="cart-summary">
                    <h3>Cart Totals</h3>
                    <p className='p1'><span className='s1'>Subtotal</span> ${total.toFixed(2)}</p>
                    <p className='p2'><span className='s2'>Total</span> ${total.toFixed(2)}</p>
                    <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>

<br/> <br/> <br/> 

            <TrophyDisplay />
            
            <Footer />
        </>
    );
};

export default Cart;
