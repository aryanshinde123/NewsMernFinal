import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-sm text-gray-600 space-x-4">
          <a href="#" className="hover:text-gray-800">© 2024 The Daily News India</a>
          <a href="#" className="hover:text-gray-800">Contact Us</a>
          <a href="#" className="hover:text-gray-800">Accessibility</a>
          <a href="#" className="hover:text-gray-800">Work with Us</a>
          <a href="#" className="hover:text-gray-800">Advertise</a>
          <a href="#" className="hover:text-gray-800">Brand Studio</a>
          <a href="#" className="hover:text-gray-800">Your Ad Choices</a>
          <a href="#" className="hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800">Terms of Service</a>
          <a href="#" className="hover:text-gray-800">Terms of Sale</a>
          <a href="#" className="hover:text-gray-800">Site Map</a>
          <a href="#" className="hover:text-gray-800">Help</a>
          <a href="/subscribe" className="hover:text-gray-800">Subscriptions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;