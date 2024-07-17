import React from 'react';
import { FiSearch, FiHelpCircle, FiUser, FiShoppingCart, FiHome } from 'react-icons/fi';
import { GiMeal } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex justify-between items-center">
        <div className="flex items-center justify-center flex-grow md:flex-grow-0">
          <img src={require('../assets/logo-no-background.png')} alt="Dineco" className="w-32 h-8 md:mx-0 mx-auto" />
        </div>
        <div className="hidden md:flex items-center space-x-8 pr-4"> 
          <FiSearch className="text-green-700 text-3xl" />
          <FiHelpCircle className="text-green-700 text-3xl" />
          <FiUser className="text-green-700 text-3xl" />
          <FiShoppingCart className="text-green-700 text-3xl" />
        </div>
      </nav>
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-green-900 p-4 flex justify-around items-center">
        <Link to="/">
          <FiHome className="text-white text-2xl" />
        </Link>
        <Link to="/food">
          <GiMeal className="text-white text-2xl" />
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
