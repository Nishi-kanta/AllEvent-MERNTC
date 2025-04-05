import React, { useState, useEffect, useRef } from "react";

const InfinityScrollingCard = () => {
  const [cards, setCards] = useState([]); // Store cards
  const [page, setPage] = useState(1); // Track pages for API calls
  const [loading, setLoading] = useState(false); // Show loading when fetching
  const observer = useRef(null); // Reference for the last card

  // Function to fetch cards from API
  const fetchCards = async () => {
    if (loading) return; // Prevent duplicate calls
    setLoading(true);

    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=8&skip=${(page - 1) * 8}`
      );
      const data = await response.json();

      setCards((prev) => [...prev, ...data.products]); // Append new cards
      setPage((prev) => prev + 1); // Increment page
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch first 8 cards on mount
  useEffect(() => {
    fetchCards();
  }, []);

  // Observer to detect when the last card is visible
  useEffect(() => {
    if (!observer.current) return;

    const observerInstance = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchCards(); // Fetch more cards when last one is visible
        }
      },
      { threshold: 1.0 }
    );

    observerInstance.observe(observer.current);

    return () => observerInstance.disconnect(); // Cleanup observer
  }, [cards]);

  return (
    <div className="p-4 bg-gray-800 min-h-screen text-white">
      <div className="grid grid-cols-1 w-1/2 gap-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={index === cards.length - 1 ? observer : null} // Attach observer to last card
            className="p-4 border rounded-lg bg-gray-100 text-black"
          >
            {card.name}
          </div>
        ))}
      </div>

      {loading && <p className="text-center mt-4">Loading more cards...</p>}
    </div>
  );
};

export default InfinityScrollingCard;