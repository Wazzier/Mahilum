import React from 'react';

const Categories = () => {
  const categories = [
    {
      name: "Men's Shoes",
      description: "Explore our collection of premium men's footwear.",
      image: "img/s11.jpg", // Replace with actual image path
    },
    {
      name: "Women's Shoes",
      description: "Stylish and comfortable shoes for every woman.",
      image: "img/s12.jpg", // Replace with actual image path
    },
    {
      name: "Kids' Shoes",
      description: "Durable and fun shoes for kids of all ages.",
      image: "img/s13.jpg", // Replace with actual image path
    },
    {
      name: "Athletic Shoes",
      description: "Gear up with performance-driven athletic footwear.",
      image: "img/s14.avif", // Replace with actual image path
    },
    {
      name: "Sale Items",
      description: "Grab the best deals on footwear you’ll love.",
      image: "img/sale-shoes.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="min-h-screen bg-[#eef3f9] p-6">
      <div className="categories-container max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#8fa3bf]">Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-item rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-2xl font-semibold text-[#8fa3bf]">{category.name}</h3>
                <p className="text-gray-700 mt-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
