import React from 'react';
import { FiX } from 'react-icons/fi';

const LoginModal = ({ isOpen, onClose, onNavigateToSignup }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white p-8 rounded-lg shadow-lg ${window.innerWidth >= 768 ? 'w-1/2 max-w-lg' : 'w-full h-full'}`}>
        {/* Close Button */}
        <button
          className="text-green-700 text-2xl float-right"
          onClick={onClose}
        >
          <FiX />
        </button>

        {/* Login Title */}
        <h2 className={`text-left ${window.innerWidth >= 768 ? 'text-4xl' : 'text-3xl'} font-bold text-green-700 font-lato`}>
          Log in
        </h2>

        {/* Email Icon */}
        <div className="mt-6 mb-6 flex justify-center">
          <img
            src={require('../assets/images/email-icon.png')}
            alt="Email Icon"
            className="w-24 h-22" // Adjust size as needed
          />
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-4 rounded text-lg w-full focus:outline-none focus:ring-2 focus:ring-green-700 mb-5 font-lato"
        />

        {/* OTP Button */}
        <button
          className="w-full bg-green-700 text-white p-3 rounded text-lg transition duration-200 ease-in-out hover:bg-green-800 font-lato"
        >
          Send One-Time Password
        </button>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Signup Prompt */}
        <p className="text-center text-lg font-lato">
          New to Dinvos?{' '}
          <span
            className="text-green-700 cursor-pointer font-bold"
            onClick={() => {
              onClose(); // Close the login modal
              onNavigateToSignup(); // Open the signup modal
            }}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;