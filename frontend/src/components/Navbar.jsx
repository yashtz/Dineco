import React, { useState, useEffect } from 'react';
import { FiSearch, FiHelpCircle, FiUser, FiShoppingCart, FiHome, FiMapPin, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [locationInput, setLocationInput] = useState('');

  const toggleLocationMenu = () => {
    setIsLocationMenuOpen(!isLocationMenuOpen);
  };

  const handleClearInput = () => {
    setLocationInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsLocationMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isLocationMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLocationMenuOpen]);

  const pages = [
    { name: 'Search', icon: <FiSearch className="text-green-700 text-3xl" />, path: '/search' },
    { name: 'Help', icon: <FiHelpCircle className="text-green-700 text-3xl" />, path: '/help' },
    { name: 'MyAccount', icon: <FiUser className="text-green-700 text-3xl" />, path: '/myaccount' },
    { name: 'Cart', icon: <FiShoppingCart className="text-green-700 text-3xl" />, path: '/cart' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={require('../assets/logo-no-background.png')} alt="Dineco" className="w-32 h-8" />
          <button onClick={toggleLocationMenu} className="hidden md:block text-green-700 text-3xl ml-4">
            <FiMapPin />
          </button>
        </div>
          <div className="hidden md:flex items-center space-x-8 pr-4">
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="text-green-700 text-3xl transform transition-transform duration-100 hover:scale-125"
              >
            {page.icon}
            </Link>
            ))}
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
            className="border border-gray-300 p-2 mb-4 rounded w-full"
          />
          {locationInput && (
            <button
              className="bg-green-700 text-white p-2 rounded mb-4"
              onClick={handleClearInput}
            >
              Clear
            </button>
          )}
        </div>
      )}

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed inset-x-0 top-0 p-4 flex justify-between items-center bg-white">
        <div className="flex items-center justify-center flex-grow md:flex-grow-0">
          <img src={require('../assets/logo-no-background.png')} alt="Dineco" className="w-32 h-8 mx-auto" />
        </div>
        <button onClick={toggleLocationMenu} className="text-green-700 text-3xl">
          <FiMapPin />
        </button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-green-900 p-4 flex justify-around items-center">
        <Link to="/">
          <FiHome className="text-white text-2xl" />
        </Link>
        <Link to="/search">
          <FiSearch className="text-white text-2xl" />
        </Link>
        <Link to="/myaccount">
          <FiUser className="text-white text-2xl" />
        </Link>
        <Link to="/cart">
          <FiShoppingCart className="text-white text-2xl" />
        </Link>
      </div>

      {/* Mobile Location Menu */}
      {isLocationMenuOpen && window.matchMedia('(max-width: 768px)').matches && (
        <div className="fixed inset-0 bg-white p-4 flex flex-col z-50">
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
            className="border border-gray-300 p-2 mb-4 rounded w-full"
          />
          {locationInput && (
            <button
              className="bg-green-700 text-white p-2 rounded mb-4"
              onClick={handleClearInput}
            >
              Clear
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
