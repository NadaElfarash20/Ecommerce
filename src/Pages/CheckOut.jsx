// src/CheckOut.jsx
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom'; 
import img from '../assets/img/cover.jpg'; 
import logo from '../assets/img/logo.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckOut.css'; 
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { GrStatusGood } from 'react-icons/gr'; 
import { GoGift } from "react-icons/go";
import Footer from '../Components/Footer';

const CheckOut = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    address2: '',
    country: '',
    state: '',
    zip: '',
    sameAddress: false,
    saveInfo: false,
    paymentMethod: 'credit',
    ccName: '',
    ccNumber: '',
    ccExpiration: '',
    ccCvv: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
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
    <div>
      <Navbar />
      <div className="cartcover-container" style={{ position: 'relative' }}>
        <figure className="cartcover-image">
          <img src={img} alt="Cover" className="cartcover-img" style={{ width: '100%', height: '50vh' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: '80px', marginBottom: '10px' }} />
            <figcaption className="cartcover-text" style={{ marginTop: '30px' }}>CheckOut</figcaption>
          </div>
          <div className="cartnav-text" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
            <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link> &gt; 
            <Link to="/checkout" style={{ color: 'black', textDecoration: 'none' }}> CheckOut</Link>
          </div>
        </figure>
      </div>

      <div className="container py-5">
        <div className="text-center">
    
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span style={{ color: 'Gold' }}>Cart</span>
             
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Products</h6>
                 
                </div>
                <span className="text-muted">Subtitle</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Asgaard sofa</h6>
                
                </div>
                <span className="text-muted">Rs. 250,000.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Subtotal</h6>
              
                </div>
                <span className="text-muted">Rs. 250,000.00</span>
              </li>
            
              <li className="list-group-item d-flex justify-content-between">
                <span>Tota</span>
                <strong style={{ fontSize: '24px', color: 'gold' }}>Rs. 250,000.00</strong>

              </li>
            </ul>

            <div className="my-3">
  <div className="form-check">
    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" value="credit" checked={formData.paymentMethod === 'credit'} onChange={handleChange} required />
    <label className="form-check-label" htmlFor="credit">Credit Bank Transfer</label>
    <br/>
    <span style={{ fontSize: '12px', color: 'lightgray' }}>
  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
</span>
  </div>
  <div className="form-check">
    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" value="debit" checked={formData.paymentMethod === 'debit'} onChange={handleChange} required />
    <label style={{ color: 'gray' }} className="form-check-label" htmlFor="debit">Direct Bank Transfer</label>
  </div>
  
  <div className="form-check">
    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" value="debit" checked={formData.paymentMethod === 'debit'} onChange={handleChange} required />
    <label style={{ color: 'gray' }} className="form-check-label" htmlFor="debit">Cash On Delivery</label>
  </div>
</div>
<span style={{ fontSize: '12px', color: 'black' }}>
  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
</span>

            <form className="card p-2">
                
            <div className="input-group justify-content-center">
  <button type="submit" className="btn btn-light">Place order</button>
</div>

            </form>
       


          </div>

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing details</h4>
            <form className="needs-validation" onSubmit={handleSubmit} novalidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  <div className="invalid-feedback">Valid first name is required.</div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  <div className="invalid-feedback">Valid last name is required.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="comoany" className="form-label">Company <span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="company" name="company" value={formData.company} onChange={handleChange} />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country/Region</label>
                  <select className="form-select" id="country" name="country" value={formData.country} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option>Egypt</option>
                    <option>India</option>
                    <option>Syria</option>
                    <option>China</option>
                  </select>
                  <div className="invalid-feedback">Please select a valid country.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="street" className="form-label">Street Adress</label>
                  <input type="text" className="form-control" id="street" name="street" value={formData.street} onChange={handleChange} required />
                  <div className="invalid-feedback">Please enter your  street.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="town" className="form-label">Town/City</label>
                  <input type="text" className="form-control" id="town" name="town" value={formData.town} onChange={handleChange} required />
                  <div className="invalid-feedback">Please enter your shipping town.</div>
                </div>

                <div className="col-md-5">
                  <label htmlFor="province" className="form-label">Province</label>
                  <select className="form-select" id="province" name="province" value={formData.province} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option>Giza</option>
                    <option>Elmenofia</option>
                    <option>Damitta</option>

                  </select>
                  <div className="invalid-feedback">Please select a valid Province.</div>
                </div>
            
            
    


                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">Zip Code</label>
                  <input type="text" className="form-control" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div> 
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                  <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                </div> 
                <div className="col-12">
  <label htmlFor="additionalInfo" className="form-label">Additional Information <span className="text-muted">(Optional)</span></label>
  <input type="text" className="form-control" id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
</div>
                


              

           
        

         
            

               

              <hr className="my-4" />
   
            </form>
          </div>
        </div>
      </div>
      <br/> <br/> 

            <TrophyDisplay />
            <Footer/>
    </div>


  );
};

export default CheckOut;
