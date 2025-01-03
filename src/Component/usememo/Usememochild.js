import React, { useState } from "react";

const Usememochild = ({ onChildUpdate }) => {
  const [childCount, setChildCount] = useState(0);

  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Count: {childCount}</h2>
      <button onClick={() => setChildCount((prev) => prev + 1)}>
        Update Child Count
      </button>
      <button onClick={onChildUpdate}>Trigger Parent Function</button>
    </div>
  );
};

export default Usememochild;
