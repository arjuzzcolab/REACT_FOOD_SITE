import React from 'react';
import twitter from '../assets/twitter.png';
import insta from '../assets/instagram.png';
import fb from '../assets/facebook.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 mt-10 w-[700px] md:w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        
        <div className="text-center md:text-left md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">About Foodie</h3>
          <p className="text-sm font-semibold">
            Foodie is your one-stop solution to satisfy all your cravings. From burgers to pasta, discover and order from a wide variety of delicious meals. Quality food, quick delivery, and excellent service, just for you!
          </p>
        </div>

        <div className="text-center md:text-right md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm">123 Foodie Street, Flavor Town</p>
          <p className="text-sm">123 456 789</p>
          <p className="text-sm">support@foodie.com</p>
          <div className="flex justify-center md:justify-end mt-4 space-x-4">
            <button className="hover:text-yellow-500 bg-white rounded-lg p-1 hover:bg-slate-300" aria-label="Facebook">
              <img src={fb} className="w-6 h-5" alt="Facebook" />
            </button>
            <button className="hover:text-yellow-500 bg-white rounded-lg p-1 hover:bg-slate-300" aria-label="Instagram">
              <img src={insta} className="w-6 h-5" alt="Instagram" />
            </button>
            <button className="hover:text-yellow-500 bg-white rounded-lg p-1 hover:bg-slate-300" aria-label="Twitter">
              <img src={twitter} className="w-6 h-5" alt="Twitter" />
            </button>
          </div>
        </div>
      </div>

  
      <div className="container mx-auto text-center text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Foodie. All rights reserved. | <a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a> | <a href="/terms-conditions" className="hover:text-yellow-500">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
