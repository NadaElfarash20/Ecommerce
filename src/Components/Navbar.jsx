import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useRef, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartDropdown from "../Pages/CartDropdown";
import { useCart } from '../Pages/Context/CartContext';
import './Navbar.css';


function Navbar() {
  const navItemStyle = { marginLeft: '20px', fontSize: '18px' };
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev); 
  };

  const navigateToCart = () => {
    navigate('/cart');
    setDropdownVisible(false); 
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-0 m-0">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" style={{ width: '80px', marginRight: '5px' }} />
            <span className="ms-2" style={{ fontSize: '30px', letterSpacing: '5px', fontWeight: 'bold' }}>Furniro</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setVisible(!visible)}
            aria-controls="navbarNav"
            aria-expanded={visible}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`collapse navbar-collapse ${visible ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            {['/', '/shop', '/about', '/contacts', ].map((path, index) => (
              <li className="nav-item" key={index} style={navItemStyle}>
                <NavLink to={path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='d-flex align-items-center gap-5'>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={farHeart} />
            <div style={{ position: 'relative' }}>
              <FontAwesomeIcon 
                icon={faShoppingCart} 
                style={{ marginRight: '8px', cursor: 'pointer' }} 
                onClick={toggleDropdown} 
              />
              {dropdownVisible && (
                <div ref={dropdownRef}>
                  <CartDropdown navigateToCart={navigateToCart} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;