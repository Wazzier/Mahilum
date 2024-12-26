import React from "react";

const BestSeller = () => {
  return (
    <main className="min-h-screen bg-[#eef3f9] p-6">
      <h1 className="text-3xl font-bold text-gray-700">Top Shoes</h1>
      <p className="mt-4 text-lg text-gray-600">
        Discover our best-selling footwear for every occasion!
      </p>

      {/* Shoes Cards Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Running Shoes */}
        <article className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <a href="#" className="block">
            <img
              src="img/running-shoes.jpg" // Use your own image source here
              alt="Running Shoes"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Running Shoes</h3>
              <p className="text-lg font-bold text-gray-600 mt-2">₱2,999</p>
            </div>
          </a>
        </article>

        {/* Formal Shoes */}
        <article className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <a href="#" className="block">
            <img
              src="img/formal-shoes.jpg" // Use your own image source here
              alt="Formal Shoes"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Formal Shoes</h3>
              <p className="text-lg font-bold text-gray-600 mt-2">₱3,499</p>
            </div>
          </a>
        </article>

        {/* Sneakers */}
        <article className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <a href="#" className="block">
            <img
              src="img/sneakers.jpg" // Use your own image source here
              alt="Sneakers"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Casual Sneakers</h3>
              <p className="text-lg font-bold text-gray-600 mt-2">₱2,499</p>
            </div>
          </a>
        </article>

        {/* Sandals */}
        <article className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <a href="#" className="block">
            <img
              src="img/sandals.jpg" // Use your own image source here
              alt="Sandals"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Comfort Sandals</h3>
              <p className="text-lg font-bold text-gray-600 mt-2">₱1,499</p>
            </div>
          </a>
        </article>

        {/* Add more articles for other shoe types */}
      </div>
    </main>
  );
};

export default BestSeller;
