import React from "react";

const Setting = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <section className="text-black flex flex-col justify-start items-start w-full h-full overflow-y-auto">
        <h1 className="text-4xl font-bold">Welcome to Our Product</h1>
        <p className="text-lg mt-4">A short and compelling tagline goes here.</p>
        <h1 className="text-4xl font-bold">Welcome to Our Product</h1>
        <p className="text-lg mt-4">A short and compelling tagline goes here.</p>
        <h1 className="text-4xl font-bold">Welcome to Our Product</h1>
        <p className="text-lg mt-4">A short and compelling tagline goes here.</p>
        <div className="flex w-full justify-end px-8 mt-auto ">
          <button className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Setting;
