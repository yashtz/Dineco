import React, { useState, useEffect } from 'react';
import { FiSearch, FiHelpCircle, FiUser, FiShoppingCart, FiHome, FiMapPin, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import LoginModal from '../modals/LoginModal'; // Import the LoginModal component
import SignupModal from '../modals/SignupModal'; // Import the SignupModal component

const Navbar = () => {
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [locationInput, setLocationInput] = useState('');
  const location = useLocation();

  const toggleLocationMenu = () => {
    setIsLocationMenuOpen((prev) => !prev);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen((prev) => !prev);
  };

  const handleClearInput = () => {
    setLocationInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsLocationMenuOpen(false);
      setIsLoginModalOpen(false);
      setIsSignupModalOpen(false); // Close the signup modal on Escape
    }
  };

  useEffect(() => {
    if (isLocationMenuOpen || isLoginModalOpen || isSignupModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLocationMenuOpen, isLoginModalOpen, isSignupModalOpen]);

  const pages = [
    { name: 'Search', icon: <FiSearch className="text-green-700 text-3xl" />, path: '/search' },
    { name: 'Help', icon: <FiHelpCircle className="text-green-700 text-3xl" />, path: '/help' },
    { name: 'MyAccount', icon: <FiUser className="text-green-700 text-3xl" />, path: '#' }, // Set path to '#' since it opens modal
    { name: 'Cart', icon: <FiShoppingCart className="text-green-700 text-3xl" />, path: '/cart' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src={require('../assets/images/logo-no-background.png')} alt="Dineco" className="w-32 h-8" />
            </Link>
            <button
              onClick={toggleLocationMenu}
              className="text-green-700 text-3xl hidden md:block transform transition-transform duration-100 hover:scale-125"
            >
              <FiMapPin />
            </button>
          </div>
          <div className="flex items-center space-x-8">
            {pages.map((page, index) => (
              page.path === '#' ? (
                <button
                  key={index}
                  onClick={toggleLoginModal}
                  className="text-green-700 text-3xl transform transition-transform duration-100 hover:scale-125"
                >
                  {page.icon}
                </button>
              ) : (
                <Link
                  key={index}
                  to={page.path}
                  className="text-green-700 text-3xl transform transition-transform duration-100 hover:scale-125"
                >
                  {page.icon}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop Location Menu */}
      {isLocationMenuOpen && !window.matchMedia('(max-width: 768px)').matches && (
        <div className="fixed inset-y-0 left-0 bg-white shadow-lg w-1/3 p-4 z-50 flex flex-col">
          <button
            className="text-green-700 text-3xl self-start mb-4"
            onClick={toggleLocationMenu}
          >
            <FiX />
          </button>
          <input
            type="text"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            placeholder="Search your area"
            className="font-lato border border-gray-300 p-2 mb-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {locationInput && (
            <button
              className="font-lato bg-green-700 text-white p-2 rounded mb-4"
              onClick={handleClearInput}
            >
              Clear
            </button>
          )}
        </div>
      )}

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed inset-x-0 top-0 p-4 flex justify-between items-center bg-white shadow-md">
        <Link to="/" className="flex items-center justify-center flex-grow md:flex-grow-0">
          <img src={require('../assets/images/logo-no-background.png')} alt="Dineco" className="w-32 h-8 mx-auto" />
        </Link>
        <button
          onClick={toggleLocationMenu}
          className="text-green-700 text-3xl transform transition-transform duration-100 hover:scale-125"
        >
          <FiMapPin />
        </button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-green-900 p-4 flex justify-around items-center shadow-md">
        <Link
          to="/"
          className={`flex items-center justify-center p-2 rounded-full ${isActive('/') ? 'bg-white' : 'bg-transparent'} ${isActive('/') ? 'text-green-900' : 'text-white'}`}
        >
          <FiHome className="text-2xl" />
        </Link>
        <Link
          to="/search"
          className={`flex items-center justify-center p-2 rounded-full ${isActive('/search') ? 'bg-white' : 'bg-transparent'} ${isActive('/search') ? 'text-green-900' : 'text-white'}`}
        >
          <FiSearch className="text-2xl" />
        </Link>
        <button
          onClick={toggleLoginModal}
          className={`flex items-center justify-center p-2 rounded-full ${isActive('/myaccount') ? 'bg-white' : 'bg-transparent'} ${isActive('/myaccount') ? 'text-green-900' : 'text-white'}`}
        >
          <FiUser className="text-2xl" />
        </button>
        <Link
          to="/cart"
          className={`flex items-center justify-center p-2 rounded-full ${isActive('/cart') ? 'bg-white' : 'bg-transparent'} ${isActive('/cart') ? 'text-green-900' : 'text-white'}`}
        >
          <FiShoppingCart className="text-2xl" />
        </Link>
      </div>

      {/* Mobile Location Menu */}
      {isLocationMenuOpen && window.matchMedia('(max-width: 768px)').matches && (
        <div className="fixed inset-y-0 left-0 bg-white shadow-lg w-full p-4 z-50 flex flex-col">
          <button
            className="text-green-700 text-3xl self-start mb-4"
            onClick={toggleLocationMenu}
          >
            <FiX />
          </button>
          <input
            type="text"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            placeholder="Search your area"
            className="font-lato border border-gray-300 p-2 mb-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {locationInput && (
            <button
              className="font-lato bg-green-700 text-white p-2 rounded mb-4"
              onClick={handleClearInput}
            >
              Clear
            </button>
          )}
        </div>
      )}

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={toggleLoginModal} 
        onNavigateToSignup={toggleSignupModal} 
      />
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={toggleSignupModal} 
        onNavigateToLogin={toggleLoginModal} 
      />
    </>
  );
};

export default Navbar;