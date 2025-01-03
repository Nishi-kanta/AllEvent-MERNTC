import React from "react";
import { IoIosClose } from "react-icons/io";

const RightSidebar = ({ isRightOpen, handelRightClose }) => {
  return (
    <div>
      <div
        className={`fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg z-20 transition-transform duration-300 ${
          isRightOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handelRightClose} className="text-gray-500 text-2xl">
            <IoIosClose />
          </button>
        </div>
        <div className="p-2 text-black">
          <h2 className="text-xl font-bold">Menu</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
            <li className="cursor-pointer hover:text-gray-500">About</li>
            <li className="cursor-pointer hover:text-gray-500">Contact</li>
            <li className="cursor-pointer hover:text-gray-500">Career</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
