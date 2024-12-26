import React, { useState, useEffect } from 'react';

const SignInModal = ({ showModal, setShowModal }) => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  useEffect(() => {
    // Close modal on outside click
    const closeOnOutsideClick = (e) => {
      if (e.target === e.currentTarget) {
        setShowModal(false);
      }
    };

    // Lock scroll when modal is open
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal, setShowModal]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowModal(false);
        }
      }}
      style={{ zIndex: 9999 }}  
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-500 scale-90 sm:scale-100">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f8b097]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle between password and text
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f8b097]"
              />
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                className="mr-2"
                onChange={() => setShowPassword(!showPassword)} // Toggle showPassword state
              />
              <label htmlFor="showPassword" className="text-sm text-gray-700">
                Show Password
              </label>
            </div>
          </div>

          <div className="mb-4 flex justify-between text-sm">
            <a href="#" className="text-[#f8b097]">Forgot Password?</a>
            <a href="#" className="text-[#f8b097]">Sign Up</a>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-[#f8b097] text-white py-2 px-4 rounded-md hover:bg-[#f0947c] transition"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
