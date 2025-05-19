// Purpose of the file:
// This file defines the Footer component, which displays the bottom section of the website.
// It includes the Google Developer Group logo and title, social media icons, navigation links, contact info, and copyright.

import React from 'react';
import facebook from '../assets/facebook-icon.svg';
import Instagram from '../assets/Instagram-icon.png';
import googlelogo from '../assets/GoogleDevelopersLogo.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 w-full h-[455px] flex flex-row">
      
      {/* Left section: GDG logo, title, and social media icons */}
      <div className="footer-left flex-1/2 flex flex-col m-3">
        
        {/* GDG Logo & Title */}
        <div className="GoogleLogo flex flex-row">
          <img src={googlelogo} alt="Google Developers Logo" />
          <div className="GDGTitle ml-6">
            <h2 className="text-lg font-sans font-normal text-[20px]">
              Google Developer Group
            </h2>
            <p className="ml-20 text-[15px] font-sans font-normal">VIT-AP</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-auto footer-left-bottom-social-media flex flex-row gap-6">
          <img className="w-[16px] h-[16px]" src={facebook} alt="Facebook Icon" />
          <img className="w-[16px] h-[16px]" src={Instagram} alt="Instagram Icon" />
        </div>
      </div>

      {/* Right section: Navigation links and contact info */}
      <div className="footer-right flex-1/2 flex flex-col m-3 mb-8">
        
        {/* Navigation Links */}
        <div className="footer-right-top-our-info flex flex-row justify-evenly">
          <div className="services">
            <h1 className="font-sans font-normal text-[12px] text-[#D3D8DE] mb-8">
              Services
            </h1>
            <p className="text-[14px]">Feedback Page</p>
          </div>

          <div className="info">
            <h1 className="font-sans font-normal text-[12px] text-[#D3D8DE] mb-8">
              Info
            </h1>
            <p className="text-[14px]">About us</p>
            <p className="text-[14px]">Our Team</p>
            <p className="text-[14px]">Events</p>
            <p className="text-[14px]">Home</p>
          </div>
        </div>

        {/* Contact Info & Copyright */}
        <div className="footer-right-bottom-our-info mt-auto flex flex-row justify-between">
          <div className="contact-email">
            <p>+91 0000000000</p>
            <p>gdg@vitapgmail.com</p>
          </div>
          <div className="text-[12px] font-normal font-sans text-[#D3D8DE] mt-auto">
            ©2025 - Copyright
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
