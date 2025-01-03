import React from "react";

const ProfileCard = ({ data, onButtonClick }) => {
  return (
    <>
      {data.map((val, index) => (
        <div
          key={index}
          className="h-full lg:w-full m-5 border-2 shadow-md flex flex-col justify-center items-center"
        >
          <div className="rounded-full h-14 w-14 bg-slate-500 flex justify-center m-5 items-center">
            {val.logo}
          </div>
          <h1>{val.name}</h1>
          <h3>Position: {val.position}</h3>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded"
            onClick={() => onButtonClick(val.action, val)}
          >
            {val.action === "alert1" ? "Show Alert" : "Go to Another Page"}
          </button>
        </div>
      ))}
    </>
  );
};

export default ProfileCard;
