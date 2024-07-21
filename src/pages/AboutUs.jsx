import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center text-blue-800">
            About Us
          </h1>
          <p className="text-lg mb-4">
            Welcome to All In One Calculator! We are a team of passionate
            developers dedicated to providing you with a comprehensive online
            platform for various types of calculators. Whether you need a
            financial calculator, a health and fitness calculator, or a math and
            algebra calculator, we’ve got you covered.
          </p>
          <p className="text-lg mb-4">
            Our goal is to make your calculations easy and accurate, with a
            user-friendly interface and reliable results. We are constantly
            updating and improving our calculators to meet your needs.
          </p>
          <p className="text-lg mb-4">
            Thank you for choosing us as your go-to calculator resource. If you
            have any questions or feedback, feel free to{" "}
            <a href="/contact" className="text-blue-500 underline">
              contact us
            </a>
            .
          </p>
          <p className="text-lg text-center">
            © 2024 All In One Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
