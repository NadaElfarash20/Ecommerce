import React from 'react';
import Navbar from '../Components/Navbar';
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { GrStatusGood } from 'react-icons/gr'; 
import { GoGift } from "react-icons/go";
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import img from '../assets/img/cover.jpg';
import logo from '../assets/img/logo.png';
import './Contacts.css';

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

const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className="cartcover-container">
        <figure className="cartcover-image">
          <img src={img} alt="Cover" className="cartcover-img" />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: '80px', marginBottom: '10px' }} />
            <figcaption className="cartcover-text" style={{ marginTop: '30px' }}>Contacts</figcaption>
          </div>
          <div className="cartnav-text" style={{ marginTop: '30px' }}>
            <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link> &gt; 
            <Link to="/cart" style={{ color: 'black', textDecoration: 'none' }}> Contacts</Link>
          </div>
        </figure>
      </div>

      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
            <div className="col-12 col-lg-6 text-center">
              <h2 className="h1 mb-3">Get in touch</h2>
              <p className="lead fs-4 text-secondary mb-5">
                We're always on the lookout to work with new clients. If you're interested in working with us, please get in touch in one of the following ways.
              </p>
              <ContactInfo />
              <OpeningHours />
            </div>
            <div className="col-12 col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <TrophyDisplay />
      <Footer />
    </>
  );
};

const ContactInfo = () => (
  <>
    <div className="d-flex mb-5">
      <div className="me-4 text-primary">
        <LocationIcon />
      </div>
      <div>
        <h4 className="mb-3">Address</h4>
        <address className="mb-0 text-secondary">236 5th SE Avenue, New York, NY 10000, United States</address>
      </div>
    </div>
    <div className="row mb-5">
      <div className="col-12 col-sm-6">
        <ContactDetail 
          icon={<PhoneIcon />} 
          title="Phone" 
          content={
            <>
              <a className="link-secondary text-decoration-none" href="tel:+8455466789">+(84) 546-6789</a>, 
              <span className="text-secondary"> </span> <hr/>
              <a className="link-secondary text-decoration-none" href="Hotline: +(84) 456-6789">+(84) 456-6789</a>
            </>
          } 
        />
      </div>
    </div>
  </>
);

const OpeningHours = () => (
  <div className="d-flex">
    <div className="me-4 text-primary">
      <ClockIcon />
    </div>
    <div>
      <h4 className="mb-3">Working Time</h4>
      <div className="d-flex mb-1">
        <p className="text-secondary fw-bold mb-0 me-5">Monday-Friday: 9:00 - 22:00</p>
      </div>
      <div className="d-flex">
        <p className="text-secondary mb-0">Saturday-Sunday: 9:00 - 21:00</p>
      </div>
    </div>
  </div>
);

const ContactDetail = ({ icon, title, content }) => (
  <div className="d-flex mb-5 mb-sm-0">
    <div className="me-4 text-primary">
      {icon}
    </div>
    <div>
      <h4 className="mb-3">{title}</h4>
      <p className="mb-0">{content}</p>
    </div>
  </div>
);

const ContactForm = () => (
  <div className="bg-white border rounded shadow-sm overflow-hidden">
    <form action="#!">
      <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
        <div className="col-12">
          <InputField label="Full Name" required />
        </div>
        <div className="col-12">
          <InputField label="Email" type="email" required />
        </div>
        <div className="col-12">
          <InputField label="Phone Number" type="tel" />
        </div>
        <div className="col-12">
          <InputField label="Subject" required />
        </div>
        <div className="col-12">
          <TextAreaField label="Message" required />
        </div>
        <div className="col-12">
          <div className="d-grid">
            <button className="btn btn-lg" style={{ backgroundColor: 'gold', color: 'black' }} type="submit">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

const InputField = ({ label, type = "text", required = false }) => (
  <div className="col-12">
    <label className="form-label">{label} {required && <span className="text-danger">*</span>}</label>
    <input type={type} className="form-control" required={required} />
  </div>
);

const TextAreaField = ({ label, required = false }) => (
  <div className="col-12">
    <label className="form-label">{label} {required && <span className="text-danger">*</span>}</label>
    <textarea className="form-control" rows="3" required={required}></textarea>
  </div>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-geo" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.108.108.206.23.274.372l.75 1.49a2.045 2.045 0 0 0 .368.473l2.332-.58a1.678 1.678 0 0 1 1.407.34l2.307 1.794a.678.678 0 0 1 .063 1.015l-1.034 1.034a1.678 1.678 0 0 1-1.77.45 16.685 16.685 0 0 1-6.464-4.354 16.686 16.686 0 0 1-4.354-6.464 1.678 1.678 0 0 1 .45-1.77l1.034-1.034z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-clock" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 1 .5.5v4.793l3.146 3.146a.5.5 0 0 1-.707.707l-3.5-3.5a.5.5 0 0 1-.146-.354V4a.5.5 0 0 1 .5-.5zm0 10a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-1a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
  </svg>
);

export default Contacts;
