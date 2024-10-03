import React from 'react';
import { FiX } from 'react-icons/fi';

const SignupModal = ({ isOpen, onClose, onNavigateToLogin }) => {
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

        {/* Signup Title */}
        <h2 className={`text-left ${window.innerWidth >= 768 ? 'text-4xl' : 'text-3xl'} font-bold text-green-700 font-lato`}>
          Sign up
        </h2>

        {/* Full Name Input */}
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 p-4 rounded text-lg w-full focus:outline-none focus:ring-2 focus:ring-green-700 mb-5 mt-6 font-lato"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-4 rounded text-lg w-full focus:outline-none focus:ring-2 focus:ring-green-700 mb-5 font-lato"
        />

        {/* Terms and Policy Text */}
        <p className="text-sm text-gray-600 mb-5">
          By continuing, you agree to our <span className="text-green-700 cursor-pointer">Terms of Service</span> & <span className="text-green-700 cursor-pointer">Privacy Policy</span>.
        </p>

        {/* Create Account Button */}
        <button
          className="w-full bg-green-700 text-white p-3 rounded text-lg transition duration-200 ease-in-out hover:bg-green-800 font-lato"
        >
          Create Account
        </button>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Login Prompt */}
        <p className="text-center text-lg font-lato">
          Already have an account?{' '}
          <span
            className="text-green-700 cursor-pointer font-bold"
            onClick={() => {
              onClose(); // Close the signup modal
              onNavigateToLogin(); // Open the login modal
            }}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;