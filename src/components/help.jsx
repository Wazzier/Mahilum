import React, { useEffect, useState } from "react";

const Help = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="min-h-screen bg-[#eef3f9] p-6">
      <div className="help-container max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#8fa3bf]">
          How Can We Help You with Shoes?
        </h2>

        <div className="faq-section mb-8">
          <h3 className="text-2xl font-semibold text-[#8fa3bf] mb-6">
            Frequently Asked Questions
          </h3>

          <div className="faq-item mb-6">
            <h4 className="text-xl font-medium text-[#8fa3bf]">
              How do I choose the right shoe size?
            </h4>
            <p className="text-gray-700">
              We provide detailed size charts for every product. You can also
              contact our team for guidance on finding the perfect fit.
            </p>
          </div>

          <div className="faq-item mb-6">
            <h4 className="text-xl font-medium text-[#8fa3bf]">
              What is your return policy for shoes?
            </h4>
            <p className="text-gray-700">
              We offer hassle-free returns within 30 days of purchase, provided
              the shoes are unused and in their original packaging.
            </p>
          </div>
        </div>

        <div className="team-section mb-8">
          <h3 className="text-2xl font-semibold text-[#8fa3bf] mb-6">
            Meet Our Footwear Experts
          </h3>
          <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.length > 0 ? (
              teamMembers.map((user) => (
                <div
                  key={user.id}
                  className="team-member bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-[#8fa3bf]">
                    {user.name}
                  </h4>
                  <p className="text-gray-700">{user.email}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700">
                Loading team members...
              </p>
            )}
          </div>
        </div>

        <div className="contact-info">
          <h3 className="text-2xl font-semibold text-[#8fa3bf] mb-6">
            Contact Information
          </h3>
          <p className="text-gray-700 mb-4">
            If you have any questions about our shoes, please reach out to us
            through our <strong>Contact Form</strong> or email at{" "}
            <strong>help@shoestore.com</strong>.
          </p>
          <p className="text-gray-700">
            We're here to assist you with size recommendations, orders, or any
            other inquiries you may have. Let us help you step confidently into
            style!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
