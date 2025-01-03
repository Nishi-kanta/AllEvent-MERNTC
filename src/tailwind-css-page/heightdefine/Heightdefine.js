import React from "react";

const Heightdefine = () => {
  return (
    <div>
      <div class="h-screen bg-gray-300">
        <div class="h-full bg-green-500">Child matches parent's height.</div>
      </div>
      <div class="bg-gray-300">
        <div class="min-h-screen bg-blue-500">
          Child will stretch to at least the screen height.
        </div>
      </div>
    </div>
  );
};

export default Heightdefine;
