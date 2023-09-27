import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const take= function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div>
    <div className='top' onClick={()=>{take()}}>Back to Top </div>
    <div className='Footer'>

      <div className='col1'>
        <li className='head'>Get to Know Us</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>About Amazon</li>
        <li>Investor Realtions</li>
        <li>Amazon Devices</li>
        <li>Amazon Services</li>
      </div>
      <div className='col2'>
        <li className='head'>	
Make Money with Us</li>
        <li>Sell products on Amazon</li>
        <li>Sell on Amazon Business</li>
        <li>Sell apps on Amazon</li>
        <li>Become an Affiliate</li>
        <li>Advertise Your Products</li>
        <li>Self-Publish with Us</li>
      </div>
      <div className='col3'>
        <li className='head'>	
Amazon Payment Products</li>
        <li>Amazon Business Card</li>
        <li>Shop with Points</li>
        <li>Reload Your Balance</li>
        <li>Amazon Currency Converter</li>
      </div>
      <div className='col4'>
        <li className='head'>Let Us Help You</li>
        <li>Your Account</li>
        <li>Your Orders</li>
        <li>Shipping Rates & Policies</li>
        <li>Returns & Replacements</li>
        <li>Amazon Assistant</li>
        <li>Help</li>
      </div>

      
    </div>
    </div>
  )
}

export default Footer
