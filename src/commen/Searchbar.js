import React from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = ({ handelchange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        name="searchval"
        onChange={(e) => handelchange(e)}
        className="p-2 pl-10 rounded-lg w-full border-2 border-gray-300"
      />
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500">
        <IoIosSearch />
      </div>
    </div>
  );
};

export default Searchbar;
