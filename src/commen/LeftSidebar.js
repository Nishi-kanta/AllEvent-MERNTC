import React from "react";
import { IoIosClose } from "react-icons/io";

const LeftSidebar = ({ isLeftOpen, handelLeftClose }) => {
  return (
    <div>
      <div
        className={`fixed left-0 top-0 h-full w-[300px] bg-white shadow-lg z-20 transition-transform duration-300 ${
          isLeftOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handelLeftClose} className="text-gray-500 text-2xl">
            <IoIosClose />
          </button>
        </div>
        <div className="p-2 text-black">
          <h2 className="text-xl font-bold">Sidebar Content</h2>
          <p>Click cross icon or outside to close.</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
