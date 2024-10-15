import React from 'react';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import './ShopNav.css'; 
import { TbMinusVertical } from "react-icons/tb";
import { PiDotsNineBold } from "react-icons/pi"
import Footer from '../Components/Footer'
import { IoMenuOutline } from "react-icons/io5";
function ShopNav() {
    return (
        <div className='navdiv'>
    <nav className="navbar1">
        <div className="left-icons">
            <div className="filter-item">
                <HiAdjustmentsHorizontal /> Filter
            </div>
            <div className='Dots'>
                <PiDotsNineBold />
            </div>
            <div className='Line'>
                <IoMenuOutline />
            </div>
            <div className='VLine'>
                <TbMinusVertical /> <span className='span1'> Showing 1–16 of 32 results </span>
            </div>
        </div>
        <div className="right-icons">
            <div className="notification-container">
                <span className="notification-text">Show</span>
                <span className="notification-badge">16</span>
            </div>     
            <div className="notification2-container">
                <span className="notification2-text">Short by</span>
                <span className="notification2-badge">Default</span>
            </div>
        </div>
    </nav>
 
</div>

    );
}

export default ShopNav;
