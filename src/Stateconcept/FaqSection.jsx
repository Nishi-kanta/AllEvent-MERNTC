import React, { useState } from "react";
import { faqData } from "../Data/FaqData";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(faqData[0].id);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle visibility
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h2>Frequently Asked Questions</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {faqData.map((faq, index) => (
          <li
            key={index}
            style={{
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "1rem",
            }}
          >
            <button
              onClick={() => toggleAnswer(index + 1)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                fontSize: "1rem",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {faq.question}
            </button>
            {activeIndex === index + 1 && (
              <p style={{ marginTop: "0.5rem" }}>{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqSection;
