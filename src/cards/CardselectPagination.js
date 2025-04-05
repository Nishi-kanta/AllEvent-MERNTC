import React, { useState, useEffect } from "react";

const CardselectPagination = () => {
  const [cards, setCards] = useState([
    { id: 1, name: "Card 1" },
    { id: 2, name: "Card 2" },
    { id: 3, name: "Card 3" },
    { id: 4, name: "Card 4" },
    { id: 5, name: "Card 5" },
    { id: 6, name: "Card 6" },
    { id: 7, name: "Card 7" },
    { id: 8, name: "Card 8" },
    { id: 9, name: "Card 9" },
    { id: 10, name: "Card 10" },
  ]);

  const [newCards, setNewCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(cards.length / perPage);

  // Get the current page data
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentCards = cards.slice(indexOfFirst, indexOfLast);

  // Automatically select the first card on page change
  useEffect(() => {
    if (currentCards.length > 0) {
      const firstCardId = currentCards[0].id;
      setSelectedCard(firstCardId);
      setNewCards((prev) => prev.filter((cardId) => cardId !== firstCardId));
    }
  }, [currentPage, cards]);

  // Function to handle selecting a card
  const handleSelectCard = (id) => {
    setSelectedCard(id);
    setNewCards((prev) => prev.filter((cardId) => cardId !== id)); // Remove from newCards
  };

  // Function to add a new card
  const addNewCard = () => {
    const newCard = { id: cards.length + 1, name: `Card ${cards.length + 1}` };
    setCards((prev) => [...prev, newCard]); // Add new card
    setNewCards((prev) => [...prev, newCard.id]); // Mark new card as red
  };

  // Function to get pagination range with `...`
  const getPaginationRange = () => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (currentPage === 1) return [1, 2, "...", totalPages - 1, totalPages];
    if (currentPage === 2) return [1, 2, 3, "...", totalPages];
    if (currentPage === 3) return [1, 2, 3, 4, "...", totalPages];

    if (currentPage >= totalPages - 2)
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <div className="p-4 bg-gray-800 min-h-screen text-white">
      <button
        onClick={addNewCard}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add New Card
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentCards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleSelectCard(card.id)}
            className={`p-4 border rounded-lg cursor-pointer transition duration-300 
              ${
                newCards.includes(card.id)
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-black"
              } 
              ${selectedCard === card.id ? "border-4 border-blue-500" : ""}`}
          >
            {card.name}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {getPaginationRange().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            className={`px-3 py-1 ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-300"
            } rounded`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardselectPagination;