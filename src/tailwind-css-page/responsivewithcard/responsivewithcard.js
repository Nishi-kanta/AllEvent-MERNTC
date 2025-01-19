import React, { useState } from "react";
import swigy from "../../image/s.png";

const ResponsivewithCard = () => {
  // const [isselected, setIsSelected] = useState({ idx: 1 });
  const [selectedval, setSelectedValue] = useState({
    id: 1,
    name: "",
    description: "",
    type: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [selectedval, setSelectedValue] = useState({});

  const cardselected = (value) => {
    // setSelectedValue(value);
    setSelectedValue((prevval) => ({ ...prevval, ...value }));
    // setIsSelected((prevState) => ({
    //   ...prevState,
    //   idx: value.id,
    // }));
    if (value.type === "first") {
      setIsPopupOpen(true);
    }
  };

  const carddata = [
    {
      id: 1,
      name: "Card1",
      description:
        "Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.Description for card 1.",
      type: "first",
    },
    {
      id: 2,
      name: "Card2",
      description: "Description for card 2.",
    },
    {
      id: 3,
      name: "Card3",
      description: "Description for card 3.",
      type: "first",
    },
    {
      id: 4,
      name: "Card4",
      description: "Description for card 4.",
    },
    {
      id: 5,
      name: "Card5",
      description: "Description for card 5.",
    },
    {
      id: 6,
      name: "Card6",
      description: "Description for card 6.",
    },
  ];

  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="sticky top-0 w-full h-[5rem] flex justify-center bg-pink-200">
        Header
      </div>

      {/* Main Content */}
      <div className=" flex-1 bg-gray-100 px-4 overflow-auto flex justify-center items-center">
        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {carddata?.map((item) => (
            <div
              onClick={() => {
                cardselected(item);
                // openPopup();
              }}
              className={` ${
                selectedval.id === item.id ? "border-[2px] border-cyan-400" : ""
              } bg-white  hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6 text-start w-[50vw] h-[30vh] sm:w-[28vw] sm:h-[28vh] overflow-hidden flex flex-col`}
            >
              {/* <div className="flex justify-center items-center md:justify-start md:items-start w-full mb-4"> */}
              <img
                src={swigy}
                alt="placeholder"
                className="h-12 w-12 object-cover rounded-md"
              />
              {/* </div> */}
              <h2 className="text-xl font-bold ">{item?.name}</h2>
              <p className="text-gray-600 mt-2 line-clamp-3">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-pink-300 p-5 w-full">
        <p>Footer</p>
      </div>
      {/*Popup*/}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
              onClick={closePopup}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold">{selectedval.name}</h2>
            <p className="mt-4">{selectedval.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsivewithCard;