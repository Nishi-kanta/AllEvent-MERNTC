import React from "react";

const ChildOne = ({ val, setdynavalue, setIsSubmit }) => {
  const valuechange = () => {
    setdynavalue("Sahoo");
    setTimeout(() => {
      setIsSubmit(true);
    }, 3000);
  };
  return (
    <div>
      <h1>Child Demo1</h1>
      <h2>{val}</h2>
      <button onClick={valuechange}>Click</button>
    </div>
  );
};

export default ChildOne;
