import React from "react";
import { GiFamilyHouse } from "react-icons/gi";

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 border p-4 rounded-md shadow-md px-3 m-10">
      <GiFamilyHouse className="text-4xl text-blue-500" />
      <div>
        <h1 className="text-xl font-bold">First Heading</h1>
        <p className="text-gray-600">
          Description including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Cards;
