import React, { useMemo, useState } from "react";
import Usememochild from "./Usememochild";

const Usememoparent = () => {
  const [parentCount, setParentCount] = useState(0);

  console.log("Parent Component Rendered");

  // Memoizing the function so it's only re-created when `parentCount` changes
  const memoizedFunction = useMemo(() => {
    console.log("Memoized Function Executed");
    return () => {
      alert(`Parent Count is: ${parentCount}`);
    };
  }, [parentCount]); // Only re-computes when `parentCount` changes

  return (
    <div>
      <h1>Parent Count: {parentCount}</h1>
      <button onClick={() => setParentCount((prev) => prev + 1)}>
        Update Parent Count
      </button>
      <Usememochild onChildUpdate={memoizedFunction} />
    </div>
  );
};

export default Usememoparent;
