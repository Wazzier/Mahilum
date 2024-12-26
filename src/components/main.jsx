import React from "react";

const Main = () => {
  const sections = [
    {
      title: "Popular in Men's Shoes",
      description: "Explore our best-selling men's shoes for every occasion!",
      bannerImage: "img/s1.jpg",
      products: [
        {
          name: "Classic Leather Sneakers",
          image: "img/s2.webp",
          price: "₱3,200",
        },
        {
          name: "Formal Oxford Shoes",
          image: "img/s3.jpg",
          price: "₱4,500",
        },
        {
          name: "Running Shoes",
          image: "img/s4.avif",
          price: "₱2,800",
        },
        {
          name: "Hiking Boots",
          image: "img/s5.webp",
          price: "₱5,000",
        },
      ],
    },
    {
      title: "Popular in Women's Shoes",
      description: "Check out our most popular women's footwear!",
      bannerImage: "img/s6.jpg",
      products: [
        {
          name: "Elegant High Heels",
          image: "img/s7.jpg",
          price: "₱2,500",
        },
        {
          name: "Comfortable Flats",
          image: "img/s8.jpg",
          price: "₱1,800",
        },
        {
          name: "Trendy Sneakers",
          image: "img/s9.wepb",
          price: "₱2,900",
        },
        {
          name: "Ankle Boots",
          image: "img/s10.avif",
          price: "₱3,700",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f3f4f6] p-6 space-y-12">
      {sections.map((section, index) => (
        <section key={index} className="space-y-8">
          <div className="flex items-center justify-between bg-[#e7ecee] p-6 rounded-lg shadow-md">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-700">{section.title}</h2>
              <p className="text-gray-600 mt-2">{section.description}</p>
            </div>
            <img
              src={section.bannerImage}
              alt={`${section.title} Banner`}
              className="w-full md:w-80 h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.products.map((product, idx) => (
              <article
                key={idx}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <a href={product.link} className="block">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-lg font-bold text-gray-600 mt-2">{product.price}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Main;
