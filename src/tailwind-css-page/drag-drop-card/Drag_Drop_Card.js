import React, { useState } from "react";

const initialCards = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" },
];

function Drag_Drop_Card() {
  const [cards, setCards] = useState(initialCards);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragEnter = (index) => {
    if (index === draggedIndex) return;

    const newCards = [...cards];
    const [removed] = newCards.splice(draggedIndex, 1);
    newCards.splice(index, 0, removed);
    setDraggedIndex(index);
    setCards(newCards);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Drag and Drop Cards</h1>
      <div className="w-full max-w-md space-y-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            className="bg-white shadow-md p-4 rounded-lg cursor-move transition hover:bg-blue-50"
          >
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drag_Drop_Card;