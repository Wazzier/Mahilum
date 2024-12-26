import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = ({ setShowModal }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="flex flex-col items-center bg-[#3B3B3B] p-5 shadow-md">
      <div className="flex justify-between items-center w-full max-w-[1200px] mb-4">
        <div className="logo">
          <a className="text-2xl font-bold text-white no-underline">
            ShoeHaven
          </a>
        </div>

        <nav className="main-nav">
          <ul className="flex gap-5 list-none m-0">
            <li>
              <Link
                to="/"
                className="text-white text-lg hover:bg-white hover:text-[#3B3B3B] transition px-4 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/BestSeller"
                className="text-white text-lg hover:bg-white hover:text-[#3B3B3B] transition px-4 py-2 rounded-md"
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="text-white text-lg hover:bg-white hover:text-[#3B3B3B] transition px-4 py-2 rounded-md"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className="text-white text-lg hover:bg-white hover:text-[#3B3B3B] transition px-4 py-2 rounded-md"
              >
                Help
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowModal(true)}
                className="text-white text-lg hover:bg-white hover:text-[#3B3B3B] transition px-4 py-2 rounded-md"
              >
                Sign In
              </button>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-white text-lg hover:bg-white hover:text-[#3B3B3B] transition px-4 py-2 rounded-md"
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="search-bar w-full flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search for shoes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 px-4 py-2 text-lg border border-white rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B3B3B]"
        />
      </div>

      <nav className="secondary-nav">
        <ul className="flex gap-4 list-none">
          <li>
            <Link
              to="/mens-shoes"
              className="text-white text-sm hover:bg-white hover:text-[#3B3B3B] transition px-3 py-1 rounded-md"
            >
              Men's Shoes
            </Link>
          </li>
          <li>
            <Link
              to="/womens-shoes"
              className="text-white text-sm hover:bg-white hover:text-[#3B3B3B] transition px-3 py-1 rounded-md"
            >
              Women's Shoes
            </Link>
          </li>
          <li>
            <Link
              to="/kids-shoes"
              className="text-white text-sm hover:bg-white hover:text-[#3B3B3B] transition px-3 py-1 rounded-md"
            >
              Kids' Shoes
            </Link>
          </li>
          <li>
            <Link
              to="/new-arrivals"
              className="text-white text-sm hover:bg-white hover:text-[#3B3B3B] transition px-3 py-1 rounded-md"
            >
              New Arrivals
            </Link>
          </li>
          <li>
            <Link
              to="/sales"
              className="text-white text-sm hover:bg-white hover:text-[#3B3B3B] transition px-3 py-1 rounded-md"
            >
              Sales
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
