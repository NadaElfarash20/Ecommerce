import React from 'react';
import { useCart } from './Context/CartContext';
import './CartDropdown.css'; 

const CartDropdown = ({ navigateToCart }) => {
  const { cart = [], removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const handleIncrease = (productId) => {
    if (updateQuantity) {
      updateQuantity(productId, 1);
    }
  };

  const handleDecrease = (productId) => {
    if (updateQuantity) {
      updateQuantity(productId, -1);
    }
  };

  const totalQuantity = cart.reduce((total, product) => total + (product.quantity || 0), 0);
  const totalPrice = getTotalPrice();

  return (
    <div className="cart-dropdown">
      <h4>Shopping Cart</h4>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((product) => {
              const price = product.price || 0;
              const quantity = product.quantity || 1;

              return (
                <li key={product.id} className="cart-item">
                  <img src={product.images?.[0] || 'default-image.jpg'} alt={product.title} className="cart-image" />
                  <span>{product.title} - ${price.toFixed(2)} x {quantity}</span>
                  <button 
                    className="remove-button" 
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <h5 className="cart-total">Total: ${totalPrice.toFixed(2)}</h5>
        </>
      )}
      <div className="action-buttons">
        <div className="quantity-button">
          <button onClick={() => handleDecrease(cart[0]?.id)}>−</button>
          <span>{totalQuantity > 0 ? totalQuantity : 0}</span> 
          <button onClick={() => handleIncrease(cart[0]?.id)}>+</button>
        </div>
        <button className="Go" onClick={navigateToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
