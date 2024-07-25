import React from 'react';
import { FiSearch, FiHelpCircle, FiUser, FiShoppingCart, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const pages = [
    { name: 'Search', icon: <FiSearch className="text-green-700 text-3xl" />, path: '/search' },
    { name: 'Help', icon: <FiHelpCircle className="text-green-700 text-3xl" />, path: '/help' },
    { name: 'MyAccount', icon: <FiUser className="text-green-700 text-3xl" />, path: '/myaccount' },
    { name: 'Cart', icon: <FiShoppingCart className="text-green-700 text-3xl" />, path: '/cart' },
  ];

  return (
    <>
      <nav className="p-4 flex justify-between items-center">
        <div className="flex items-center justify-center flex-grow md:flex-grow-0">
          <img src={require('../assets/logo-no-background.png')} alt="Dineco" className="w-32 h-8 md:mx-0 mx-auto" />
        </div>
        <div className="hidden md:flex items-center space-x-8 pr-4">
          {pages.map((page, index) => (
            <Link key={index} to={page.path}>
              {page.icon}
            </Link>
          ))}
        </div>
      </nav>
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-green-900 p-4 flex justify-around items-center">
        <Link to="/">
          <FiHome className="text-white text-2xl" />
        </Link>
        <Link to="/myaccount">
          <FiUser className="text-white text-2xl" />
        </Link>
        <Link to="/search">
          <FiSearch className="text-white text-2xl" />
        </Link>
        <Link to="/cart">
          <FiShoppingCart className="text-white text-2xl" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
