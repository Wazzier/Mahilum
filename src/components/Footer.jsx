import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#8fa3bf] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between space-x-8">
        {/* Customer Support */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Customer Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Shoe Care Tips
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Shipping Information
              </a>
            </li>
          </ul>
        </div>

        {/* Product Categories */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Product Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Men's Shoes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Women's Shoes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Kids' Shoes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Athletic Shoes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Sale Items
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">About Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Sustainability Promise
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Shoe Fitting Guide
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Personalized Recommendations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Gift Wrapping
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                Exclusive Events
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                <i className="fab fa-instagram"></i>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                <i className="fab fa-facebook"></i>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                <i className="fab fa-pinterest"></i>
                Pinterest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:bg-white hover:text-[#8fa3bf] transition px-2 py-1 rounded-md"
              >
                <i className="fab fa-twitter"></i>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        <p>&copy; 2024 Sole Style. Step Into Your Perfect Fit.</p>
      </div>
    </footer>
  );
};

export default Footer;
