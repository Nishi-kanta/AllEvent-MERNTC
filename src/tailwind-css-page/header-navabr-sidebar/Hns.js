import React from "react";

const Hns = () => {
  return (
    <div>
      <div className="w-full h-[5rem]  flex justify-center bg-pink-200">
        Header
      </div>
      <div className="w-full h-[5rem] sticky top-0 bg-yellow-200">Navbar</div>
      <div className="flex h-screen">
        <div className="bg-gray-300 w-[50%]">
          <p>Sidebar</p>
        </div>
        <section class="bg-blue-500 text-white py-10 flex flex-col  items-center w-full h-full overflow-y-auto">
          <h1 class="text-4xl font-bold">Welcome to Our Product</h1>
          <p class="text-lg mt-4">A short and compelling tagline goes here.</p>
          <h1 class="text-4xl font-bold">Welcome to Our Product</h1>
          <p class="text-lg mt-4">A short and compelling tagline goes here.</p>

          <div class="flex w-full justify-end px-8 mt-auto">
            <button class="px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hns;
