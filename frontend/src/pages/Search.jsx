import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col items-center mt-8">
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <input 
            type="text" 
            placeholder="Search for food and restaurants" 
            className="font-lato w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <FiSearch className="absolute top-2 right-3 text-gray-400" size={24} />
        </div>
        <h1 className="font-lato font-black text-xl mt-4 md:    w-2/3 lg:w-1/2 ml-2">
          What are you in the mood for?
        </h1>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center mt-4">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search for food and restaurants" 
            className="font-lato w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <FiSearch className="absolute top-2 right-3 text-gray-400" size={24} />
        </div>
        <h2 className="font-lato text-lg font-black mt-6 w-full ml-2">
          What are you in the mood for?
        </h2>
      </div>
    </div>
  );
};

export default Search;
