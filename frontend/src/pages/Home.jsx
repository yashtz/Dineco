import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Home = () => {
  const [sortBy, setSortBy] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVegSelected, setIsVegSelected] = useState(false);
  const [isNonVegSelected, setIsNonVegSelected] = useState(false);

  const sortOptions = [
    'Price: Low to High',
    'Price: High to Low',
    'Delivery Time',
    'Rating'
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSortBy(option);
    setIsDropdownOpen(false);
  };

  const toggleVegSelection = () => {
    setIsVegSelected(!isVegSelected);
    setIsNonVegSelected(false);
  };

  const toggleNonVegSelection = () => {
    setIsNonVegSelected(!isNonVegSelected);
    setIsVegSelected(false);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Discover Restaurants Using <span className="text-green-700">Dineco</span> in <span className="text-green-700 italic">Aurangabad</span>
      </h1>
      <div className="flex space-x-4 mb-4">
        <div className="relative">
          <button 
            onClick={toggleDropdown} 
            className="bg-gray-200 px-4 py-2 rounded-full flex items-center space-x-2"
          >
            <span>Sort By</span>
            <FiChevronDown />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg">
              {sortOptions.map((option, index) => (
                <div 
                  key={index} 
                  onClick={() => handleOptionClick(option)}
                  className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100"
                >
                  <span>{option}</span>
                  <span 
                    className={`w-4 h-4 border rounded-full ${sortBy === option ? 'bg-green-700 border-green-700' : 'border-gray-400'}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <button 
          onClick={toggleVegSelection}
          className={`px-4 py-2 rounded-full ${isVegSelected ? 'bg-green-500 text-white' : 'bg-gray-200 text-green-500'}`}
        >
          Veg
        </button>
        <button 
          onClick={toggleNonVegSelection}
          className={`px-4 py-2 rounded-full ${isNonVegSelected ? 'bg-red-600 text-white' : 'bg-gray-200 text-red-700'}`}
        >
          Non-Veg
        </button>
      </div>
    </div>
  );
};

export default Home;
