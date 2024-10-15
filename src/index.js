import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import { CartProvider } from './Pages/Context/CartContext'; // Adjust the path if needed
import Home from './Pages/Home';
import SingleProduct from './Components/SingleProduct'
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Contacts from "./Pages/Contacts";
import CheckOut from './Pages/CheckOut';
const RootApp = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/singleproduct/:id" element={<SingleProduct />} />

            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CartProvider>
            <RootApp />
        </CartProvider>
    </React.StrictMode>
);

reportWebVitals();
