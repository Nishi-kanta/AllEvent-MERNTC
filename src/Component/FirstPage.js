import React from "react";

const FirstPage = ({ val, setdynavalue, childpage }) => {
  const valuechange = () => {
    setdynavalue("Nishikanta");
    setTimeout(() => {
      childpage();
    }, 3000);
  };
  console.log(val);
  return (
    <div>
      <h1>FirstPage Demo</h1>
      <h2>{val}</h2>
      <button onClick={valuechange}>Click</button>
    </div>
  );
};

export default FirstPage;
