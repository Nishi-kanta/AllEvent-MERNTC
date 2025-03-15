import React, { useState } from "react";
import {
  HomeIcon,
  LightningBoltIcon,
  MailIcon,
} from "@heroicons/react/outline";

const DsLandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">MyBrand</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-800 hover:text-blue-500">
                Features
              </a>
              <a href="#pricing" className="text-gray-800 hover:text-blue-500">
                Pricing
              </a>
              <a href="#contact" className="text-gray-800 hover:text-blue-500">
                Contact
              </a>
            </nav>
            <button onClick={toggleMenu} className="md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
            <div
              className={`lg:hidden bg-white text-[#000000] text-[16px] font-normal p-4 absolute top-0 right-0 w-3/4 h-full
               ${isOpen ? "animate-slideIn" : "animate-slideOut"}`}
              //   className={`lg:hidden bg-white text-[#000000] text-[16px] font-normal p-4 absolute top-0 right-0 w-3/4 h-full transform transition-transform duration-300 ease-in-out ${
              //     isOpen ? "translate-x-0" : "translate-x-full"
              //   }`}
              //   style={{
              //     transform: isOpen ? "translateX(0)" : "translateX(100%)",
              //   }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl font-bold "
                  >
                    ✕
                  </button>
                </div>
                <div className="flex-grow flex justify-center">
                  <nav className="flex flex-col  md:hidden ">
                    <a
                      href="#features"
                      className="text-gray-800 hover:text-blue-500"
                    >
                      Features
                    </a>
                    <a
                      href="#pricing"
                      className="text-gray-800 hover:text-blue-500"
                    >
                      Pricing
                    </a>
                    <a
                      href="#contact"
                      className="text-gray-800 hover:text-blue-500"
                    >
                      Contact
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyBrand</h1>
          <p className="text-xl mb-8">Your solution to modern problems.</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-50">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              {/* <HomeIcon className="w-12 h-12 mx-auto text-blue-600" /> */}
              <h3 className="text-xl font-bold mt-4">Feature One</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              {/* <LightningBoltIcon className="w-12 h-12 mx-auto text-blue-600" /> */}
              <h3 className="text-xl font-bold mt-4">Feature Two</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              {/* <MailIcon className="w-12 h-12 mx-auto text-blue-600" /> */}
              <h3 className="text-xl font-bold mt-4">Feature Three</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 MyBrand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DsLandingPage;