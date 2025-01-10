import React, { useState, useEffect } from "react";
import swigy from "../../image/s.png";
const CardSliding = () => {
  const carddata = [
    { name: "Card1", description: "Description for card 1." },
    { name: "Card2", description: "Description for card 2." },
    { name: "Card3", description: "Description for card 3." },
    { name: "Card4", description: "Description for card 4." },
    { name: "Card5", description: "Description for card 5." },
    { name: "Card6", description: "Description for card 6." },
    { name: "Card5", description: "Description for card 5." },
    { name: "Card6", description: "Description for card 6." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        // sm breakpoint
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        // md breakpoint
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Calculate maximum possible index to prevent blank spaces
  const maxIndex = Math.max(0, carddata.length - cardsPerView);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + cardsPerView);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - cardsPerView);
    }
  };

  // Calculate card width based on cards per view
  const cardWidth = 100 / cardsPerView;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="flex items-center justify-between w-full max-w-6xl gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        >
          &larr;
        </button>

        {/* Card Container */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex / carddata.length) * 100
              }%)`,
              width: `${(carddata.length * 100) / cardsPerView}%`,
            }}
          >
            {carddata.map((val, index) => (
              <div
                key={index}
                className="px-2"
                style={{ width: `${cardWidth}%` }}
              >
                <div className="bg-slate-400 rounded-md p-6 h-full">
                  <img
                    src={swigy}
                    alt="placeholder"
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <p className="mt-2 font-semibold text-lg">{val.name}</p>
                  <p className="mt-1 text-gray-700">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default CardSliding;